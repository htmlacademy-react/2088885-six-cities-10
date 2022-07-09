import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  itemsFound: number;
};

function App({ itemsFound }: AppProps): JSX.Element {
  return (
    <div>
      <MainPage itemsFound={itemsFound}/>
    </div>
  );
}

export default App;
