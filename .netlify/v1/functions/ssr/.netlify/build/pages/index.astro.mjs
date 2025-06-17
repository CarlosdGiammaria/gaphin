import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_FhSrvt_g.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_COrwStji.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$HeroContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="banner" data-astro-cid-wwkfyc33> <!-- Contenido del banner --> <div class="max-w-5xl mx-auto px-6 flex flex-col justify-center h-full text-white text-center" data-astro-cid-wwkfyc33> <h1 class="text-4xl md:text-5xl font-extrabold leading-tight" data-astro-cid-wwkfyc33>
SERVICIOS DE ADMINISTRACIÓN DE PROPIEDAD HORIZONTAL
</h1> <p class="mt-6 text-lg md:text-xl" data-astro-cid-wwkfyc33>
GAPHIN es una empresa con más de <span class="font-bold" data-astro-cid-wwkfyc33>10 años de experiencia</span> brindando atención personalizada, <br data-astro-cid-wwkfyc33>
gestión administrativa y operativa en propiedad horizontal, respaldada por
      la <br data-astro-cid-wwkfyc33> <span class="font-bold" data-astro-cid-wwkfyc33>Ley 675 de 2001</span> y un equipo profesional altamente
      capacitado.
</p> <a href="/servicios" class="mt-8 mx-auto w-max bg-[#d4a525da] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#d4a413] transition duration-500 ease-in-out" data-astro-cid-wwkfyc33>
CONOCE NUESTROS SERVICIOS
</a> </div> </div> `;
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/components/HeroContent.astro", void 0);

const $$InfoEmpresa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="bg-white py-16 px-6 lg:px-20"> <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10"> <!-- Imagen a la izquierda --> <div class="md:w-1/2"> <img src="/src/img/about.jpg" alt="GAPHIN equipo" class="rounded-lg shadow-lg w-full h-auto object-cover"> </div> <!-- Texto a la derecha --> <div class="md:w-1/2"> <h2 class="text-3xl md:text-4xl font-bold text-center text-[#365b6d] mb-6">¿Quiénes somos?</h2> <div class="space-y-5 text-gray-700 text-justify leading-relaxed"> <p>
Somos una empresa especializada en la administración de propiedad horizontal, nacida tras más de <span class="font-semibold">10 años de experiencia</span> como persona natural. Nuestro propósito es ofrecer a las copropiedades un servicio integral, profesional y respaldado legalmente, que garantice el bienestar, la transparencia financiera y el cumplimiento normativo conforme a la <strong>Ley 675 de 2001</strong>.
</p> <p>
Contamos con un equipo de profesionales idóneos en administración, contabilidad, derecho y operación técnica, comprometidos con la calidad en cada proceso: desde la gestión de cartera, el mantenimiento de zonas comunes y la asesoría jurídica, hasta la atención personalizada con el Consejo de Administración y la Asamblea General.
</p> <p>
Nuestra experiencia en la recepción de áreas comunes, el manejo eficiente de reuniones, la supervisión de contratos y el acompañamiento constante, nos convierte en <span class="font-semibold">aliados estratégicos</span> para la buena convivencia y el desarrollo organizativo de su comunidad.
</p> </div> </div> </div> </section>`;
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/components/InfoEmpresa.astro", void 0);

const $$ServicioPrincipal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="bg-[#d4a413] py-16 px-6 lg:px-20"> <div class="max-w-7xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-12">
Nuestros Servicios
</h2> <div class="grid md:grid-cols-3 gap-10 text-left"> <!-- Servicio 1 --> <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition flex flex-col justify-between"> <div> <img src="/src/img/gestionadmin.png" alt="Gestión administrativa" class="w-100 mb-4 rounded-2xl"> <h3 class="text-xl font-semibold text-[#365b6d] mb-2">
Gestión Administrativa
</h3> <p class="text-gray-700 text-base mb-4">
Coordinación general, reuniones, documentación legal, manejo del
            presupuesto y acompañamiento al Consejo de Administración.
</p> </div> <a href="/servicios" class="inline-block mt-auto bg-[#d4a413] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#c99f0f] transition">
VER MÁS
</a> </div> <!-- Servicio 2 --> <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition flex flex-col justify-between"> <div> <img src="/src/img/gestionoper.jpg" alt="Gestión operativa" class="w-100 mb-4 rounded-2xl"> <h3 class="text-xl font-semibold text-[#365b6d] mb-2">
Gestión Operativa
</h3> <p class="text-gray-700 text-base mb-4">
Mantenimiento de zonas comunes, seguimiento a contratistas, gestión
            del personal de aseo y vigilancia, y planes de mejora continua.
</p> </div> <a href="/servicios" class="inline-block mt-auto bg-[#d4a413] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#c99f0f] transition">
VER MÁS
</a> </div> <!-- Servicio 3 --> <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition flex flex-col justify-between"> <div> <img src="/src/img/servicios_contables.jpg" alt="Contabilidad" class="w-100 mb-4 rounded-2xl"> <h3 class="text-xl font-semibold text-[#365b6d] mb-2">
Servicios Contables
</h3> <p class="text-gray-700 text-base mb-4">
Facturación, informes financieros, conciliaciones bancarias y
            ejecución presupuestal mensual a cargo de contador público.
</p> </div> <a href="/servicios" class="inline-block mt-auto bg-[#d4a413] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#c99f0f] transition">
VER MÁS
</a> </div> <!-- Servicio 4 --> <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition flex flex-col justify-between"> <div> <img src="/src/img/recaudocarte.jpg" alt="Recaudo de cartera" class="w-100 mb-4 rounded-2xl"> <h3 class="text-xl font-semibold text-[#365b6d] mb-2">
Recaudo de Cartera
</h3> <p class="text-gray-700 text-base mb-4">
Gestión diaria del cobro, aplicación de pagos, actualización de
            estados de cuenta y recuperación efectiva de morosos.
</p> </div> <a href="/servicios" class="inline-block mt-auto bg-[#d4a413] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#c99f0f] transition">
VER MÁS
</a> </div> <!-- Servicio 5 --> <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition flex flex-col justify-between"> <div> <img src="/src/img/asesoriajuri.jpg" alt="Asesoría legal" class="w-100 mb-4 rounded-2xl"> <h3 class="text-xl font-semibold text-[#365b6d] mb-2">
Asesoría Jurídica
</h3> <p class="text-gray-700 text-base mb-4">
Abogada experta en propiedad horizontal: sanciones, conflictos,
            peticiones y procesos jurídicos por cartera.
</p> </div> <a href="/servicios" class="inline-block mt-auto bg-[#d4a413] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#c99f0f] transition">
VER MÁS
</a> </div> <!-- Servicio 6 --> <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition flex flex-col justify-between"> <div> <img src="/src/img/asamblea.jpg" alt="Asambleas" class="w-100 mb-4 rounded-2xl"> <h3 class="text-xl font-semibold text-[#365b6d] mb-2">
Asambleas y Consejo
</h3> <p class="text-gray-700 text-base mb-4">
Convocatoria y desarrollo de asambleas, redacción de actas e
            informes mensuales con participación activa y documentación formal.
</p> </div> <a href="/servicios" class="inline-block mt-auto bg-[#d4a413] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#c99f0f] transition">
VER MÁS
</a> </div> </div> </div> </section>`;
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/components/ServicioPrincipal.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FormularioResenas = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<!-- <form id="resena-form" class="max-w-xl mx-auto">\n  <div class="p-5 m-4 border flex flex-col">\n    <label for="name">Nombre Completo</label>\n    <input type="text" class="border" name="name" id="name" required />\n  </div>\n\n  <div class="p-5 m-4 border flex flex-col">\n    <label for="email">Correo Electr\xF3nico</label>\n    <input type="email" class="border" name="email" id="email" required />\n  </div>\n\n  <div class="p-5 m-4 border flex flex-col">\n    <label for="conjunto">Conjunto Residencial</label>\n    <input type="text" class="border" name="conjunto" id="conjunto" required />\n  </div>\n\n  <div class="p-5 m-4 border flex flex-col">\n    <label for="resena">D\xE9janos tu opini\xF3n</label>\n    <textarea name="resena" id="resena" class="border" required></textarea>\n  </div>\n\n  <div class="text-center">\n    <button type="submit" class="bg-blue-800 text-white px-4 py-2 rounded"\n      >Enviar</button\n    >\n  </div>\n</form>\n\n<script type="module">\n  const form = document.getElementById("resena-form");\n\n  form.addEventListener("submit", async (e) => {\n    e.preventDefault();\n\n    const data = {\n      name: form.name.value,\n      email: form.email.value,\n      conjunto:form.conjunto.value,\n      resena: form.resena.value,\n    };\n\n    const res = await fetch("/api/guardarResena", {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(data),\n    });\n\n    const result = await res.json();\n    if (result.success) {\n      alert("\xA1Gracias por tu rese\xF1a!");\n      form.reset();\n    } else {\n      alert("Error al enviar la rese\xF1a.");\n    }\n  });\n<\/script>\n -->', '<section id="rese\xF1as" class="bg-gray-100 py-16 px-6 lg:px-20"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-[#365b6d] mb-4">\n\xBFEres copropietario o miembro del consejo?\n</h2> <p class="text-gray-700 text-lg mb-10">\nCu\xE9ntanos tu experiencia con GAPHIN. Tu opini\xF3n nos ayuda a mejorar y\n      construir comunidades m\xE1s organizadas y felices.\n</p> <form id="resena-form" class="bg-white shadow-lg rounded-lg p-8 space-y-6 text-left"> <div> <label for="name" class="block text-sm font-medium text-gray-700">Nombre completo</label> <input type="text" id="name" name="name" required minlength="10" class="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-[#d4a413] focus:border-[#d4a413]"> </div> <div> <label for="correo" class="block text-sm font-medium text-gray-700">Correo electr\xF3nico</label> <input type="email" id="email" name="email" required class="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-[#d4a413] focus:border-[#d4a413]"> </div> <div> <label for="conjunto" class="block text-sm font-medium text-gray-700">Conjunto residencial</label> <input type="text" id="conjunto" name="conjunto" required class="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-[#d4a413] focus:border-[#d4a413]"> </div> <div> <label for="mensaje" class="block text-sm font-medium text-gray-700">Tu rese\xF1a</label> <textarea id="resena" name="resena" rows="5" required class="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-[#d4a413] focus:border-[#d4a413] resize-none\n"></textarea> </div> <div class="text-center pt-4"> <button type="submit" class="bg-[#d4a413] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#efc442] transition duration-300 cursor-pointer">\nEnviar rese\xF1a\n</button> </div> </form> </div> </section> <script type="module">\n    const form = document.getElementById("resena-form");\n\n  form.addEventListener("submit", async (e) => {\n    e.preventDefault();\n\n    const data = {\n      name: form.name.value,\n      email: form.email.value,\n      conjunto:form.conjunto.value,\n      resena: form.resena.value,\n    };\n\n    const res = await fetch("/api/guardarResena", {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(data),\n    });\n\n    const result = await res.json();\n    if (result.success) {\n      alert("\xA1Gracias por tu rese\xF1a!");\n      form.reset();\n    } else {\n      alert("Error al enviar la rese\xF1a.");\n    }\n  });\n<\/script>'])), maybeRenderHead());
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/components/FormularioResenas.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gaphin" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=""> ${renderComponent($$result2, "HeroContent", $$HeroContent, {})} ${renderComponent($$result2, "InfoEmpresa", $$InfoEmpresa, {})} ${renderComponent($$result2, "ServicioPrincipal", $$ServicioPrincipal, {})} <section id="reseñas" class="bg-gray-100 py-16"> ${renderComponent($$result2, "FormularioResenas", $$FormularioResenas, {})} </section> </div> ` })}`;
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/pages/index.astro", void 0);

const $$file = "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
