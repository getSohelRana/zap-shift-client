import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router";

const Button = ({
  children,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  loading = false,
  to = "",
  className = ""
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-3 py-2  rounded font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-[#CAEB66] rounded-3xl text-black hover:bg-[#b8d140]",
    outline:
      "border border-primary rounded-3xl text-primary hover:bg-[#03464D] hover:text-white",
    ghost: "text-[#03464D] hover:bg-[#03464D]/10",
  };
  return (
    <Link to={to} className={`${baseStyle} ${variants[variant]}  ${className} `} disabled={loading}>
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
    </Link>
  );
};

export default Button;
