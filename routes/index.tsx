import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Freshtominton</title>
      </Head>
      <Hero />
      <div class="p-4 mx-auto max-w-screen-md">
      </div>

      <Footer />
    </>
  );
}
