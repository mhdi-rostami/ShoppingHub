import React from 'react';
import { error } from '../../utils/images';
import styled from 'styled-components';

const Error = () => {
    return (
        <div className='container py-5'>
            <div className='flex flex-center'>
                <Img src={error} alt="erroe" />
            </div>
        </div>
    );
}

export default Error;

const Img = styled.img`
    width: 60px;
`