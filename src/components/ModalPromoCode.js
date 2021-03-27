export default function ModalPromoCode({ isDiscount }) {
  if (isDiscount) {
    return (
      <div className="fade">
        <div className="right-code">
          <h2>Chúc mừng bạn đã nhập đúng mã giảm giá</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fade">
        <div className="wrong-code">
          <h2>Bạn nhập sai mã giảm giá rồi!</h2>
        </div>
      </div>
    );
  }
}
