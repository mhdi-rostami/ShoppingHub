import React from 'react';
import { STATUS } from './../../utils/status';
import { setModalData, setModalVisible } from '../../Store/modalSlice';
import SingleProduct from '../SingleProduct/SingleProduct';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/helpers';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import styled from 'styled-components';

const ProductList = ({ products, status }) => {

    const dispatch = useDispatch();
    const { isModalVisible } = useSelector((state) => state.modal)

    const viewModalHandler = (data) => {
        dispatch(setModalData(data));
        dispatch(setModalVisible(true))
    }

    if (status === STATUS.ERROR) return <Error />
    if (status === STATUS.LOADING) return <Loader />

    return (
        <section>
            {isModalVisible && <SingleProduct />}
            <div className='container'>
                <div>
                    <div>
                        <h3 className='text-uppercase fw-7 text-regal-blue ls-1'>
                            Our Products
                        </h3>
                    </div>
                    <ProductItems className='grid'>
                        {
                            products.map((product) => (
                                <ProductItem key={product.id} onClick={() => viewModalHandler(product)}>
                                    <ProductItemImg>
                                        <img src={product.images[0]} alt="" />
                                        <div className=' text-white fs-13 text-uppercase bg-gold fw-6'>
                                            {product.category.name}
                                        </div>
                                    </ProductItemImg>

                                    <ProductBody>
                                        <h6 className='text-pine-green fw-4 fs-15'>
                                            {product.title}
                                        </h6>
                                        <div className='text-regal-blue fw-7 fs-18 '>
                                            {formatPrice(product.price)}
                                        </div>
                                    </ProductBody>
                                </ProductItem>
                            ))
                        }
                    </ProductItems>
                </div>
            </div>
        </section>
    );
}

export default ProductList;

const ProductItems = styled.div`
    row-gap: 20px;
    @media (min-width:576px) {
        grid-template-columns: repeat(2,1fr);
        column-gap: 20px;
    }
    @media (min-width:768px) {
        grid-template-columns: repeat(3,1fr);
    }
    @media (min-width:992px) {
        grid-template-columns: repeat(4,1fr);
    }
    @media (min-width:1200px) {
        grid-template-columns: repeat(5,1fr);
    }
`
const ProductItem = styled.div`
    box-shadow: rgba(99,99,99,0.05) 0px 2px 8px 0px;
    padding: 18px;
    border-radius: 4px;
    cursor: pointer;
`
const ProductItemImg = styled.div`
    position: relative;
 div{
    position: absolute;
    top: 8px;
    border-radius: 8px;
    padding-left: 8px;
    padding-right: 8px;
    box-shadow: rgba(0,0,0,0.35)0px 5px 15px;
 }
`
const ProductBody = styled.div`
    padding: 12px 0;
  h6{
    padding: 8px 0;
    opacity: .8;
    display: block;
  }
`