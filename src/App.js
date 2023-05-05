import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Servisces from "./components/Servisces";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Team from "./components/Team";
import { useEffect } from "react";
import Feature from "./components/Feature";
import Integer from "./components/Integer";
import Term from "./components/Term";
import Guide from "./components/Guide";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import BackTop from "./components/Backtotop";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  return (
    <>
      <Loader />
      <BackTop />
      <div className="overflow-hidden">
        <Hero />
        <Feature />
        <Integer />
        <Servisces />
        <Term />
        <Project />
        <Team />
        <Guide />
        <Footer />
      </div>
    </>
  );
}

export default App;
