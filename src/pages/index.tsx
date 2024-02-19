import Image from "next/image";
import { Inter } from "next/font/google";
import ApiTestPage from "@/pages/apiTest";

export default function Home() {
  return (
    <div className="bg-green-300">
      <ApiTestPage />
    </div>
  );
}
