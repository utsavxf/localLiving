import React from 'react';
import NavBar from './NavBar/NavBar';
import { Home } from '@mui/icons-material';
import HomePage from './HomePage/HomePage';
import SecondSection from './secondSection/SecondSection';



const ViewPage = () => {
  return (
    <div style={{height:'2427px', color:'black'}} className='background2'>
      <NavBar/>
      <HomePage/>
      <SecondSection/>
    </div>
  );
};

export default ViewPage;
