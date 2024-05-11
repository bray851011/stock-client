import './activationModal.styles.scss'

const ActivationModal = ({close, send}) => {
    return (
        <div className="modal">
          <div className="modal-content">
            <p>Please activate your account</p>
            <button onClick={close}>Close</button>
            <button onClick={send}>Resend link</button>
            </div>
        </div>
    );
}

export default ActivationModal;