import React from 'react';
import { Layout } from '../../components/Layout/Index';
import Carousels from '../../components/Carousels/Index';
import { Cards } from '../../components/Cards/Index';
import pic1 from '../../Assets/card1.jpg';
import pic2 from '../../Assets/card2.jpg';
import pic3 from '../../Assets/card3.jpg';
import { Container, Row } from 'react-bootstrap';

export const Home = (props) => {
    return (
        <Layout>
            <Carousels flex />
            <Container className='mt-5'>
                <Row className='d-flex justify-content-between'>
                    <Cards
                        imgLink={pic1}
                        title='Growing Crops'
                        content='The growing crop is an essential part of farming with scientific rules and by natural...'
                    />
                    <Cards
                        imgLink={pic2}
                        title='Selling'
                        content='Selling the goods is an art, and this is the way to increase profit in farming...'
                    />
                    <Cards
                        imgLink={pic3}
                        title='Increasing Profit'
                        content='Farming is one of the oldest businesses and profitable too, but you have to follow...'
                    />
                </Row>
            </Container>
        </Layout>
    );
};
