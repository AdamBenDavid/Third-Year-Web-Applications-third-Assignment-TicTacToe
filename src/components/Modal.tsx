import React from "react";

interface ModalProps {
  message: string;
  buttomText: string;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, buttomText, onConfirm }) => {
  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <p style={styles.modalMessage}>{message}</p>
        <button style={styles.modalButton} onClick={onConfirm}>
          {buttomText}
        </button>
      </div>
    </div>
  );
};

const styles = {
  modal: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
  },
  modalMessage: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  modalButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Modal;
