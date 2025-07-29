import React from 'react';

interface CallToActionButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  onClick,
  className = '',
  children = 'Give Me My Enhanced Laser Strike System + Virtual Steel Target!',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-[#28a745] hover:bg-[#218838] text-white font-bold py-3 px-2 md:px-8 text-lg md:text-[28px]
        transition-all duration-300 animate-custom-pulse hover:opacity-90 hover:scale-[1.02]
        min-h-[4.5rem] flex items-center justify-center mx-auto text-center
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default CallToActionButton;
