import React from 'react'
import { Layout } from '../../components/Layout/Index'
import Carousels from '../../components/Carousels/Index'
import { Cards } from '../../components/Cards/Index'
import pic1 from '../../Assets/card1.jpg'
import pic2 from '../../Assets/card2.jpg'
import pic3 from '../../Assets/card3.jpg'
export const Home = (props) => {
    return (
        <Layout>
            <Carousels />
            <div className='row mb-5 mt-5'>
                <div className='col'>
                    <Cards
                        imgLink={pic1}
                        title='Growing Crops'
                        content='The growing crop is essential part of farming with scientific rule and by natural ...'
                    />
                </div>
                <div className='col'>
                    <Cards
                        imgLink={pic2}
                        title='Selling'
                        content='Selling the goods is an art and this is the way to increase profit in farming ...'
                    />
                </div>
                <div className='col'>
                    <Cards
                        imgLink={pic3}
                        title='Increasing Profit'
                        content='Farming is one of the oldest business and profitable too, but Have to follow ...   '
                    />
                </div>
            </div>
        </Layout>
    )
}
