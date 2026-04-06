import React from "react";
import { FaDownload } from "react-icons/fa";

const Button = ({
  children,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  loading = false,
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-3 py-2  rounded font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-[#CAEB66] text-black hover:bg-[#b8d140]",
    outline:
      "border border-[#03464D] text-[#03464D] hover:bg-[#03464D] hover:text-white",
    ghost: "text-[#03464D] hover:bg-[#03464D]/10",
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} `} disabled={loading}>
      {/* Left Icon */}
      {Icon && iconPosition === "left" && !loading && (
        <Icon className="w-5 h-5" />
      )}

      {/* Loading */}
      {loading ? "Loading..." : children}

      {/* Right Icon */}
      {Icon && iconPosition === "right" && !loading && (
        <Icon  className="w-5 h-5 " />
      )}
    </button>
  );
};

export default Button;
