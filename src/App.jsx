import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero/>
      <Features/>
    </main>
  );
};

export default App;
