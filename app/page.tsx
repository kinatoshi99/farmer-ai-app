import Image from "next/image";
import { Navbar } from "./navigation/Navbar";

import MainSection from "@/components/main/MainSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainSection />
    </main>
  );
}
