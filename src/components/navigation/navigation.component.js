import { Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigator = () => {
  return (
    <nav className='nav-home'>
      <div className='nav-list'>
        <div className='options'>
          <Link className='option' to='/'>
            Trang Chủ
          </Link>
          <Link className='option' to='/gioithieu'>
            Giới thiệu
          </Link>
          <Link className='option' to='/product'>
            Sản Phẩm
          </Link>
          <Link className='option apartment-list' to='/apart'>
            Căn Hộ Trống
          </Link>
          <Link className='option' to='/office'>
            Văn Phòng Trống
          </Link>
          <Link className='option' to='/contact'>
            CONTACT
          </Link>
        </div>

        <div className='search-header'>
          <form className='search-form'>
            <input type='text' placeholder='Tìm kiếm'></input>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
