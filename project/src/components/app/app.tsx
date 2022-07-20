import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { FavoritePage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PropertyPage } from '../../pages/property-page/property-page';
import { TRentalOfferData } from '../../types/offers';
import { PrivateRoute } from '../private-route/private-route';

type TAppProps = {
  countOfAvailablePlaces: number;
  rentalOffersData: TRentalOfferData;
};

export const App = ({ countOfAvailablePlaces, rentalOffersData }: TAppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage countOfAvailablePlaces={countOfAvailablePlaces}
        rentalOffersData={rentalOffersData}/>}
      />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
          <FavoritePage rentalOffersData={rentalOffersData}/>
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Offer} element={<PropertyPage />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

