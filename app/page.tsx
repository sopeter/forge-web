import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import WhoItsFor from "./components/WhoItsFor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <WhoItsFor />
    </main>
  );
}
