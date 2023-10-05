import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalVisible } from '../../Store/modalSlice';
import { formatPrice } from '../../utils/helpers';
import { FaTimes } from "react-icons/fa"
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai"
import styled from 'styled-components';
import { addToCart } from '../../Store/cartSlice';
import { useNavigate } from 'react-router-dom';


const SingleProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: product } = useSelector((state) => state.modal)
    const [qty, setQty] = useState(1);

    const increaseQty = () => {
        setQty((prevQty) => {
            let newQty = prevQty + 1;
            return newQty;
        })
    }

    const decreaseQty = () => {
        setQty((prevQty) => {
            let newQty = prevQty - 1;
            if (newQty < 1) {
                newQty = 1;
            }
            return newQty;
        })
    }

    const addToCartHandler = () => {
        let totalPrice = qty * product.price;
        const tempProduct = {
            ...product,
            quantity: qty,
            totalPrice
        }
        dispatch(addToCart(tempProduct));
        dispatch(setModalVisible(false))
        navigate("/cart")
    }
    console.log(product);
    return (
        <Container>
            <Modal className='bg-white'>
                <ModalBtn className='flex flex-center fs-14' type='button'>
                    <FaTimes />
                </ModalBtn>
                <Content className='grid'>
                    <ContentLeft>
                        <div>
                            <img src={product.images[0]} alt={product.title} />
                        </div>
                    </ContentLeft>
                    <ContentRight>
                        <div>
                            <h3 className='text-regal-blue fs-22 fw-5'>
                                {product.title}
                            </h3>
                            <Description className='text-pine-green' >
                                {product.description}
                            </Description>
                            <Price className='fw-7 fs-24'>
                                Price : {formatPrice(product.price)}
                            </Price>
                            <Qty className='flex'>
                                <span className='text-light-blue'>
                                    Qty:
                                </span>
                                <Change className='flex'>
                                    <button type='button' className='fs-14 text-light-blue' onClick={() => decreaseQty()}>
                                        <AiOutlineMinus />
                                    </button>
                                    <span className='flex flex-center'>{qty}</span>
                                    <button type='button' onClick={() => increaseQty()} className='fs-14 text-light-blue'>
                                        <AiOutlinePlus />
                                    </button>
                                </Change>
                            </Qty>
                            <AddCart type='button' className='btn-primary' onClick={() => addToCartHandler(product)}>
                                <span >
                                    <AiOutlineShoppingCart />
                                </span>
                                <span>Add To Cart</span>
                            </AddCart>
                        </div>
                    </ContentRight>
                </Content>
            </Modal>
        </Container>
    );
}

export default SingleProduct;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    z-index: 99;
`
const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 100;
    box-shadow: rgba(149,157,165,0.2)0px 8px 24px;
    border-radius: 4px;
    padding: 36px 24px;
    width: 90%;
    max-width: 920px;
`
const ModalBtn = styled.button`
    position: absolute;
    right: -12px;
    top: -12px;
    width: 24px;
    height: 24px;
    background-color: #000;
    color: #fff;
    transition: all 300ms linear;
    border-radius: 50%;
    &:hover{
        color: #eeb808;
    }
`
const Content = styled.div`
    overflow-y: scroll;
    row-gap: 32px;
    height: 70vh;
     @media (min-width: 800px) {
        grid-template-columns: repeat(2,1fr);
        column-gap: 40px;
        height: auto;
     }
`
const ContentLeft = styled.div`
    div{
        max-width: 500px;
    }
`
const Description = styled.p`
    margin: 6px 0 12px 0;
`
const Price = styled.div`
    opacity: 0.7;
    border-radius: 1px dashed #707b8e;
    padding-bottom: 6px;
`
const Qty = styled.div`
    margin: 20px;
    span{
        margin-right: 10px;
    }
`
const ContentRight = styled.div`
    
`
const Change = styled.div`
    button{
        border: 2px solid #f8f8fa;
        width: 32px;
        height: 32px;

         &:hover{
            color: darken(#707b8e,10%);
         }
    }
    span{
        width: 40px;
    }
`
const AddCart = styled.button`
    margin-top: 22px;
`