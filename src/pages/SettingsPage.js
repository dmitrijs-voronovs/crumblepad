/* eslint-disable react-hooks/exhaustive-deps */
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonIcon, IonItem, IonLabel, IonPage, IonReorder, IonReorderGroup } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import ExpirationTimePicker from '../components/ExpirationTimePicker';
import Loader from '../components/Loader';
import { expirationOptions as defaultExpirationOptions } from '../components/Note';
import PageHeader from '../components/PageHeader';
import { timeLeft } from '../utils/time';
import '../styles/SettingsPage.css';

const usePageHook = (currentPath, targetPath) => {
  const [isOnSettingsPage, setIsOnSettingsPage] = useState(true);

  useEffect(() => {
    if (currentPath === targetPath) {
      setIsOnSettingsPage(true);
    }
    else setIsOnSettingsPage(false);
  }, [currentPath, targetPath]);

  return isOnSettingsPage
}

const SettingsPage = ({ location: { pathname = '' }, match: { path = '' } }) => {
  const firebase = useFirebase();
  const uid = localStorage.getItem('uid');
  const settings = useSelector(({ firebase }) => firebase.data.settings) || {};
  const isRequesting = useSelector(({ firebase }) => firebase.requesting[`settings/${ uid }`]);

  const { [uid]: user = {} } = settings || {};
  const { expirationOptions = defaultExpirationOptions } = user || {};
  const [expOptionOrder, setExpOptionOrder] = useState(
    Object.values(expirationOptions).map(({ val }) => val)
  );

  const isOnSettingsPage = usePageHook(pathname, path);

  const [expOpts, setExpOpts] = useState(expirationOptions);

  const doReorder = event => {
    const from = event.detail.from;
    // fix bug with more places than elements
    const to = event.detail.to === Object.keys(expOpts).length ? event.detail.to - 1 : event.detail.to;
    if (from === to) return event.detail.complete();

    const newOrder = [...expOptionOrder];
    const moving = newOrder.splice(from, 1);
    newOrder.splice(to, 0, ...moving);
    setExpOptionOrder(newOrder);

    event.detail.complete();
  }

  const updateExpiratonOptions = (customExpirationTime) => {
    const chooseExpOpt = (orig = 0) => {
      const index = orig + expOptionOrder.length;
      if (expOpts[index]) return chooseExpOpt(orig + 1);
      return index;
    }

    const expOptCount = chooseExpOpt();
    const allExpirationOptions = {
      ...expOpts,
      [expOptCount]: customExpirationTime
    }
    setExpOpts(allExpirationOptions);
    setExpOptionOrder([...expOptionOrder, `${ expOptCount }`]);
    firebase.set(`settings/${ uid }/expirationOptions`, allExpirationOptions);
  };

  const deleteExpirationOption = (e) => {
    if (expOptionOrder.length === 1) return;

    const noteId = e.target.id;
    const newOrder = [...expOptionOrder];
    newOrder.splice(newOrder.indexOf(noteId), 1);

    const newExpOpts = newOrder.reduce((acc, pos) => (
      { ...acc, [pos]: expOpts[pos] }
    ), {});

    setExpOptionOrder(newOrder);
    setExpOpts(newExpOpts);
  }

  useEffect(() => {
    if (isOnSettingsPage) {
      setExpOptionOrder(Object.keys(expOpts));
      setExpOpts(expirationOptions);
    } else {
      const convertedOptions = expOptionOrder.reduce((acc, pos, i) => (
        { ...acc, [i]: expOpts[pos] }
        ), {});
      firebase.set(`settings/${ uid }/expirationOptions`, convertedOptions);
    }
  }, [isOnSettingsPage])

  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const renderDatePicker = () => {
    if (isRequesting) return null;

    const onButtonClick = () => {
      setIsPickerOpen(true);
    }

    return (
      <>
        <IonButton className="ExceptionOptionsAddOptionButton" onClick={ onButtonClick }>Add option</IonButton>
        <ExpirationTimePicker
          isPickerOpen={ isPickerOpen }
          setIsPickerOpen={ setIsPickerOpen }
          updateExpiratonOptions={ updateExpiratonOptions }
        />
      </>
    );
  }

  const renderExpirationOptions = () => {
    if (isRequesting) return <Loader />;

    return Object.entries(expOpts).map(([id, { title, val }]) => (
      <IonItem key={ id }>
        <IonLabel className="ExpirationOptionsLabel">
          {`${ title } (${timeLeft(new Date().getTime() + val, true)})`}
        </IonLabel>
        { expOptionOrder.length === 1 ? null : (
          <IonButton className="ion-no-margin ExpirationOptionsButton" color="secondary" id={ id } slot="end" onClick={ deleteExpirationOption }>
            <IonIcon icon={ closeCircle }></IonIcon>
          </IonButton>
        )}
        <IonReorder slot="start" />
      </IonItem>
    ));
  };

  const renderExpirationOptionSettings = () => {
    if (!isOnSettingsPage) return null;

    return (
      <IonCard>
        <IonCardHeader>Expiration options</IonCardHeader>
        <IonCardContent className="SettingsCard">
          <IonReorderGroup disabled={ false } onIonItemReorder={ doReorder }>
            {renderExpirationOptions()}
          </IonReorderGroup>
          { renderDatePicker() }
        </IonCardContent>
      </IonCard>
    );
  };

  if (!uid) return <Redirect to='/login' />
  return (
    <IonPage>
      <PageHeader title='Settings'/>
      <IonContent>
        { renderExpirationOptionSettings() }
      </IonContent>
    </IonPage>
  );
};

export default withRouter(SettingsPage);
