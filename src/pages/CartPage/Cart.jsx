import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io"
import { FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../utils/helpers';
import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { removeFromCart, toggleCartQty, getCartTotal, clearCart } from '../../Store/cartSlice';


const Cart = () => {

    const dispatch = useDispatch();
    const { data: cartproducts, totalItems, totalAmount, deliveryCharge } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getCartTotal());
    }, [useSelector((state) => state.cart)])

    const decrementHandler = () => {
        dispatch(toggleCartQty({ id: cartproducts.id, type: "DEC" }))
    }
    const incrementHandler = () => {
        dispatch(toggleCartQty({ id: cartproducts.id, type: "INC" }))
    }

    const emptyCartmsg = <h4 className='text-red fw-6'> No Items Found </h4>

    return (
        <CartPage>
            <div className='container'>
                <div>
                    <ul className='flex'>
                        <li>
                            <Link to="/">
                                <AiFillHome />
                                <span>
                                    <FiChevronRight />
                                </span>
                            </Link>
                        </li>
                        <li>
                            Cart
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-ghost-white py-5'>
                <div className='container'>
                    <div className='bg-ghost-white'>
                        <h3 className='text-uppercase fw-7 text-regal-blue'>
                            My Cart
                        </h3>
                    </div>
                    {
                        cartproducts.length === 0 ? emptyCartmsg : (
                            <CartContent className='grid'>
                                <div>
                                    <CartItems className='grid'>
                                        {
                                            cartproducts.map((cartproduct) => (
                                                <CartItem className='grid' key={cartproduct.id}>
                                                    <ItemImg className='flex flex-column bg-white'>
                                                        <img src={cartproduct.images[0]} alt={cartproduct.title} />
                                                        <RemoveBtn type='button' onClick={() => dispatch(removeFromCart(cartproduct.id))} >
                                                            <span>
                                                                <IoMdTrash />
                                                            </span>
                                                        </RemoveBtn>
                                                    </ItemImg>
                                                    <div>
                                                        <h6 className='fs-16 fw-5 text-light-blue'> {cartproduct.title}</h6>
                                                        <Qty className='flex'>
                                                            <span className='text-light-blue'>
                                                                Qty:
                                                            </span>
                                                            <Change className='flex'>
                                                                <button type='button' className='fs-14 text-light-blue' onClick={decrementHandler()}>
                                                                    <AiOutlineMinus />
                                                                </button>
                                                                <span className='flex flex-center'>{cartproduct.quantity}</span>
                                                                <button type='button' className='fs-14 text-light-blue' onClick={incrementHandler()}>
                                                                    <AiOutlinePlus />
                                                                </button>
                                                            </Change>
                                                        </Qty>
                                                        <div className='flex flex-between'>
                                                            <div className='text-pine-green fw-4 fs-15'>
                                                                Price: {formatPrice(cartproduct.price)}
                                                            </div>
                                                            <Total className='fw-6 fs-18 text-regal-blue'>
                                                                <span> Sub Total:</span>
                                                                <span>{formatPrice(cartproduct.totalPrice)}</span>
                                                            </Total>
                                                        </div>
                                                    </div>
                                                </CartItem>
                                            ))
                                        }
                                    </CartItems>
                                    <button className='btn-danger' type='button' onClick={() => dispatch(clearCart())}>
                                        <span className='fs-16'>Clear Cart</span>
                                    </button>
                                </div>
                                <div className='bg-white'>
                                    <div className='text-light-blue'>
                                        <div>
                                            <h6 className='fs-20 fw-5'> Order Summary</h6>
                                        </div>
                                    </div>
                                </div>
                            </CartContent>
                        )
                    }
                </div>
            </div>
        </CartPage>
    );
}

export default Cart;

const CartPage = styled.div`
    min-height: 50vh;
`
const Qty = styled.div`
    margin: 20px 0 6px 0;
    span{
        margin-right: 10px;
    }
`

const Change = styled.div`
    button{
        border: 2px solid rgba(0,0,0,0.1);
        width: 32px;
        height: 32px;
        transition: all 300ms linear;
 
         &:hover{
            border: 1px solid rgba(0,0,0,0.3);
         }
    }
    span{
        width: 40px;
    }
`
const CartContent = styled.div`
    row-gap: 40px;

    @media (min-width: 992px) {
        grid-template-columns: 2fr 1fr;
        column-gap: 36px;
        align-items: flex-start;
    }

    @media (min-width:1200px) {
        column-gap: 60px;
    }
`
const CartItems = styled.div`
    row-gap: 20px;
    margin: 24px 0;
`
const CartItem = styled.div`
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    row-gap: 20px;

    @media (min-width:576px) {
        grid-template-columns: 30% auto;
    }
     @media (min-width:678px) {
        grid-template-columns: 150px auto;
    }
     @media (min-width:992px) {
     column-gap: 32px;
    }
    
`
const RemoveBtn = styled.button`
    margin-top: 12px;
`
const ItemImg = styled.div`
    padding-bottom: 12px;
`
const Total = styled.div`
    padding: 6px 0;
`