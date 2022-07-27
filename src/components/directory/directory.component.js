import { useState } from 'react';
import CardList from '../card-list/card-list.component';
import './directory.styles.scss';

const Directory = () => {
  const [type, setType] = useState('apartment');
  return (
    <div className='directory'>
      <div className='list-directory'>
        <div
          className={`border-box ${type === 'apartment' ? 'selected' : ''}`}
          onClick={() => {
            setType('apartment');
          }}
        >
          Căn hộ
        </div>
        <div
          className={`border-box ${type === 'office' ? 'selected' : ''}`}
          onClick={() => {
            setType('office');
          }}
        >
          Văn phòng
        </div>
      </div>
      <ul className='list-product'>
        <CardList />
      </ul>
    </div>
  );
};

export default Directory;
