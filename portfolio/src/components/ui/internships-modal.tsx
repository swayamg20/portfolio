"use client";

import React from "react";
import { Modal } from "./modal";
import { InternshipCard } from "@/components/shared/internship-card";
import { Internship } from "@/types/internships";
import { TextAnimate } from "@/components/magicui/text-animate";

interface InternshipsModalProps {
  isOpen: boolean;
  onClose: () => void;
  internships: Internship[];
}

export function InternshipsModal({ isOpen, onClose, internships }: InternshipsModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      className="w-[90vw] h-[90vh] max-w-6xl backdrop-blur-md bg-background/10 border-2 border-border/60"
      overlayClassName="bg-background/20 backdrop-blur-md"
    >
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50 pr-16">
          <div>
            <TextAnimate
              className="text-2xl md:text-3xl font-bold text-foreground mb-2"
              animation="fadeIn"
              by="line"
              startOnView={true}
              once={true}
            >
              Previous Internships
            </TextAnimate>
            <TextAnimate
              className="text-sm text-muted-foreground"
              animation="fadeIn"
              by="line"
              delay={0.1}
              startOnView={true}
              once={true}
            >
              My journey through various internship experiences
            </TextAnimate>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pr-2">
            {internships.map((internship, index) => (
              <InternshipCard 
                key={internship.id}
                internship={internship}
                index={index}
              />
            ))}
          </div>
          
          {/* Empty state */}
          {internships.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-4">💼</div>
              <TextAnimate
                className="text-xl font-semibold text-foreground mb-2"
                animation="fadeIn"
                by="line"
                startOnView={true}
                once={true}
              >
                No internships to display
              </TextAnimate>
              <TextAnimate
                className="text-sm text-muted-foreground"
                animation="fadeIn"
                by="line"
                delay={0.1}
                startOnView={true}
                once={true}
              >
                Check back later for updates
              </TextAnimate>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
