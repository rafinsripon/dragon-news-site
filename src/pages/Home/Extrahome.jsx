import React from 'react';
import logo1 from '../../assets/brand/brand-7.png';
import logo2 from '../../assets/brand/brand-3.png';
import logo3 from '../../assets/brand/brand-8.png';
import './Extrahome.css';
import { FaRockrms } from "react-icons/fa";

const Extrahome = () => {
    return (
        <div className='mt-5 bgColor'>
            <h2>hello home</h2>
            <div className="logo font">
                <div className='logoContainr'>
                <img className='logoICon' src={logo3} alt="" />
                <h6 className='rafin'>afins</h6>
                <p className='ripon'>
                    <span>the </span>
                    ripon
                </p>
                </div>
            </div>
        </div>
    );
};

export default Extrahome;