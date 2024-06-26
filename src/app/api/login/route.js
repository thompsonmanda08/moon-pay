import { serialize } from "cookie";
export async function POST(req, res) {
  const body = await req.json();
  const { email, password } = body;

  console.log(body);

  // Try to log the user in
  try {
    const res = await fetch(
      "http://localhost:3001/login",

      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok || res.status == 200) {
      const { data } = await res.json();

      const response = Response.json({ data, status: 200, success: true });
      // SET SOME COOKIES AND JWT TOKENS

      return response;
    }

    return Response.json({ status: "failed", data: res.data });
  } catch (error) {
    console.log("Error on login");
  }

  return Response.json({ status: "Something went wrong!" });
}
