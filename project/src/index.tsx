import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { rentalOffersData } from './mocks/offers';

const ROOT = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const SETTINGS = {
  countOfAvailablePlaces: 5,
};

ROOT.render(
  <React.StrictMode>
    <App countOfAvailablePlaces={SETTINGS.countOfAvailablePlaces}rentalOffersData={rentalOffersData}/>
  </React.StrictMode>,
);
