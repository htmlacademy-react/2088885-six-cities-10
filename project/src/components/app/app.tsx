import { MainPage } from '../../pages/main-page/main-page';

type AppProps = {
  countOfAvailablePlaces: number;
};

export const App = ({ countOfAvailablePlaces }: AppProps): JSX.Element => (
  <div>
    <MainPage countOfAvailablePlaces={countOfAvailablePlaces} />
  </div>
);

