import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./NavBar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';




export const NavBar = ({setSearch}) => {
    const cartItems=useSelector((state)=>state.productReducer.cart)
    return (
        <div className='mhead'>
            <Link to="/" style={{marginRight:"200px"}} ><HomeIcon/></Link>
            <input onChange={(e)=> setSearch(e.target.value)} type="text" placeholder='search...' />
            <SearchIcon color='info'/>
            <Link to="/cart" style={{marginLeft:"200px"}}><ShoppingCartIcon/><sup>{cartItems.length}</sup></Link>
        </div>
    );
};

