import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../utils/firebaseAdmin";

const Listado = () => {
  const [resenas, setResenas] = useState([]);

  useEffect(() => {
    const obtenerResenas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "resenas"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log("dara", data)
        setResenas(data);
      } catch (error) {
        console.error("Error al obtener reseñas:", error);
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

        {/* Lista */}
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
              {/* <p className="text-sm text-right text-red-400 mt-6">
                {r.fecha?.toDate().toLocaleDateString("es-CO", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric"
                })}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listado;
