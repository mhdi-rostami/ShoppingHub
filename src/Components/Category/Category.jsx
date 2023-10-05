import React from 'react';
import { STATUS } from "../../utils/status";
import Error from './../Error/Error';
import Loader from './../Loader/Loader';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Category = ({ categories, status }) => {

    if (status === STATUS.ERROR) return <Error />
    if (status === STATUS.LOADING) return <Loader />

    return (
        <section className='py-5 bg-ghost-white' id='categories'>
            <div className='container'>
                <div>
                    <div>
                        <h3 className='text-uppercase fw-7 text-regal-blue ls-1'>
                            category
                        </h3>
                    </div>
                    <CatItems className='grid'>
                        {
                            categories.slice(0, 5).map((category) => (
                                <Link to={`categoty/${category.id}`} key={category.id}>
                                    <div>
                                        <CatImg>
                                            <img src={category.image} alt="" />
                                        </CatImg>
                                        <CatName className='text-center'>
                                            <h6 className='fs-20'> {category.name}</h6>
                                        </CatName>
                                    </div>
                                </Link>
                            ))
                        }
                    </CatItems>
                </div>
            </div>
        </section>
    );
}

export default Category;

const CatItems = styled.div`
    row-gap: 20px;

    @media (min-width:576px) {
        grid-template-columns: repeat(2,1fr);
        column-gap: 20px;
    }

    @media (min-width:992px) {
        grid-template-columns: repeat(3,1fr);
    }

    @media (min-width:1200px) {
        grid-template-columns: repeat(4,1fr);
    }

    @media (min-width:1400px) {
        grid-template-columns: repeat(5,1fr);
    }
`

const CatImg = styled.div`
    border-radius: 10px;
    overflow: hidden;
`
const CatName = styled.div`
   padding: 12px 0;
 `
