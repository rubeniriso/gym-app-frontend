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

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };
  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

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

  return (
    <dialog className="p-8" ref={modalRef}>
      {hasCloseBtn && (
        <button
          className="absolute right-4 top-4 modal-close-btn"
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </button>
      )}
      {children}
    </dialog>
  );
};

export default ModalForm;
