import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GlobalBackground } from '../components/GlobalBackground';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yandex.Direct & Telegram Ads Setup',
  description: 'A visually appealing landing page for a service that sets up Yandex.Direct advertising campaigns, featuring an animated hero section.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <style dangerouslySetInnerHTML={{ __html: `
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-system: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }

          tailwind.config = {
            darkMode: 'class',
            theme: {
              extend: {
                keyframes: {
                  'fade-in-up': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' }, },
                  'blob-1': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(30px, -50px) scale(1.1)' }, '66%': { transform: 'translate(-20px, 20px) scale(0.9)' }, },
                  'blob-2': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(-40px, 30px) scale(1.1)' }, '66%': { transform: 'translate(30px, -20px) scale(0.9)' }, },
                  'blob-3': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(20px, 40px) scale(0.9)' }, '66%': { transform: 'translate(-30px, -30px) scale(1.1)' }, },
                  'blob-4': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(-50px, 30px) scale(1.2)' }, '66%': { transform: 'translate(20px, -20px) scale(0.8)' }, },
                  'blob-5': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(40px, -60px) scale(1.1)' }, '66%': { transform: 'translate(-30px, 30px) scale(0.9)' }, },
                  'blob-6': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(-40px, -40px) scale(1.1)' }, '66%': { transform: 'translate(30px, 20px) scale(0.9)' }, },
                  'blob-7': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(50px, 30px) scale(1.2)' }, '66%': { transform: 'translate(-20px, -40px) scale(0.8)' }, },
                  'blob-8': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(30px, -50px) scale(1.2)' }, '66%': { transform: 'translate(-20px, 20px) scale(0.8)' }, },
                  'blob-9': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(-40px, 40px) scale(1.1)' }, '66%': { transform: 'translate(30px, -30px) scale(0.9)' }, },
                  'blob-10': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(25px, -55px) scale(1.15)' }, '66%': { transform: 'translate(-25px, 25px) scale(0.95)' }, },
                  'blob-11': { '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(-45px, 35px) scale(1.1)' }, '66%': { transform: 'translate(35px, -25px) scale(0.9)' }, },
                  'float': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-15px)' }, },
                  'draw-line': { 'to': { 'stroke-dashoffset': '0' } },
                  'pulse-dot': { '0%, 100%': { transform: 'scale(1)', opacity: '1' }, '50%': { transform: 'scale(1.2)', opacity: '0.8' } },
                  'pulse-glow': { '0%, 100%': { filter: 'drop-shadow(0 0 4px #a78bfa)', transform: 'scale(1)' }, '50%': { filter: 'drop-shadow(0 0 8px #a78bfa)', transform: 'scale(1.05)' }, },
                  'click-ripple': { '0%': { r: '0', opacity: '0.5' }, '100%': { r: '10', opacity: '0' }, },
                  'grow-bar': { '0%': { 'height': '0%' }, '100%': { 'height': 'var(--bar-height, 100%)' }, },
                  'heart-beat': { '0%, 100%': { transform: 'scale(1)' }, '20%': { transform: 'scale(1.1)' }, '40%': { transform: 'scale(1)' }, },
                  'draw-path': { 'to': { 'stroke-dashoffset': '0' } },
                  'node-appear': { '0%': { transform: 'scale(0.5)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' }, },
                  'toggle-on': { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(100%)' }, },
                  'fill-bar': { 'from': { width: '0%' }, 'to': { width: 'var(--fill-width, 75%)' }, },
                  'rocket-launch': { '0%': { transform: 'translateY(0) scale(0.5)', opacity: '0' }, '20%': { transform: 'translateY(0) scale(1)', opacity: '1' }, '100%': { transform: 'translateY(-200px) scale(1.2)', opacity: '0' }, },
                  'particle-stream': { '0%': { transform: 'translateY(0) scale(1)', opacity: '1' }, '100%': { transform: 'translateY(50px) scale(0)', opacity: '0' }, },
                  'chart-morph': { '0%, 100%': { d: 'path("M0 50 Q 25 20, 50 40 T 100 20")' }, '50%': { d: 'path("M0 30 Q 25 60, 50 30 T 100 50")' }, },
                  'crm-flow-1': { '0%': { transform: 'translate(0, 0)', opacity: '0' }, '10%, 90%': { opacity: '1' }, '35%': { transform: 'translate(0, 80px)' }, '45%': { transform: 'translate(115px, 80px)' }, '65%': { transform: 'translate(115px, 20px)' }, '75%': { transform: 'translate(230px, 20px)' }, '90%, 100%': { transform: 'translate(230px, 120px)', opacity: '0' }, },
                  'crm-flow-2': { '0%': { transform: 'translate(0, 20px)', opacity: '0' }, '10%, 90%': { opacity: '1' }, '30%': { transform: 'translate(0, 150px)' }, '40%': { transform: 'translate(115px, 150px)' }, '60%': { transform: 'translate(115px, 90px)' }, '70%': { transform: 'translate(230px, 90px)' }, '90%, 100%': { transform: 'translate(230px, 40px)', opacity: '0' }, },
                  'crm-flow-3': { '0%': { transform: 'translate(0, -10px)', opacity: '0' }, '15%, 85%': { opacity: '1' }, '35%': { transform: 'translate(0, 50px)' }, '45%': { transform: 'translate(115px, 50px)' }, '65%': { transform: 'translate(115px, 180px)' }, '75%': { transform: 'translate(230px, 180px)' }, '85%, 100%': { transform: 'translate(230px, 100px)', opacity: '0' }, },
                  'running-dot': { '0%': { transform: 'translateX(-20px)', opacity: '0' }, '10%, 90%': { opacity: '0.7' }, '100%': { transform: 'translateX(100vw)', opacity: '0' }, },
                  'shoot-right': { '0%': { transform: 'translateX(-300px)', opacity: '0' }, '10%': { opacity: '0.7' }, '90%': { opacity: '0.7' }, '100%': { transform: 'translateX(100vw)', opacity: '0' }, },
                },
                animation: {
                  'fade-in-up': 'fade-in-up 0.8s ease-out forwards', 'fade-in-up-delay-1': 'fade-in-up 0.8s ease-out 0.2s forwards', 'fade-in-up-delay-2': 'fade-in-up 0.8s ease-out 0.4s forwards', 'fade-in-up-delay-3': 'fade-in-up 0.8s ease-out 0.6s forwards', 'fade-in-up-delay-4': 'fade-in-up 0.8s ease-out 0.8s forwards', 'fade-in-up-delay-5': 'fade-in-up 0.8s ease-out 1.0s forwards',
                  'blob-1': 'blob-1 15s ease-in-out infinite', 'blob-2': 'blob-2 18s ease-in-out infinite', 'blob-3': 'blob-3 12s ease-in-out infinite', 'blob-4': 'blob-4 16s ease-in-out infinite', 'blob-5': 'blob-5 20s ease-in-out infinite', 'blob-6': 'blob-6 17s ease-in-out infinite', 'blob-7': 'blob-7 14s ease-in-out infinite', 'blob-8': 'blob-8 19s ease-in-out infinite', 'blob-9': 'blob-9 16s ease-in-out infinite', 'blob-10': 'blob-10 18s ease-in-out infinite', 'blob-11': 'blob-11 15s ease-in-out infinite',
                  'float-1': 'float 4s ease-in-out infinite', 'float-2': 'float 5s ease-in-out infinite 0.5s', 'float-3': 'float 6s ease-in-out infinite 1s',
                  'draw-line': 'draw-line 2.5s ease-out 0.5s forwards',
                  'pulse-dot-1': 'pulse-dot 2s ease-in-out infinite 1.5s', 'pulse-dot-2': 'pulse-dot 2s ease-in-out infinite 2.0s', 'pulse-dot-3': 'pulse-dot 2s ease-in-out infinite 2.5s', 'pulse-dot-4': 'pulse-dot 2s ease-in-out infinite 3.0s',
                  'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite', 'click-ripple': 'click-ripple 1.5s ease-out infinite 0.5s',
                  'grow-bar-1': 'grow-bar 1.5s ease-out forwards', 'grow-bar-2': 'grow-bar 1.5s ease-out 0.2s forwards', 'grow-bar-3': 'grow-bar 1.5s ease-out 0.4s forwards',
                  'heart-beat': 'heart-beat 1.5s ease-in-out infinite', 'draw-path': 'draw-path 1s ease-out forwards', 'node-appear': 'node-appear 0.5s ease-out forwards', 'toggle-on': 'toggle-on 0.3s ease-in-out forwards', 'fill-bar': 'fill-bar 1s ease-out forwards', 'rocket-launch': 'rocket-launch 2.5s ease-in-out infinite', 'particle-stream': 'particle-stream 0.5s linear infinite', 'chart-morph': 'chart-morph 4s ease-in-out infinite',
                  'crm-flow-1': 'crm-flow-1 12s ease-in-out infinite', 'crm-flow-2': 'crm-flow-2 14s ease-in-out infinite 0.5s', 'crm-flow-3': 'crm-flow-3 13s ease-in-out infinite 1s',
                  'running-dot': 'running-dot linear infinite',
                  'shoot-right-1': 'shoot-right 20s linear 1s infinite', 'shoot-right-2': 'shoot-right 25s linear 5s infinite', 'shoot-right-3': 'shoot-right 18s linear 8s infinite', 'shoot-right-4': 'shoot-right 22s linear 12s infinite', 'shoot-right-5': 'shoot-right 28s linear 15s infinite',
                }
              },
            },
          }
        `}} />
      </head>
      <body className="bg-transparent">
        <main className="relative min-h-screen text-gray-800 dark:text-white transition-colors duration-300 overflow-x-clip flex flex-col">
            <GlobalBackground />
             {/* Unified Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[10rem] left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full filter blur-3xl animate-blob-1"></div>
                <div className="absolute top-[20rem] right-1/4 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/20 rounded-full filter blur-3xl animate-blob-2"></div>
                <div className="absolute top-[60rem] right-1/4 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/15 rounded-full filter blur-3xl animate-blob-3"></div>
                <div className="absolute top-[70rem] left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full filter blur-3xl animate-blob-4"></div>
                <div className="absolute top-[90rem] left-1/3 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full filter blur-3xl animate-blob-5"></div>
                <div className="absolute top-[100rem] right-1/3 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full filter blur-3xl animate-blob-6"></div>
                <div className="absolute top-[140rem] right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full filter blur-3xl animate-blob-4"></div>
                <div className="absolute top-[160rem] left-1/4 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/20 rounded-full filter blur-3xl animate-blob-5"></div>
                <div className="absolute top-[200rem] right-1/4 w-96 h-96 bg-green-500/5 dark:bg-green-500/15 rounded-full filter blur-3xl animate-blob-6"></div>
                <div className="absolute top-[220rem] left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/15 rounded-full filter blur-3xl animate-blob-7"></div>
                <div className="absolute top-[260rem] left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/15 rounded-full filter blur-3xl animate-blob-8"></div>
                <div className="absolute top-[280rem] right-1/4 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/15 rounded-full filter blur-3xl animate-blob-9"></div>
                <div className="absolute top-[320rem] right-1/4 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/15 rounded-full filter blur-3xl animate-blob-10"></div>
                <div className="absolute top-[340rem] left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/15 rounded-full filter blur-3xl animate-blob-11"></div>
                <div className="absolute top-[380rem] left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full filter blur-3xl animate-blob-8"></div>
                <div className="absolute top-[400rem] right-1/4 w-96 h-96 bg-yellow-500/5 dark:bg-yellow-500/10 rounded-full filter blur-3xl animate-blob-9"></div>
            </div>
            <div className="flex-grow flex flex-col">
                <Header />
                <div className="flex-grow">
                  {children}
                </div>
                <Footer />
            </div>
        </main>
      </body>
    </html>
  );
}