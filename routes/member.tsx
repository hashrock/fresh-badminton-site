import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import Footer from "../components/Footer.tsx";

export default function Member() {
  return (
    <>
      <Head>
        <title>Freshtominton</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p>
          <a href="/" class="text-blue-500">＜ HOME</a>
        </p>

        <h1 class="text-4xl">メンバー一覧</h1>

        <div>
          <img src="/a.png" alt="" />
          <div>León Nereus</div>
          <div>70歳</div>
          <div>バドミントン歴7年</div>
        </div>

        <div>
          <img src="/b.png" alt="" />
          <div>Aune Chiamaka</div>
          <div>70歳</div>
          <div>バドミントン歴7年</div>
        </div>
      </div>

      <Footer />
    </>
  );
}
