export async function onRequestPost(context) {
  const body = await context.request.json();
  const { nombre, email, fecha, sexo, mensaje } = body;

  if (!nombre || !email || !fecha || !sexo || !mensaje || mensaje.length < 10) {
    return new Response("Datos inválidos o incompletos", {
      status: 400,
      headers: { "Content-Type": "text/plain" }
    });
  }

  const db = context.env.DB; // ← AQUÍ EL CAMBIO

  await db.prepare(
    `INSERT INTO citas (nombre, email, fecha, sexo, mensaje)
     VALUES (?, ?, ?, ?, ?)`
  ).bind(nombre, email, fecha, sexo, mensaje).run();

  return new Response("Formulario guardado correctamente. ¡Gracias por contactar!", {
    status: 200,
    headers: { "Content-Type": "text/plain" }
  });
}
