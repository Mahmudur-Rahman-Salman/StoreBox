import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      <Sidebar></Sidebar>
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation></MobileNavigation>
        <Header></Header>
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default Layout;