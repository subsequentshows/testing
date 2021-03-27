import { useState } from "react";
import { PROMOCODES } from "./mockdata";
import ModalPromoCode from "./ModalPromoCode";

export default function Footer({ products, rollBack }) {
  const [promoCode, setPromoCode] = useState("");
  const [isDiscount, setIsDiscount] = useState(false);
  const [numberDiscountPercent, setNumberDiscountPercent] = useState(0);
  const [modalPromoCodeVisible, setModalPromoCodeVisible] = useState(false);

  const subTotal = products.reduce((subTotal, product) => {
    return (subTotal += product.quantity * product.price);
  }, 0);
  const Tax = 0.1 * subTotal;
  const Total = subTotal + Tax - numberDiscountPercent * 0.01 * subTotal;
  function timeOut() {
    setModalPromoCodeVisible(false);
  }
  setTimeout(timeOut, 2000);
  clearTimeout(timeOut);

  const checkPromoCode = () => {
    setModalPromoCodeVisible(true);
    for (let i = 0; i < PROMOCODES.length; i++) {
      if (PROMOCODES[i].code === promoCode) {
        setIsDiscount(true);
        setNumberDiscountPercent(PROMOCODES[i].discountPercent);
        return;
      }
    }
    setIsDiscount(false);
    setPromoCode("");
  };

  const renderDiscount = () => {
    return PROMOCODES.map((promo) => {
      if (promo.code === promoCode) {
        return (
          <li key={promo.id}>
            DISCOUNT
            <span>{numberDiscountPercent}%</span>
          </li>
        );
      }
      return null;
    });
  };
  if (products.length > 0) {
    return (
      <section className="container">
        <div className="promotion">
          <label htmlFor="promo-code">Have A Promo Code?</label>
          <input
            type="text"
            id="promo-code"
            value={promoCode}
            onChange={(e) => {
              setPromoCode(e.target.value);
              setIsDiscount(false);
              setNumberDiscountPercent(0);
            }}
          />{" "}
          <button type="button" onClick={checkPromoCode} />
          {modalPromoCodeVisible && <ModalPromoCode isDiscount={isDiscount} />}
        </div>
        <div className="summary">
          <ul>
            <li>
              Subtotal{" "}
              <span>
                {subTotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </li>
            <li>
              Tax{" "}
              <span>
                {Tax.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </li>
            {isDiscount && renderDiscount()}
            <li className="total">
              Total{" "}
              <span>
                {Total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </li>
          </ul>
        </div>
        <div className="checkout">
          <button type="button">Check Out</button>
        </div>
      </section>
    );
  } else
    return (
      <section className="container">
        <h2>Không có sản phẩm nào trong giỏ</h2>
        <button type="button" onClick={rollBack}>
          Quay lại mua hàng
        </button>
      </section>
    );
}
