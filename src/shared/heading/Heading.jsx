import React from "react";

const Heading = ({
  children,
  as: Tag = "h1",
  className = "",
  align = "text-center",
}) => {
  return (
    <Tag className={`font-extrabold text-3xl md:text-4xl mb-4 ${align} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
