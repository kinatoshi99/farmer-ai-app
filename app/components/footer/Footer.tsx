import React from "react";
import FooterLink from "./FooterLink";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-primary">Farmer AI</h2>
            <p className="mt-2">
              Connecting Thai farmers with technology to grow their businesses.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <ul className="list-none">
              <FooterLink href="#" label="Home" />
              <FooterLink href="#" label="About Us" />
              <FooterLink href="#" label="Marketplace" />
              <FooterLink href="#" label="Contact" />
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4">
              <SocialMediaIcon
                href="#"
                iconPath="M24 4.56v14.91c0 2.52-2.05 4.56-4.56 4.56H4.56A4.56 4.56 0 010 19.47V4.56A4.56 4.56 0 014.56 0h14.91A4.56 4.56 0 0124 4.56zM9.88 19.47v-7.03H7.28v7.03h2.6zm-1.3-8.01a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm12.19 8.01v-3.9c0-.93-.08-1.71-.26-2.45-.47-1.72-1.48-2.88-2.93-3.02-.89-.08-1.75-.13-2.6-.12-2.08.01-4.16.03-6.24.06v7.44h2.6v-5.14c0-1.19.46-1.93 1.34-2.32 1.18-.55 2.47-.59 3.81.12.69.36 1.11.93 1.11 1.77v5.56h2.6z"
              />
              <SocialMediaIcon
                href="#"
                iconPath="M23.34 3.5c-.81.36-1.68.6-2.6.71A4.48 4.48 0 0022.68 2a8.94 8.94 0 01-2.82 1.08 4.47 4.47 0 00-7.63 4.07c0 .35.04.7.12 1.03a12.7 12.7 0 01-9.22-4.68 4.47 4.47 0 001.39 5.97c-.65-.02-1.26-.2-1.8-.5v.05c0 2.2 1.56 4.03 3.63 4.45-.38.1-.78.15-1.19.15-.29 0-.58-.03-.85-.08.58 1.8 2.26 3.12 4.25 3.15a8.97 8.97 0 01-5.55 1.91c-.36 0-.72-.02-1.08-.06A12.67 12.67 0 007.72 21c8.23 0 12.73-6.82 12.73-12.74 0-.19 0-.39-.01-.58a9.12 9.12 0 002.24-2.32z"
              />
              <SocialMediaIcon
                href="#"
                iconPath="M12 2.19c2.77 0 3.1.01 4.18.06 1.07.05 1.81.23 2.3.38.7.23 1.18.51 1.7.96.51.46.91.98 1.38 1.7.45.55.74 1.03.96 1.7.15.49.34 1.23.38 2.3.05 1.08.06 1.42.06 4.19s-.01 3.11-.06 4.19c-.05 1.07-.23 1.81-.38 2.3-.23.7-.51 1.18-.96 1.7-.46.51-.98.91-1.7 1.38-.55.45-1.03.74-1.7.96-.49.15-1.23.34-2.3.38-1.08.05-1.42.06-4.19.06s-3.11-.01-4.19-.06c-1.07-.05-1.81-.23-2.3-.38-.7-.23-1.18-.51-1.7-.96-.51-.46-.91-.98-1.38-1.7-.45-.55-.74-1.03-.96-1.7-.15-.49-.34-1.23-.38-2.3-.05-1.08-.06-1.42-.06-4.19s.01-3.11.06-4.19c.05-1.07.23-1.81.38-2.3.23-.7.51-1.18"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
