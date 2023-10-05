import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom';
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../Store/categorySlice';

const NavbarBottom = () => {
    const dispatch = useDispatch();
    const { data: categories } = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (

        <Navbarbottom className='bg-regal-blue'>
            <div className='container flex '>
                <NavLinks className={`flex ${isSidebarOpen ? "show-nav-links" : ""}`}>
                    <HideBtn type='button' className='text-white' onClick={() => setIsSidebarOpen(false)}>
                        <FaTimes />
                    </HideBtn>
                    {
                        categories.map(category => (
                            <li key={category.id}>
                                <NavLink to={`/category/${category.id}`} onClick={() => setIsSidebarOpen(false)} className='navLink text-white'>{category.name}</NavLink>
                            </li>
                        ))
                    }
                </NavLinks>
                <ShowBtn type='button' className='text-gold' onClick={() => setIsSidebarOpen(true)}>
                    <FaBars />
                </ShowBtn>
            </div>
        </Navbarbottom>

    );
}

export default NavbarBottom;


const Navbarbottom = styled.div`
    padding: 10px 0;
    margin-top: 14px;
    .container{
      justify-content: flex-end;
        .show-nav-links{
            transform: translateX(0);
          }
    }
`
const NavLinks = styled.ul`
    li{
        
        margin: 0 10px;
    }
    @media (max-width: 992px) {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 280px;
        background-color: #f8f8fa;
        box-shadow: rgba(0,0,0,.24)0px 3px 8px;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 60px;
        padding-left: 16px;
        transform: translateX(100%);
        transition:  all 300ms linear;
        z-index: 999;

          li{
              
            margin-bottom: 10px !important;
            /* border-bottom: 0.5px solid rgba(0,0,0,0.5); */

              .navLink{
                      color:#103755 ;
                      font-size: 14px !important;
              }
          }
         
    }
`
const NavLink = styled(Link)`
list-style-type: none;
        text-decoration: none;
              font-size: 14.5px;
              transition:  all 300ms linear;
              &:hover{
                opacity: 0.8;
              }
    @media (max-width: 1200px) {
        font-size: 13px !important;
    }
`
const ShowBtn = styled.button`
    transition:  all 300ms linear;
    display: none;
      &:hover{
        color: #f8f8fa;
      }
      @media (max-width: 992px) {
        display: block!important;
    }
`
const HideBtn = styled.button`
    display: none;
     @media (max-width: 992px) {
         position: absolute;
         top: 20px;
         right: 20px;
         font-size: 16px;
         width: 24px;
         height: 24px;
         background-color: #000;
         border-radius: 50%;
         display: flex  !important;
         justify-content:center;
         align-items: center;
}
`