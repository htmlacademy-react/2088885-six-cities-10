import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { FavoritePage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PropertyPage } from '../../pages/property-page/property-page';
import { PrivateRoute } from '../private-route/private-route';

type AppProps = {
  countOfAvailablePlaces: number;
};

export const App = ({ countOfAvailablePlaces }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage countOfAvailablePlaces={countOfAvailablePlaces} />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
          <FavoritePage />
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Offer} element={<PropertyPage />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

