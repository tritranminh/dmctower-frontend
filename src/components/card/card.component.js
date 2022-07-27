import './card.styles.scss';

const Card = () => {
  return (
    <div className='card-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(https://i.ibb.co/WpJ7n5F/20160922141152.jpg)`,
        }}
      />
      <div className='card-footer'>
        <span className='name'>Căn hộ</span>
        <span className='price'>300$</span>
      </div>
    </div>
  );
};

export default Card;
