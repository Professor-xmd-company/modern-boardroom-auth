import React from 'react';

export default function PrimaryButton({
  children,
  type = 'submit',
  disabled = false,
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="w-full min-h-[44px] bg-[#F4F4F5] text-[#09090B] font-semibold text-sm rounded-none transition-all duration-150 hover:bg-[#A1A1AA] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none flex items-center justify-center"
      {...props}
    >
      {children}
    </button>
  );
}
