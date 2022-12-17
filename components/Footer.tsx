import { ComponentChildren } from "preact";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
import IconFeather from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/feather.tsx";

export default function Footer() {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "TOP", href: "/" },
        { name: "所属選手", href: "/member" },
        { name: "試合結果", href: "/result" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Forum", href: "#" },
        { name: "Discord", href: "#" },
      ],
    },
  ];

  return (
    <div class="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <IconFeather class="inline-block" />
          <div class="font-bold text-2xl">
            Freshtominton
          </div>
        </div>
        <div class="text-gray-500">
          東京のバドミントンチームです。
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          Copyright © 2020 DenoLand<br />
          All right reserved.
        </div>

        <a
          href="https://github.com/denoland/fresh"
          class="inline-block hover:text-black"
        >
          <BrandGithub />
        </a>
      </div>
    </div>
  );
}
