export async function onRequest(context) {
  const cookie = context.request.headers.get("Cookie") || "";

  if (!cookie.includes("session=ok")) {
    return new Response("No autorizado", { status: 401 });
  }

  const db = context.env.DB;

  const result = await db.prepare(`
    SELECT id, nombre, email1, fecha, sexo, mensaje
    FROM citas
    ORDER BY id DESC
  `).all();

  return new Response(JSON.stringify(result.results), {
    headers: { "Content-Type": "application/json" }
  });
}
