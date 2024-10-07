import {
    createLocalizedPathnamesNavigation,
  } from "next-intl/navigation";
import { Pathnames } from "next-intl/routing";
  
  export const defaultLocale = "en";
  
  export const localeDetection = true;
  
  export const locales = ["en", "th"] as const;
  
  export const pathnames = {
    "/": "/",
    "/about": {
      en: "/about",
      th: `/${encodeURIComponent("حول")}`,
    },
  } satisfies Pathnames<typeof locales>;
  
  export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
      locales,
      pathnames,
    });
  