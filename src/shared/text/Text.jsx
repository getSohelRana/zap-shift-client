import React from "react";

const Text = ({
  children,
  className = "",
  align = "text-center",
  variant = "base",
}) => {
  const variants = {
    base: "text-base",
    sm: "text-sm",
    lg: "text-lg",
  };

  return (
    <p
      className={`${variants[variant]} font-medium text-black/80 ${align} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
