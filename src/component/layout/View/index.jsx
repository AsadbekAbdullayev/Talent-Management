import React from 'react'
import {
  Outlet,
} from "react-router-dom";
import {Container} from './style.js';
import Navbar from '../Navbar/';

const View = () => {
  return (
    <Container>
        <Navbar/>
        <Outlet/>
    </Container>
  )
}

export default View