import { useState, useEffect } from "react";
import { createFeedback } from '../utils/guardarResena' // Ajusta la ruta si es necesario

export const FormResenas = () => {
  const [name, setName] = useState("");
  const [conjunto, setConjunto] = useState("");
  const [message, setMessage] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    console.log('una vez')
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFeedback({ name, conjunto, message });
      setEnviado(true);
      setName("");
      setConjunto("")
      setMessage("");
    } catch (error) {
      console.error("Error al guardar reseña:", error);
    }
  };

  return (
    <section id="reseñas" className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#365b6d] mb-4">
          ¿Eres copropietario o miembro del consejo?
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          Cuéntanos tu experiencia con GAPHIN. Tu opinión nos ayuda a mejorar y
          construir comunidades más organizadas y felices.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 space-y-6 text-left"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Conjunto Residencial
            </label>
            <input
              type="text"
              required
              value={conjunto}
              onChange={(e) => setConjunto(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tu reseña
            </label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-[#d4a413] focus:border-[#d4a413] resize-none"
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#d4a413] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#efc442] transition duration-300 cursor-pointer"
            >
              Enviar reseña
            </button>
          </div>

          {enviado && (
            <p className="text-green-600 text-center">¡Reseña enviada con éxito!</p>
          )}
        </form>
      </div>
    </section>
  );
};
