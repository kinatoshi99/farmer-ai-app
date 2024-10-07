import { useTranslations } from "next-intl";
import MainSection from "@/components/main/MainSection";
// import {getTranslations} from 'next-intl/server';

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainSection />
      <h1>{t("hello")}</h1>
    </main>
  );
}
