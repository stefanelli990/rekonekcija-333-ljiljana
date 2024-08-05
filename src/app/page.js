import About from "./components/About"
import Benefits from "./components/Benefits"
import Contact from "./components/Contact"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Quote from "./components/Quote"
import Reconnection from "./components/Reconnection"
import Treatments from "./components/Treatments"

export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <Reconnection/>
      <Quote/>
      <Treatments/>
      <Benefits/>
      <About/>
      <Faq/>
      <Contact/>
    </main>
    <Footer/>
    </>
  );
}
