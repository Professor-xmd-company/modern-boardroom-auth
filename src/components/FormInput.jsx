import React from 'react';

export default function FormInput({
  label,
  id,
  type = 'text',
  error,
  value,
  onChange,
  required = false,
  placeholder,
  ...props
}) {
  return (
    <div className="flex flex-col w-full mb-5">
      {/* Label in sentence case, above the input */}
      <label
        htmlFor={id}
        className="text-xs font-medium text-[#A1A1AA] mb-1.5 select-none"
      >
        {label}
      </label>

      {/* Input field with zero border-radius, min-h-44px for touch targets */}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full min-h-[44px] px-3 bg-[#09090B] border text-[#F4F4F5] placeholder-[#71717A] text-sm rounded-none transition-colors duration-150 focus:outline-none focus:border-[#71717A] ${
          error ? 'border-[#EA580C]' : 'border-[#27272A]'
        }`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />

      {/* Inline error state below the input in #EA580C (no icons) */}
      {error && (
        <span
          id={`${id}-error`}
          className="text-xs text-[#EA580C] mt-1.5 font-medium"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}
