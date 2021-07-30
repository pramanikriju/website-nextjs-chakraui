import Hero from "../components/index/hero";
import Feature from "../components/index/feature";
import Stats from "../components/index/stats";
import Contact from "../components/index/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <hr />
      <Feature />
      <Stats />
      <Contact />
    </div>
  );
}
