import Card from './../card/card.component';

import './card-list.styles.scss';

const CardList = () => {
  const array = [1, 2, 3, 4];
  return (
    <div className='card-preview'>
      <div className='card'>
        <h1 className='title'>1 Phòng ngủ</h1>
        <div className='preview'>
          {array.map(() => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
