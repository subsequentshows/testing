export default function Modal({ confirmRemove, rejectRemove }) {
  return (
    <div className="back-drop">
      <div className="modal">
        <h1>Bạn có chắc chắn muốn xóa không</h1>
        <button onClick={confirmRemove}>OK</button>
        <span style={{width: 20,display:"inline-block"}} />
        <button onClick={rejectRemove}>CANCEL</button>
      </div>
    </div>
  );
}
