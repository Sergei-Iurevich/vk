import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {

    return (
        <nav className = {style.nav}>
            <div className = {style.item}> menu1</div>
            <div className = {style.item}>menu2</div>
            <div className = {style.item}>menu3</div>
            <div className = {style.item}>menu4</div>
        </nav>
    );
}

export default Navbar;