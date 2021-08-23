import Hero from "../components/index/hero";
import Feature from "../components/index/feature";
import Stats from "../components/index/stats";
import Contact from "../components/index/contact";
import Clients from "../components/index/clients";
import Profile from "../components/index/profile";
import Pricing from "../components/index/pricing";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Riju Pramanik</title>
      </Head>
      <Hero />
      <hr />
      <Feature />
      {/* <Profile /> */}
      <Clients />

      <Pricing />
      <Stats />
      <Contact />
    </div>
  );
}
