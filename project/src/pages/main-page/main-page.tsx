import { useState } from 'react';
import { CardItem } from '../../components/card-item/card-item';
import { Header } from '../../components/header/header';
import { ItemList } from '../../components/item-list/item-list';
import { Filter } from '../../filter/filter';
import { Navbar } from '../../navbar/navbar';
import { TRentalOfferData, TRentalRoomData } from '../../types/offers';

type TMainPageProps = {
  countOfAvailablePlaces: number,
  rentalOffersData: TRentalOfferData
};

export const MainPage = ({ countOfAvailablePlaces, rentalOffersData }: TMainPageProps) => {
  const [roomId, setRoomId] = useState<number | null>(null);

  const onMouseOver = (id: number) => {
    setRoomId(id);
  };
  return (
    <div>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <Navbar />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{roomId} places to stay in Amsterdam</b>
                <Filter />
                <div className="cities__places-list places__list tabs__content">
                  <ItemList items={rentalOffersData}
                    renderItem={(item: TRentalRoomData) => <CardItem item={item} key={item.id} handleMouseOver={onMouseOver}/>}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
