import React from 'react';
import { spinner } from '../../utils/images';
import styled from 'styled-components';

const Loader = () => {
    return (
        <div className='container py-5'>
            <div className='flex flex-center'>
                <Img src={spinner} alt="loader" />
            </div>
        </div>
    );
}

export default Loader;

const Img = styled.img`
    width: 60px;
`
