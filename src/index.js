import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import Root from './App';
import { EncryptVal } from './Utils/Encryption';
import { GetTrackingID } from './Utils/ApiCalls';

const root = ReactDOM.createRoot(document.getElementById('root'));
const TrackingIdResonse=GetTrackingID();
TrackingIdResonse.then((data)=>{
if(data!==null){
  const TRACKING_ID = data.items[0].fields.tracking_Id; // OUR_TRACKING_ID
  
  const UserEmail=localStorage.getItem('UserObj')==null ? "Random User":JSON.parse(localStorage.getItem('UserObj')).UserEmail
  const encryptedEmail=EncryptVal(UserEmail)
    ReactGA.initialize(TRACKING_ID, {
      debug: true,
      titleCase: true,
      gaOptions: {
        
        siteSpeedSampleRate: 100
      }
    });
    // ReactGA.create({'UA-238818315-1':'auto'})
    ReactGA.set({ userId: encryptedEmail });
}


})

root.render(

    <BrowserRouter>
    <Root />
    </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
