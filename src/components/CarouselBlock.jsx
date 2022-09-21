import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const CarouselBlock = () => {
    return (
        <Wrapper>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn1.ozone.ru/s3/sellerassets/wh1450/964edccf-ebfb-11ec-b396-0606838567ee.jpeg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn1.ozone.ru/s3/sellerassets/wh1450/87ecdedc-ee4e-11ec-b249-ce23bda67111.jpeg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn1.ozone.ru/s3/sellerassets/wh1450/4ae20ecc-f15e-11ec-bb6f-6e648b3af1c2.jpeg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-bottom: 20px;
`;

export default CarouselBlock;
