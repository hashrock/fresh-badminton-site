import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/mail.tsx"

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 h-[800px] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/hero.jpg');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">Freshtominton</h1>
        <p class="text-xl max-w-lg text-blue-100">
          Freshなメンバーを集めた東京のバドミントンチームです。
        </p>
      </div>

      <div>
        <a
          href="mailto:info@freshminton.com?subject=ファンになります！"
          class="block mt-4 text-blue-500 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          <IconMail class="w-6 h-6" />ファンクラブに参加する
        </a>
      </div>
    </div>
  );
}
