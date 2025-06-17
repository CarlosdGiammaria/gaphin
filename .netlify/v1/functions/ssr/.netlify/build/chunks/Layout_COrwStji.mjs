import { e as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate, l as renderScript, f as createAstro, n as renderSlot, o as renderHead, h as addAttribute } from './astro/server_FhSrvt_g.mjs';
import 'kleur/colors';
/* empty css                           */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-800 text-white py-16 px-6 md:px-20"> <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-12"> <!-- Logo y redes --> <div class="flex flex-col items-start"> <img src="/src/img/logo-gaphin.png" alt="Logo GAPHIN" class="w-40 mb-4"> <div class="flex gap-4 mt-2 "> <a href="https://www.instagram.com/gaphinsas_ph/?igsh=MTNzcjRjd3hmdHdzdg%3D%3D#" class="text-[#d4a413] flex flex-row items-center capitalize gap-3" target="_blank">${renderComponent($$result, "ion-icon", "ion-icon", { "name": "logo-instagram", "size": "large" })} <span>instagram</span> </a> </div> </div> <!-- Dirección --> <div> <h4 class="font-bold text-lg mb-2">Dirección</h4> <p>Barranquilla<br>Cra 39 # 41-131 oficina 201</p> <p class="mt-4">Bogotá<br>Cra 15 No 78-02 Oficina 506</p> </div> <!-- Contacto --> <div> <h4 class="font-bold text-lg mb-2">Contacto</h4> <p><strong>Email:</strong> gerencia@gaphin.com</p> <p><strong>Cel:</strong> +57 320 833 3321</p> <a href="/contact" target="" class="mt-4 inline-block bg-[#d4a413] px-5 py-2 rounded-md text-white hover:bg-[#c99f0f]">
ÚNETE A NUESTRA RED
</a> </div> </div> </footer>`;
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/components/Footer.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-center text-[#d4a413] bg-white"> <span class="opacity-80">Grupo De Administracion En Propiedad Horizontal Integral</span> </div> <header class="bg-[#d4a413] h-20 flex show-md"> <nav class="flex justify-between items-center w-[92%] mx-auto"> <div class=""> <!-- <img
        class="w-16"
        src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
        alt='..."'
      /> --> <div class="flex flex-col text-white md:m-2"> <a href="/" class="text-2xl font-medium">Gaphin S.A.S</a> </div> </div> <div class="nav-links duration-500 md:static absolute bg-[#d4a413] md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5"> <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white"> <li> <a href="/" class="hover:text-gray-200 font-normal text-lg">Inicio</a> </li> <li> <a href="/servicios" class="hover:text-gray-200 font-normal text-lg">Servicios</a> </li> <li> <a href="/reseñas" class="hover:text-gray-200 font-normal text-lg">Reseñas</a> </li> <li> <a href="/contact" class="hover:text-gray-200 font-normal text-lg">Contáctanos</a> </li> </ul> </div> <div class="flex items-center gap-6"> <a href="https://wa.link/9wh1qt" target="_blank" class="bg-[#162b4e] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#2d5598] transition-all cursor-pointer duration-300">
WhatsApp
</a> ${renderComponent($$result, "ion-icon", "ion-icon", { "id": "menu-toggle", "name": "menu-outline", "class": "text-3xl cursor-pointer md:hidden text-white" })} </div> </nav> </header> ${renderScript($$result, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/components/Menu.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/components/Menu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script><script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><title>', "</title>", '</head> <body class="box-border p-0 m-0 font-[Poppins]"> ', " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Menu", $$Menu, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
