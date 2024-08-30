import React from "react";

interface SocialMediaIconProps {
  href: string;
  iconPath: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  href,
  iconPath,
}) => {
  return (
    <a href={href} className="text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={iconPath} />
      </svg>
    </a>
  );
};

export default SocialMediaIcon;
