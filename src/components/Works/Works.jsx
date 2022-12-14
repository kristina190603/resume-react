import React from 'react';
import First from '../../storage/1.jpg'
import Second from '../../storage/2.png'
import Third from '../../storage/3.png'


const Works = () => {
    return (
        <div className='works_block'>
            <h3>My Projects</h3>
            <p>Design Studio</p>
            <img src={First} alt="" />
            <p>Global Space</p>
            <img src={Second} alt="" />
            <p>Meat and Meat</p>
            <img src={Third} alt="" />
        </div>
    );
};

export default Works;