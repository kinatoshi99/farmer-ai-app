import React from "react";

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li>
      <a href={href} className="link link-hover text-white">
        {label}
      </a>
    </li>
  );
};

export default FooterLink;
