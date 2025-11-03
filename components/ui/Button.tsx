import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none ";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  return (
    <button
      {...props}
      disabled={loading}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
