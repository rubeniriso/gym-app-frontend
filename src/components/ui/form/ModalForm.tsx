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
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };
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
    <>
      <dialog
        className=""
        ref={modalRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {hasCloseBtn && (
          <button
            className="absolute right-6 z-30 top-6 modal-close-btn"
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </button>
        )}
        {children}
        <div className="w-screen h-screen fixed top-0 left-0 z-0 bg-black bg-opacity-80">
          <button
            className="absolute right-4 z-40 top-4 modal-close-btn text-white"
            onClick={handleCloseModal}
          >
            <CloseIcon style={{ fontSize: 50 }} />
          </button>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
