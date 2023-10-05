import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import { IoIosSearch } from "react-icons/io"
import { FaShoppingCart } from "react-icons/fa"
import NavbarBottom from './NavbarBottom';
import { getCartTotal } from '../../Store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch();

    const { totalItems } = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(getCartTotal());
    }, [])


    return (
        <Nav >
            <div>
                <div className='container'>
                    <div className='flex flex-between'>
                        <LinkBrand to="/">
                            <span className='text-regal-blue'>Shopping</span>
                            <span className='text-gold'>Hub.</span>
                        </LinkBrand>

                        <NavbarForm className='flex'>
                            <input type="text" placeholder='Search here ...' />
                            <button type='submit'>
                                <IoIosSearch />
                            </button>
                        </NavbarForm>
                        <LinkCar>
                            <Link to="/cart" className='flex'>
                                <span>
                                    <FaShoppingCart />
                                </span>
                                <div className='fw-5'>Cart
                                    <span>{totalItems}</span>
                                </div>
                            </Link>
                        </LinkCar>
                    </div>

                </div>
                <NavbarBottom />
            </div>
        </Nav>
    );
}

export default Navbar;


const Nav = styled.nav`
padding: 16px 0 0 0;
border-bottom: 1px solid rgba(0,0,0,0.05);
`
const LinkBrand = styled(Link)`
    font-size: 30px;
    font-weight: 700;
    @media (max-width: 992px) {
        font-size: 24px;
    }
      @media (max-width: 576px) {
        font-size: 20px;
    }
`
const NavbarForm = styled.form`
    align-items: stretch;
    input{
        width: 100%;
        border: 0.5px solid rgba(0,0,0,0.05);
        color: #707b8e;
        height: 44px;
        padding: 4px 16px;
        border-radius: 3px 0 0 3px;
    }
    button{
        width:60px;
        height: 44px;
        background-color: #eeb808;
        color: #f8f8fa;
        transition:  all 300ms linear;
        &:hover{
            background-color: #103755;
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`
const LinkCar = styled(Link)`
    margin-right: 28px;
    color: #63766b;   
    span{
        margin-right: 10px;
    } 
    div{
        position: relative;
        span{
            position: absolute;
            top: -10px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background-color: #eeb808;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            font-size: 14px;
            color: #000;
            opacity: .8;
            font-weight: 500;
        }
    }
`
