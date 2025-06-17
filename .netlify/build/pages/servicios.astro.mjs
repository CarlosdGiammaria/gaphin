import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_FhSrvt_g.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_COrwStji.mjs';
export { renderers } from '../renderers.mjs';

const informationServices = [
  {
    titulo: "Gestión Administrativa",
    texto:
      "Incluye manejo de reuniones, documentación legal, custodia de documentos, registro de propietarios y gestión del presupuesto. También se coordina la ejecución de contratos para mantenimiento, aseo y vigilancia conforme al presupuesto aprobado por el consejo. Se asegura el cumplimiento de normas internas por parte de los residentes.",
    img: "/src/img/gestionadmin.png",
    reverse: false,
  },
  {
    titulo: "Gestión Operativa",
    texto:
      "Supervisión del estado físico de la copropiedad, mantenimiento preventivo y correctivo, programación y ejecución de servicios especializados como plomería, jardinería, limpieza de fachadas y más. Se garantiza la conservación y funcionamiento de motobombas, ascensores, red contra incendios y zonas comunes.",
    img: "/src/img/gestionoper.jpg",
    reverse: true,
  },
  {
    titulo: "Servicios Contables",
    texto:
      "Manejo contable profesional realizado por un Contador Público con experiencia en propiedad horizontal. Incluye facturación de cuotas, elaboración de estados financieros, conciliaciones bancarias y presentación de informes al consejo y revisor fiscal. Toda la información es precisa y oportuna.",
    img: "/src/img/servicios_contables.jpg",
    reverse: false,
  },
  {
    titulo: "Recaudo de Cartera",
    texto:
      "Gestión diaria del recaudo, aplicación de pagos, actualización de cartera y seguimiento de morosos. Se generan reportes con indicadores de recuperación. El proceso incluye notificación, conciliación y, si es necesario, gestión jurídica para cobro por la vía legal.",
    img: "/src/img/recaudocarte.jpg",
    reverse: true,
  },
  {
    titulo: "Asesoría Jurídica",
    texto:
      "Nuestro departamento jurídico especializado asesora en normativas de propiedad horizontal, sanciones, elaboración de manuales de convivencia, reformas al reglamento, derechos de petición, y procesos por cartera vencida. La abogada asignada representa legalmente a la copropiedad cuando es necesario.",
    img: "/src/img/asesoriajuri.jpg",
    reverse: false,
  },
  {
    titulo: "Asambleas y Consejo",
    texto:
      "Convocamos y organizamos asambleas ordinarias y extraordinarias, elaboramos actas, y presentamos informes de gestión detallados. Además, nos reunimos mensualmente con el Consejo de Administración para revisar avances y resolver inquietudes, documentando cada sesión con profesionalismo.",
    img: "/src/img/asamblea.jpg",
    reverse: true,
  },
];

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const info = informationServices;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestros Servicios" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white w-full"> <div class="container mx-auto p-2 pt-6 md:p-6 lg:p-12"> <h1 class="text-4xl text-center uppercase font-extrabold text-[#365b6d] mb-1">
nuestros servicios
</h1> </div> <div class="max-w-7xl mx-auto space-y-24 px-6 lg:px-0 py-16"> <!-- UTILIDAD REUTILIZABLE --> <!-- Cada bloque alterna con md:flex-row o md:flex-row-reverse --> ${info.map((item) => {
    return renderTemplate`<div${addAttribute(`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 group`, "class")}> <div class="md:w-1/2 w-full"> <img${addAttribute(item.img, "src")}${addAttribute(item.titulo, "alt")} class="rounded-xl shadow-md w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"> </div> <div class="md:w-1/2 w-full"> <h3 class="text-3xl font-extrabold text-[#365b6d] mb-4"> ${item.titulo} </h3> <p class="text-gray-700 leading-relaxed text-lg"> ${item.texto} </p> </div> </div>`;
  })} </div> </section> ` })}`;
}, "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/pages/servicios.astro", void 0);

const $$file = "C:/Users/carlo/OneDrive/Escritorio/gaphinSAS/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
