import { FaEdit } from "react-icons/fa";
function Modal({ Modalheader, children, onClose, modalid }) {
  return (
    <div className="modal fade" id={modalid} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 d-flex align-items-center gap-2" id="staticBackdropLabel">
              <span>{Modalheader}</span> <FaEdit />
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
