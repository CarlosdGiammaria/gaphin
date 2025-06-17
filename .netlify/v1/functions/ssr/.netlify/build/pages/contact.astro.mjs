import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_FhSrvt_g.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_COrwStji.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$FormContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="bg-gray-100 py-16 px-6 lg:px-20"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-[#365b6d] mb-6 text-center">
Contáctanos
</h2> <p class="text-gray-700 text-lg text-center mb-10">
¿Tienes alguna duda o deseas más información sobre nuestros servicios?
      Envíanos un mensaje y te responderemos lo antes posible.
</p> <form class="bg-white shadow-lg rounded-lg p-8 space-y-6" autocomplete="off"> <div> <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre completo</label> <input type="text" id="nombre" name="nombre" required class="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#d4a413] focus:border-[#d4a413]"> </div> <div> <label for="correo" class="block text-sm font-medium text-gray-700">Correo electrónico</label> <input type="email" id="correo" name="correo" required class="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#d4a413] focus:border-[#d4a413]"> </div> <div> <label for="telefono" class="block text-sm font-medium text-gray-700">Teléfono</label> <input type="tel" id="telefono" name="telefono" class="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#d4a413] focus:border-[#d4a413]"> </div> <div> <label for="mensaje" class="block text-sm font-medium text-gray-700">Mensaje</label> <textarea id="mensaje" name="mensaje" rows="5" required class="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#d4a413] focus:border-[#d4a413] resize-none"></textarea> </div> <div class="text-center"> <button type="submit" class="bg-[#d4a413] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#c99f0f] transition cursor-pointer">
Enviar mensaje
</button> </div> </form> </div> </section>`;
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/components/FormContact.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cont\xE1ctanos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormContact", $$FormContact, {})} ` })}`;
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/pages/contact.astro", void 0);

const $$file = "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
