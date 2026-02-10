export async function onRequest(context) {
  return new Response(null, {
    status: 302,
    headers: {
      "Set-Cookie": "session=; Path=/; Max-Age=0; HttpOnly; SameSite=Strict",
      "Location": "/html/login.html"
    }
  });
}
