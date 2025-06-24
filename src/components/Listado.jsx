import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../utils/firebaseAdmin";

const Listado = () => {
  const [resenas, setResenas] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para el loader

  useEffect(() => {
    const obtenerResenas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "resenas"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setResenas(data);
      } catch (error) {
        console.error("Error al obtener reseñas:", error);
      } finally {
        setLoading(false); // Ocultar loader cuando termina
      }
    };

    obtenerResenas();
  }, []);

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl font-bold text-[#365b6d] text-center mb-4">
          Reseñas de Propietarios y Consejeros
        </h2>

        {/* Botón */}
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-3 text-lg">¿Ya trabajas con nosotros?</p>
          <a
            href="/#reseñas"
            className="inline-block bg-[#d4a413] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-[#c99f0f] transition"
          >
            Dejar mi reseña
          </a>
        </div>

        {/* Loader */}
        {loading ? (
          <p className="text-center text-gray-500 text-lg">Cargando reseñas...</p>
        ) : resenas.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No existen reseñas aún.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {resenas.map((r) => (
              <div
                key={r.id}
                className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#365b6d] mb-1">{r.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Conjunto Residencial: <span className="uppercase">{r.conjunto}</span>
                  </p>
                  <p className="text-gray-800 italic text-base">“{r.message}”</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Listado;
