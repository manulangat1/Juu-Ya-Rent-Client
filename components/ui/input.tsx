import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, error, icon, className, ...props }) => {
  return (
    <div className="flex flex-col w-full space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            {icon}
          </div>
        )}

        <input
          {...props}
          className={clsx(
            "w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
            icon && "pl-10",
            error ? "border-red-500" : "border-gray-300",
            className
          )}
        />
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
