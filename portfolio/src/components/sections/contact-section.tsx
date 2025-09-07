'use client'

import { useState } from 'react';
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShineBorder } from "@/components/magicui/shine-border";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Meteors } from "@/components/magicui/meteors";
import { cn } from "@/lib/utils";
import { DotPattern } from '../magicui/dot-pattern';
import { Calendar } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xjkejyjw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thanks for your message! I\'ll get back to you soon.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact me directly.' 
      });
    }
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden min-h-screen">
      <DotPattern
        className="absolute inset-0 opacity-20 fill-orange-500/20 dark:fill-orange-400/20"
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
      />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextAnimate
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            animation="blurInUp"
            by="character"
            duration={0.8}
            startOnView={true}
            once={true}
          >
            Let's Connect
          </TextAnimate>
          <TextAnimate
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            animation="blurInUp"
            by="word"
            duration={0.6}
            startOnView={true}
            once={true}
          >
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Drop me a message and I'll get back to you as soon as possible.
          </TextAnimate>
        </div>

        {/* Contact Form */}
        <div className="relative">
          <ShineBorder
            className="rounded-2xl"
            shineColor={["#3b82f6", "#8b5cf6", "#06b6d4"]}
            duration={8}
            borderWidth={2}
          />
          
          <div className="relative bg-background/80 backdrop-blur-md rounded-2xl border border-border/50 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-border/50",
                      "bg-background/50 backdrop-blur-sm",
                      "text-foreground placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                      "transition-all duration-200"
                    )}
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-border/50",
                      "bg-background/50 backdrop-blur-sm",
                      "text-foreground placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                      "transition-all duration-200"
                    )}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

          

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-border/50",
                    "bg-background/50 backdrop-blur-sm",
                    "text-foreground placeholder:text-muted-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                    "transition-all duration-200 resize-none"
                  )}
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <div className={cn(
                  "p-4 rounded-lg text-sm font-medium",
                  status.type === 'success' && "bg-green-500/10 text-green-600 border border-green-500/20",
                  status.type === 'error' && "bg-red-500/10 text-red-600 border border-red-500/20",
                  status.type === 'loading' && "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                )}>
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <InteractiveHoverButton
                  type="submit"
                  disabled={status.type === 'loading'}
                  className={cn(
                    "px-8 py-3 text-lg font-semibold",
                    status.type === 'loading' && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </InteractiveHoverButton>
              </div>
            </form>

            {/* Alternative Contact Methods */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Or reach out directly:
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    gupta.swayam123@gmail.com
                  </a>
                  <a 
                    href="https://linkedin.com/in/swayamgupta20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/swayamg20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href="https://calendar.app.google/H3cHqpFmkMdAdapK9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Book 30min Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
