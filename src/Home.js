import React from "react";
import "./Home.css";
import primeImage from "./images/primeimage.png";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_img" src={primeImage} />
        <br />
        <br />

        <div className="home_row">
          <Product
            key="1"
            id="1234"
            title="The lean start up"
            price={29.99}
            rating={3}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            }
          />
          <Product
            key="2"
            id="3456"
            title="boat Headset"
            price={35}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/61IUz4cSa7L._SX522_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            key="3"
            id="565565"
            title="JBL speaker"
            price={45}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61QK6svpbDS._SL1500_.jpg"
            }
          />
          <Product
            key="4"
            id="847584"
            title="Hollister Hoodie"
            price={60}
            rating={4}
            image={
              "https://cdn.shopify.com/s/files/1/0576/8124/8453/products/4_ea4a10dd-10e9-42de-9aa7-6332efb1ec28_1024x1024@2x.jpg?v=1628326022"
            }
          />
          <Product
            key="5"
            id="745745"
            title="Dream Catcher"
            price={15}
            image={
              "https://cdn.shopify.com/s/files/1/2739/6532/products/WhatsAppImage2021-11-24at9.31.57AM_740x.jpg?v=1637728331"
            }
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            key="6"
            id="7857475"
            price={1900}
            title="Macbook Air Pro"
            rating={4}
            image={
              "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1655466743/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256605_errxxc.png/mxw_2048,f_auto"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
