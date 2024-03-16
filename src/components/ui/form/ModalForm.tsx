"use client";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const ModalForm = ({ isOpen, hasCloseBtn, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [isModalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);
  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };
  return (
    <dialog ref={modalRef}>
      {hasCloseBtn && (
        <button className="modal-close-btn" onClick={handleCloseModal}>
          <CloseIcon />
        </button>
      )}
      {children}
    </dialog>
  );
};

export default ModalForm;
