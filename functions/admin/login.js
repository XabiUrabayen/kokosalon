export async function onRequestPost(context) {
  const { user, pass } = await context.request.json();

  const ADMIN_USER = "admin";
  const ADMIN_PASS = "1234";

  if (user !== ADMIN_USER || pass !== ADMIN_PASS) {
    return new Response("Credenciales incorrectas", { status: 401 });
  }

  const cookie = `session=ok; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`;

  return new Response("Acceso concedido", {
    status: 200,
    headers: { "Set-Cookie": cookie }
  });
}
