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


const firebaseConfig = {
  apiKey: "AIzaSyDFtNWFzUAUVlDIX9SHg36SBRTheCqbSpY",
  authDomain: "resumes1-17260.firebaseapp.com",
  projectId: "resumes1-17260",
  storageBucket: "resumes1-17260.appspot.com",
  messagingSenderId: "318384229954",
  appId: "1:318384229954:web:74c2feebe24dff46bd27db"
};

firebase.initializeApp(firebaseConfig);

const reduxStore = createStore(rootReducer, 
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      // reduxFirestore(config)  // redux bindings for firestorez

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