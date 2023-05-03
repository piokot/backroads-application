import React from "react";

import { Navbar } from "./Nav/Nav";
import { Hero } from "./Hero/Hero";
import { About } from "./About/About";
import { Services } from "./Services/Services";
import { Tours } from "./Tours/Tours";
import { Footer } from "./Footer/Footer";

export const App = props =>
{
  return(
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  )
}