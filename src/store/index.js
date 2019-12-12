import NotesReducer from "./Notes.reducer";
import { createStore, combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const combinedReducer = combineReducers({
    notes:NotesReducer,
    firebase: firebaseReducer
});

const store = createStore(
    combinedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;