// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./style-2.css";

function ShoppingCart() {
  return (
    <body>
    <div className="ShoppingCart">
      <header className="container">
        <h1>Shopping Cart</h1>

        <ul className="breadcrumb">
          <li>Home</li>
          <li>Shopping Cart</li>
        </ul>

        <span className="count">3 items in the bag</span>
      </header>

      <section className="container">
        <ul className="products">
          <li className="row">
            <div className="col left">
              <div className="thumbnail">
                <a href="#">
                  <img src="https://via.placeholder.com/200x150" alt="" />
                </a>
              </div>
              <div className="detail">
                <div className="name"><a href="#">PRODUCT ITEM NUMBER 1</a></div>
                <div className="description">
                  Description for product item number 1
                </div>
                <div className="price">$5.99</div>
              </div>
            </div>

            <div className="col right">
              <div className="quantity">
                <input type="number" className="quantity" step="1" value="2" />
              </div>

              {/* <div className="remove">
                <svg
                  version="1.1"
                  className="close"
                  xmlns="//www.w3.org/2000/svg"
                  xmlns:xlink="//www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 60 60"
                  enable-background="new 0 0 60 60"
                  xml:space="preserve"
                >
                  <polygon
                    points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"
                  ></polygon>
                </svg>
              </div> */}
            </div>
          </li>

          <li className="row">
            <div className="col left">
              <div className="thumbnail">
                <a href="#">
                  <img src="https://via.placeholder.com/200x150" alt="" />
                </a>
              </div>
              <div className="detail">
                <div className="name"><a href="#">PRODUCT ITEM NUMBER 2</a></div>
                <div className="description">
                  Description for product item number 2.
                </div>
                <div className="price">$9.99</div>
              </div>
            </div>

            <div className="col right">
              <div className="quantity">
                <input type="number" className="quantity" step="1" value="1" />
              </div>

              {/* <div className="remove">
                <svg
                  version="1.1"
                  className="close"
                  xmlns="//www.w3.org/2000/svg"
                  xmlns:xlink="//www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 60 60"
                  enable-background="new 0 0 60 60"
                  xml:space="preserve"
                >
                  <polygon
                    points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"
                  ></polygon>
                </svg>
              </div> */}
            </div>
          </li>
        </ul>
      </section>

      <section className="container">
        <div className="promotion">
          <label for="promo-code">Have A Promo Code?</label>
          <input type="text" id="promo-code" /> <button type="button"></button>
        </div>

        <div className="summary">
          <ul>
            <li>Subtotal <span>$21.97</span></li>
            <li>Tax <span>$5.00</span></li>
            <li className="total">Total <span>$26.97</span></li>
          </ul>
        </div>

        <div className="checkout">
          <button type="button">Check Out</button>
        </div>
      </section>
    </div>
    </body>git remote add origin https://github.com/subsequentshows/testing.gitgit remote add origin https://github.com/subsequentshows/testing.git
  );
}

export default ShoppingCart;
