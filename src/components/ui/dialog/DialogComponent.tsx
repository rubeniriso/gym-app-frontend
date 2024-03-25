import React, { useState } from "react";
import { useDialog } from "@/components/hooks/useDialog";
import { Dialog, DialogContent } from "../dialog";

const DialogComponent = () => {
  const { isOpen, onClose, content } = useDialog();
  return (
    <div>
      <Dialog onOpenChange={onClose} open={isOpen} modal defaultOpen={isOpen}>
        <DialogContent className="sm:max-w-md">{content}</DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogComponent;
