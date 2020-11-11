import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { createStore,applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
// import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import firebase from 'firebase/app'
// import config from './config';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyDr0lm6biVEWBnPYQvhy5oGG_MLaCbuDE0",
  authDomain: "resume-898a2.firebaseapp.com",
  databaseURL: "https://resume-898a2.firebaseio.com",
  projectId: "resume-898a2",
  storageBucket: "resume-898a2.appspot.com",
  messagingSenderId: "253055347294",
  appId: "1:253055347294:web:cd9089a14a220c967522cf",
  measurementId: "G-YS68QTD854"
};

firebase.initializeApp(firebaseConfig);

const reduxStore = createStore(rootReducer, 
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      // reduxFirestore(config)  // redux bindings for firestore

      reduxFirestore(firebase) 
    ));



// ReactDOM.render(
//   <Provider store={reduxStore} >
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   </Provider>,
//   document.getElementById('root')
// );




ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);