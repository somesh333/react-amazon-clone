import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/WAVE1-GW/5_DesktopHero_Unrec_1500x600-aa._CB419164846_.jpg" alt="" />
                <div className="home__row">
                     <Product 
                     id="12321341"
                     title="the lean startup"
                     price={29.99}
                     image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter20/OnePlus/DesktopGateway_CategoryCard_379X304._SY304_CB418738800_.jpg"    
                     rating={5}

                     />
                     <Product 
                         id="49538094"
                         title="Kenwood Kmix stand mixer for baking, stylish kitchen mixer with k beater dough hook and whisk 5 litre glass bowl"
                         price={293.0}
                         rating={4}
                         image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Jupiter/GW/Phase-1/V245274172_IN_CEPC_Electronics_GW_Graphics_Jupiter20_758X608_dbcc1x._SY304_CB418806080_.jpg"
                     />
                </div>
                <div className="home__row">
                <Product 
                    id="49538095"
                    title="Somesh Jha"
                    price={100.0}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/Jupiter_GW_Softlines/Jupiter_Phase1_PC/MF_1_1X._SY116_CB403076949_.jpg"
                />
                <Product 
                    id="49538096"
                    title="Tushar Jha"
                    price={100.0}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/Jupiter_GW_Softlines/Jupiter_Phase1_PC/MF_2_1X._SY116_CB403076948_.jpg"
                />
                <Product 
                    id="4953809"
                    title="Om mishra"
                    price={100.0}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/Jupiter_GW_Softlines/Jupiter_Phase1_PC/MF_2_1X._SY116_CB403076948_.jpg"
                />
                </div>
                <div className="home__row">
                <Product 
                    id="4953809"
                    title="Anup Mishra"
                    price={100.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81t2A6uhm4L._AC_UY327_FMwebp_QL65_.jpg "
                />
                </div>
            </div>
        </div>
    )
}
export default Home;
