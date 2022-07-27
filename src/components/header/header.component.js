import Carousel from '../carousel/carousel.component';
import Navigator from '../navigation/navigation.component';
import './header.styles.scss';

const Header = () => {
  return (
    <header className='app-header'>
      <img alt='' src='https://i.ibb.co/X3z95gH/bg-banner.jpg' />

      <Navigator />

      <Carousel />
    </header>
  );
};

export default Header;
