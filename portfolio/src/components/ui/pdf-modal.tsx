"use client";

import React from "react";
import { Modal } from "./modal";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export function PDFModal({ isOpen, onClose, pdfUrl, title = "Resume" }: PDFModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
          <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
          <div className="flex gap-2">
            <a
              href={pdfUrl}
              download
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Download
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm font-medium"
            >
              Open in New Tab
            </a>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="flex-1 w-full rounded-md overflow-hidden border border-border">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full h-full"
            title={title}
            style={{ minHeight: '500px' }}
          />
        </div>
      </div>
    </Modal>
  );
}
