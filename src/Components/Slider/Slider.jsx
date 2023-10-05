import React from 'react';
import { slider_img_1 } from "../../utils/images"
import { styled } from 'styled-components';

const Slider = () => {
    return (
        <div>
            <HeroItems>
                <img src={slider_img_1} alt="" />
            </HeroItems>

        </div>
    );
}

export default Slider;

const HeroItems = styled.div`
    height: 280px;
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
`