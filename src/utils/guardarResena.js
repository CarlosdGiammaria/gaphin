import { db, collection, addDoc } from "../utils/firebaseAdmin"; // o donde tengas la config

export const createFeedback = async ({ name, conjunto,message }) => {
  const feedbackRef = collection(db, "resenas");
  await addDoc(feedbackRef, {
    name,
    conjunto,
    message,
    timestamp: new Date(),
  });
};
