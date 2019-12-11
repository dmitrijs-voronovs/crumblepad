import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonMenuButton, IonMenuToggle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import NoteListPage from './pages/NoteListPage';
import NoteAddPage from './pages/NoteAddPage';
import ArchivePage from './pages/ArchivePage';
import Menu from './components/Menu';
import store from './store';
import { Provider } from 'react-redux';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
    <Provider store={store}>
        <IonApp>
            <IonReactRouter>
                <Menu />
                <IonRouterOutlet id="content">
                    <Route path="/note/:noteId" component={NoteAddPage} />
                    <Route path="/home" component={NoteListPage} exact={true} />
                    <Route path="/archive" component={ArchivePage} exact={true} />
                    <Route path="/" component={() => <Redirect to="/home" />} exact={true} />
                    <Redirect to="/home" />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    </Provider>
);

export default App;
