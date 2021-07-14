import React from 'react'
import "./Home.css"
import Product from './Product'
import Slideshow from './Slideshow'



function Home() {


    return (
        <div className="home">
            <div className="home__container">
                <Slideshow />
                {/* <img
                    className="home__image"

                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" /> */}

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display, MediaTek MT8173C Processor, 4GB"
                        price={255.00}
                        rating={5}
                        image="https://st2.myideasoft.com/idea/bx/06/myassets/products/558/lenovo-chromebook-s330-dizustu-bilgisayar-14-inc-fhd-1920-x-1080-9426-jpg.jpeg?revision=1602941394"
                    />
                    <Product
                        id="49538094"
                        title="Gildan Men's Fleece Hooded Sweatshirt, Style G185"
                        price={39.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/41JKAefCFFL.jpg"
                    />


                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4976850"
                        title="Laura Ashley Home - Charlotte Collection - Luxury Ultra Soft Comforter, All Season Premium Bedding Set, Stylish Delicate"
                        price={171.99}
                        rating={3}
                        image="https://i.pinimg.com/originals/c3/53/2a/c3532a00f5bb24d19f5854e45f5429d7.jpg"
                    />
                    
                    <Product
                        id="3254344345"
                        title="Acer Aspire TC-895-UA92 Desktop, 10th Gen Intel Core i5-10400 6-Core Processor, 12GB 2666MHz DDR4, 512GB"
                        price={505.99}
                        rating={4}
                        image="https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzYxQSUyQksxTWpUZUwuX1NTNDAwXy5qcGc.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4999850"
                        title="Office Chair, FelixKing Ergonomic Desk Chair with Adjustable Height and Lumbar Support Swivel Lumbar Support"
                        price={139.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71sGpjQ%2BK%2BS._SS400_.jpg"
                    />
                    <Product
                        id="23448230"
                        title="SEIKO 14 Ultra-Modern Watch Face Black & Silver Tone with Quiet Sweep Wall Clock"
                        price={90.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81QvGMQro9L._SY400.jpg"
                    />
                    <Product
                        id="3254434345"
                        title="Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 4,000"
                        price={12.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61stA5Z9W0L._SS400_.jpg"
                    />
                </div>
                

               

            </div>

            

        </div>
    )
}

export default Home
