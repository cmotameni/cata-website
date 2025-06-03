import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const PrimaryButton = ({ children, ...props }: ButtonProps) => (
  <button
    className="bg-[#007AFF] text-white px-4 py-3 rounded-[12px] font-semibold transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer"
    {...props}
  >
    {children}
  </button>
);

export const SecondaryButton = ({ children, ...props }: ButtonProps) => (
  <button
    className="bg-white text-[#292929] border border-[#E4E4E7] px-4 py-3 rounded-[12px] font-semibold transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer"
    {...props}
  >
    {children}
  </button>
);

// Add sheen animation to global styles
// @layer utilities {
//   @keyframes sheen {
//     0% { left: -75%; }
//     100% { left: 100%; }
//   }
//   .animate-sheen {
//     animation: sheen 0.7s linear forwards;
//   }
// } 