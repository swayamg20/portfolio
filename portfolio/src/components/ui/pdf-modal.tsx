"use client";

import React from "react";
import { Modal } from "./modal";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
  githubUrl?: string;
  driveUrl?: string;
}

export function PDFModal({ isOpen, onClose, pdfUrl, title = "Resume", githubUrl, driveUrl }: PDFModalProps) {
  const [zoom, setZoom] = React.useState(150);
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here if you have one
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 300));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const resetZoom = () => {
    setZoom(150);
  };
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      className="w-[95vw] h-[95vh] max-w-7xl backdrop-blur-md bg-background/10 border-2 border-border/60"
      overlayClassName="bg-background/20 backdrop-blur-md"
    >
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50 pr-16">
          <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
          <TooltipProvider>
            <div className="flex gap-2 flex-wrap">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={pdfUrl}
                    download
                    className="p-3 backdrop-blur-md bg-background/80 border border-border rounded-full hover:bg-background/90 hover:scale-105 transition-all duration-200 text-foreground flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download PDF</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 backdrop-blur-md bg-background/60 border border-border rounded-full hover:bg-background/80 hover:scale-105 transition-all duration-200 text-foreground flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open in New Tab</p>
                </TooltipContent>
              </Tooltip>

              {githubUrl && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 backdrop-blur-md bg-green-500/20 border border-green-500/30 rounded-full hover:bg-green-500/30 hover:scale-105 transition-all duration-200 text-green-400 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Source Code</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {driveUrl && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => copyToClipboard(driveUrl)}
                      className="p-3 backdrop-blur-md bg-blue-500/20 border border-blue-500/30 rounded-full hover:bg-blue-500/30 hover:scale-105 transition-all duration-200 text-blue-400 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy Drive Link</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {/* Zoom Controls */}
              <div className="flex items-center gap-1 ml-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleZoomOut}
                      className="p-2 backdrop-blur-md bg-background/60 border border-border rounded-full hover:bg-background/80 hover:scale-105 transition-all duration-200 text-foreground flex items-center justify-center"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                      </svg>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Zoom Out</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={resetZoom}
                      className="px-3 py-2 backdrop-blur-md bg-background/60 border border-border rounded-full hover:bg-background/80 hover:scale-105 transition-all duration-200 text-foreground text-xs font-medium"
                    >
                      {zoom}%
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Reset Zoom (150%)</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleZoomIn}
                      className="p-2 backdrop-blur-md bg-background/60 border border-border rounded-full hover:bg-background/80 hover:scale-105 transition-all duration-200 text-foreground flex items-center justify-center"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Zoom In</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </TooltipProvider>
        </div>
        
        {/* PDF Viewer */}
        <div className="flex-1 w-full rounded-md overflow-auto border border-border/80 backdrop-blur-sm bg-background/5">
          <div 
            className="w-full h-full min-h-[800px] origin-top-left transition-transform duration-300"
            style={{ 
              transform: `scale(${zoom / 100})`,
              width: `${10000 / zoom}%`,
              height: `${10000 / zoom}%`
            }}
          >
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=Fit`}
              className="w-full h-full"
              title={title}
              style={{ border: 'none' }}
              scrolling="yes"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

