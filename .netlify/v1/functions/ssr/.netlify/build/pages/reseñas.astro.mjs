import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_FhSrvt_g.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_COrwStji.mjs';
import 'clsx';
import { d as db } from '../chunks/firebaseAdmin_oot6nnko.mjs';
export { renderers } from '../renderers.mjs';

const $$ListaDeResenas = createComponent(async ($$result, $$props, $$slots) => {
  const snapshot = await db.collection("rese\xF1as-clientes").orderBy("createdAt", "desc").get();
  const rese\u00F1as = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      resena: data.resena,
      conjunto: data.conjunto,
      fecha: data.createdAt.toDate().toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    };
  });
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-16 px-6 lg:px-20"> <div class="max-w-6xl mx-auto"> <!-- Título --> <h2 class="text-4xl font-bold text-[#365b6d] text-center mb-4">
Reseñas de Propietarios y Consejeros
</h2> <!-- Botón de llamada a acción --> <div class="text-center mb-12"> <p class="text-gray-600 mb-3 text-lg">¿Ya trabajas con nosotros?</p> <a href="/#reseñas" class="inline-block bg-[#d4a413] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-[#c99f0f] transition">
Dejar mi reseña
</a> </div> <!-- Lista de reseñas --> <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${rese\u00F1as.map((r) => renderTemplate`<div class="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"> <div> <h3 class="text-lg font-semibold text-[#365b6d] mb-1"> ${r.name} </h3> <p class="text-sm text-gray-500 mb-2">
Conjunto Residencial:${" "} <span class="uppercase">${r.conjunto}</span> </p> <p class="text-gray-800 italic text-base">“${r.resena}”</p> </div> <p class="text-sm text-right text-gray-400 mt-6">${r.fecha}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/components/ListaDeResenas.astro", void 0);

const $$Reseas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rese\xF1as" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ListaDeResenas", $$ListaDeResenas, {})} ` })}`;
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/pages/rese\xF1as.astro", void 0);

const $$file = "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/pages/reseñas.astro";
const $$url = "/reseñas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reseas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
