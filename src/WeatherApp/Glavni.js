import React from 'react';
import Aplication from './Aplication';
import Nav from './Nav';
import './WeatherApp.css'

const Glavni = () => {
    return (
        <div className='glavnipage'>
            <Nav/>
            <Aplication/>
        </div>
    );
};

export default Glavni;