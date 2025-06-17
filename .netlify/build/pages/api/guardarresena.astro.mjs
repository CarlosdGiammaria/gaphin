import { d as db } from '../../chunks/firebaseAdmin_oot6nnko.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    const data = await request.json();

    // Validación de campos
    if (!data.name || !data.email || !data.resena) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos' }),
        { status: 400 }
      );
    }

    // Guardar en Firestore
    await db.collection('reseñas-clientes').add({
      name: data.name,
      email: data.email,
      conjunto:data.conjunto,
      resena: data.resena,
      createdAt: new Date()
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (err) {
    console.error('Error en POST /api/guardarResena:', err);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500 }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
