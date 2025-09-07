import Navbar from "./components/Navbar";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";

import Page6 from "./components/Page6";

export default function Home() {
  return (
    <div>
      <Navbar />
     
        <Page6 />
   
      <section id="service">
        <Page2 />
      </section>

      <Page3 />

      <section id="project">
        <Page4 />
      </section>
      <section id="contact">
        <Page5 />
      </section>
    </div>
  );
}
