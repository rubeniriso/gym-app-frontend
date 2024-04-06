import { create } from "zustand";

interface DialogProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: any;
  setData(data: any): void;
  setDialogContent(content: React.ReactNode): void;
  content: React.ReactNode;
}

export const useDialog = create<DialogProps>((set) => ({
  isAlert: false,
  content: null,
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: {},
  setData: (data) => set({ data: { data } }),
  setDialogContent: (enteredContent) => set({ content: enteredContent }),
}));
