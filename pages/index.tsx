import Hero from "../components/index/hero";
import Feature from "../components/index/feature";
import Stats from "../components/index/stats";
import Contact from "../components/index/contact";
import Clients from "../components/index/clients";
import Profile from "../components/index/profile";

export default function Home() {
  return (
    <div>
      <Hero />
      <hr />
      <Feature />
      <Profile />
      <Clients />
      <Stats />

      <Contact />
    </div>
  );
}
