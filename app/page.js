import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import Features from "@/components/Preview";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-1">
        <Header />
        <div className="px-8 py-4 pb-20">
          <Hero />
          <Features />
        </div>
      </main>
      <Footer />
    </>
  );
}
