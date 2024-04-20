import './activationModal.styles.scss'

const ActivationModal = ({close, send}) => {
    return (
        <div className="modal">
          <div className="modal-content">
            <p>您的帳號尚未開通，請至您的信箱點選連結開通帳號。</p>
            <button onClick={close}>Close</button>
            <button onClick={send}>Resend link</button>
            </div>
        </div>
    );
}

export default ActivationModal;