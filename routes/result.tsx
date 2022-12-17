import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import Footer from "../components/Footer.tsx";

interface Result {
  taikai: string;
  date: Date;
  place: string;
  result: string;
}

export default function Result() {
  const result = [];

  function generateRandomEvent() {
    const places = [
      "東京",
      "タイ",
      "ベトナム",
      "インドネシア",
      "フィリピン",
      "ミャンマー",
      "ベトナム",
      "インドネシア",
      "フィリピン",
    ];
    const results = [
      "優勝",
      "準優勝",
      "3位",
      "4位",
      "5位",
      "6位",
      "7位",
      "8位",
    ];
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 30) + 1;
    const place = places[Math.floor(Math.random() * places.length)];

    return {
      taikai: `${place}バドミントン大会`,
      date: new Date(2022, month - 1, day),
      place: `${place}`,
      result: results[Math.floor(Math.random() * results.length)],
    };
  }

  for (let i = 0; i < 20; i++) {
    result.push(generateRandomEvent());
  }

  return (
    <>
      <Head>
        <title>Freshtominton</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p>
          <a href="/" class="text-blue-500">＜ HOME</a>
        </p>

        <h1 class="text-4xl">試合結果</h1>
        <div class="space-y-4">
          {result.sort((a, b) => a.date.getTime() - b.date.getTime()).map(
            (item) => {
              return (
                <div>
                  <div class="text-2xl">{item.taikai} {item.result}</div>
                  <div>日付: {item.date.toString()}</div>
                  <div>場所: {item.place}</div>
                </div>
              );
            },
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
