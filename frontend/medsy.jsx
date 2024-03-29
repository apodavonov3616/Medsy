import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchMedication } from './actions/medication_actions';



document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id },
            errors: {
                session: []
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // window.store = store;
    // window.getState = store.getState;
    // window.fetchMedication = fetchMedication
    ReactDOM.render(<Root store={store} />, root);
})

// setInterval(function() {
//     let request = new XMLHttpRequest();
//     request.open("GET", "https://medsy.herokuapp.com/", true);
//     request.onload = () => {}
//     request.send();
// }, 1500000)