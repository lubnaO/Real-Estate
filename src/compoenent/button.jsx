import React from "react";

const Button = ({ title, href = "#contact", variant = "primary" }) => {
  let styles = {
    primary: "cursor-pointer font-header font-medium shadow-md rounded-full border border-primary p-3 bg-primary text-white md:px-20",
    secondary:
      "cursor-pointer font-header font-medium shadow-md rounded-full border border-primary p-3 bg-white/20 backdrop-blur-sm text-primary md:px-10",
  }[variant];
  return (
    <div>
      <a href={href} className={`${styles} `}>
        {title}
      </a>
    </div>
  );
};

export default Button;
