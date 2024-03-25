"use client";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: LayoutProps) => {
  return (
    <section>
      {children}
      <Toaster />
    </section>
  );
};

export default layout;
