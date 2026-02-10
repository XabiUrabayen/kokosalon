export async function onRequestPost(context) {
  const cookie = context.request.headers.get("Cookie") || "";

  if (!cookie.includes("session=ok")) {
    return new Response("No autorizado", { status: 401 });
  }

  const url = new URL(context.request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return new Response("ID no proporcionado", { status: 400 });
  }

  const db = context.env.DB;

  await db.prepare("DELETE FROM citas WHERE id = ?").bind(id).run();

  return new Response("Cita eliminada");
}

