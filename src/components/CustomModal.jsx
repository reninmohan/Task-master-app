import { FaEdit } from "react-icons/fa";

function CustomModal({ Modalheader, children, modalid, onClose }) {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1000 }}
      id={modalid}
    >
      <div
        className=" bg-white rounded shadow overflow-hidden"
        style={{ width: "90%", maxWidth: "500px", animation: "slideDown 0.3s ease-in-out" }}
      >
        <div className=" d-flex justify-content-between align-items-center p-3 border-bottom">
          <h1 className="d-flex align-items-center fs-5 fw-semibold" style={{ gap: "0.5rem" }}>
            <span>{Modalheader}</span> <FaEdit />
          </h1>
          <button className="bg-transparent border-0 fs-6" style={{ cursor: "pointer" }} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body p-3 fs-6 lh-base">{children}</div>
      </div>
    </div>
  );
}

export default CustomModal;
