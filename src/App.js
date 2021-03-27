import "./App.css";
import { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import Modal from "./components/Modal"
import { PRODUCTS} from "./components/mockdata";
function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const [modalVisible,setModalVisible] = useState(false)
  const [removeID,setRemoveID] = useState(0)

  //Thay đổi số lượng sản phẩm
  const changeQuantity = (e,id) => {
    let inputValue = Number(e.target.value)
    if (inputValue <= 0) {
        inputValue = 1
    }
    setProducts(products.map((product) => {
      if (product.id === id) {
        product.quantity = inputValue
      }
      return product
    }))
}

  //Xóa sản phẩm
  const removeProduct = (id) => {
    setModalVisible(true)
    setRemoveID(id)
  }

  const confirmRemove = () => {
    setProducts(products.filter((product)=>product.id !== removeID))
    setModalVisible(false)
  }

  const rejectRemove = () => {
    setModalVisible(false)
  }

  //Nhấn quay lại mua hàng thì sản phẩm trở lại như ban đầu

  const rollBack = () => {setProducts(PRODUCTS)}

  return (
    <main>
      <Header products={products} />
      <Body products={products} changeQuantity = {changeQuantity} removeProduct = {removeProduct}/>
      <Footer products={products} rollBack={rollBack}/>
      {modalVisible && <Modal confirmRemove={confirmRemove} rejectRemove={rejectRemove} />}
    </main>
  );
}

export default App;
