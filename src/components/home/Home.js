import React from "react";
import Welcome from "../pages/Welcome";
import { About, Blog, Contact, Event, Menu, Services } from "../pages";

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Services />
      <Event />
      <Menu />
      <Blog />
      <Contact/>
    </>
  );
}