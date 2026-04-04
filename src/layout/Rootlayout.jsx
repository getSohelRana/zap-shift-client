import React from "react";
import { Outlet } from "react-router";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/header/Navbar";
import Container from "../components/container/Container";

const Rootlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        <Container>
          <Outlet></Outlet>
        </Container>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Rootlayout;
