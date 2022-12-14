import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Contacts from './components/Contacts/Contacts';
import MySkills from './components/MySkills/MySkills';
import Works from './components/Works/Works';

const MainRoutes = () => {
    return (
       <Routes>
        <Route path='/' element={<AboutMe/>} />
        <Route path='/my-skills' element={<MySkills/>} />
        <Route path='/works' element={<Works/>} />
        <Route path='/contacts' element={<Contacts/>} />
       </Routes>
    );
};

export default MainRoutes;