import React, { useEffect } from 'react';
import Slider from '../../Components/Slider/Slider';
import Category from './../../Components/Category/Category';
import ProductList from './../../Components/ProductList/ProductList';
import SingleCategory from "../../Components/SingleCategory/SingleCategoty"
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProductsByCategory } from '../../Store/categorySlice';
import { fetchProducts } from '../../Store/productSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { data: categories, status: categoryStatus } = useSelector((state) => state.category);
    const { catProductAll: productByCategory, catProductAllStatus } = useSelector((state) => state.category);
    const { data: products, status: productStatus } = useSelector((state) => state.product);


    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
        dispatch(fetchProductsByCategory(1, 'all'));
        dispatch(fetchProductsByCategory(2, 'all'));
    }, [])

    return (
        <div>
            <Slider />
            <Category categories={categories} status={categoryStatus} />
            <ProductList products={products} status={productStatus} />
            <section>
                {
                    productByCategory[0] && <SingleCategory products={productByCategory[0]}
                        status={catProductAllStatus} />
                }
            </section>
            <section>
                {
                    productByCategory[1] && <SingleCategory products={productByCategory[1]}
                        status={catProductAllStatus} />
                }
            </section>
        </div>
    );
}

export default Home;
