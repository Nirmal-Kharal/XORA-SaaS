
import FAQ from "./sections/FAQ";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero/>
      <Features/>
      <Pricing />
      <FAQ />
      <Testimonials />
      <Footer />
   
    </main>
  );
};

export default App;
