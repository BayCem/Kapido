import React from 'react';
import { Link } from 'react-router-dom';
import RoundedButton from '../components/blueButtonComponent/Button';

const Home = () => (
  <div>
    <h2>Ürünleri Satmanın En Hızlı ve En Kolay Yolu</h2>
    <Link to="/basla">
      <RoundedButton label="Satmaya Başla" className="shadow-blue-button" />
    </Link>
  </div>
);

export default Home;
