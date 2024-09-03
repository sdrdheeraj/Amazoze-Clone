import Product from './Product';
import './Home.css'

function Home(){
    return(
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/MayART24/ACQ/GW/New_MayART24_GW_PC_Hero._CB559897147_.jpg"
            alt="" />
            
            <div className="home__row">
                <Product
                     id="121314"
                     title="The lean Startup: How Content innovation"
                     price={11.96}
                     rating={4}
                     image="https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztqins-thumb-539573348?$GNB_CARD_FULL_M_PNG_PNG$"
                     />
                     <Product
                     id="121314"
                     title="The lean Startup: How Content innovation"
                     price={11.96}
                     rating={4}
                     image="https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztqins-thumb-539573348?$GNB_CARD_FULL_M_PNG_PNG$"
                     />
                     <Product
                     id="121314"
                     title="The lean Startup: How Content innovation"
                     price={11.96}
                     rating={4}
                     image="https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztqins-thumb-539573348?$GNB_CARD_FULL_M_PNG_PNG$"
                     />
                    
                
            </div>

            <div className="home__row">
                <Product
                     id="121314"
                     title="The lean Startup: How Content innovation"
                     price={11.96}
                     rating={4}
                     image="https://www.suryaelectronics.in/CommonImageHandler/ImageHandler.ashx?imagepath=~/img/Product/Main/VivoMobilePhonesandAccessoriesMobilePhones324.jpg&width=1080"
                     />
                     <Product
                     id="121314"
                     title="The lean Startup: How Content innovation"
                     price={11.96}
                     rating={4}
                     image="https://www.suryaelectronics.in/CommonImageHandler/ImageHandler.ashx?imagepath=~/img/Product/Main/VivoMobilePhonesandAccessoriesMobilePhones324.jpg&width=1080"
                     />
                     <Product
                     id="121314"
                     title="The lean Startup: How Content innovation"
                     price={11.96}
                     rating={4}
                     image="https://www.suryaelectronics.in/CommonImageHandler/ImageHandler.ashx?imagepath=~/img/Product/Main/VivoMobilePhonesandAccessoriesMobilePhones324.jpg&width=1080"
                     />
                     <Product
                     id="121314"
                     title="The lean Startup: How Content innovation"
                     price={11.96}
                     rating={4}
                     image="https://www.suryaelectronics.in/CommonImageHandler/ImageHandler.ashx?imagepath=~/img/Product/Main/VivoMobilePhonesandAccessoriesMobilePhones324.jpg&width=1080"
                     />
                
            </div>
        </div>

        
    
    )
}
export default Home;