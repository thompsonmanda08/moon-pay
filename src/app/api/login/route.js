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
          // "API-Key": process.env.DATA_API_KEY,
        },
      }
    );

    if (res.ok || res.status == 200) {
      const data = await res.json();

      // SET SOME COOKIES
      console.log("ok");
      return Response.json({ data });
    }

    return Response.json({ status: "failed", data: res.data });
  } catch (error) {
    console.log("Error on login");
  }

  return Response.json({ status: "Something went wrong!" });
}

// import { serialize } from "cookie";
// import { COOKIE_NAME, MAX_AGE, API_URL } from "../../../../lib/constants";
// const USER_ROLE = process.env.NEXT_PUBLIC_USER_ROLE;

// export async function POST(request, res) {
//   try {
//     const body = await request.json();
//     const { email, password } = body;
//     // Attempt Auth on API backend
//     const response = await fetch(`${API_URL}/api/v1/auth/authenticate`, {
//       body: JSON.stringify({
//         email,
//         password,
//         role: `${USER_ROLE}`,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//     });

//     if (response.ok) {
//       const { data } = await response.json();
//       // When Token is returned. Add it to cookie. Cookie will be saved to browser
//       const serialized = serialize(COOKIE_NAME, data, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         sameSite: "strict",
//         maxAge: MAX_AGE,
//         path: "/",
//       });

//       const message = {
//         message: "Authenticated",
//         data,
//       };

//       return new Response(JSON.stringify(message), {
//         status: 200,
//         headers: { "Set-Cookie": serialized },
//       });
//     } else {
//       const { message } = await response.json();
//       throw new Error(message);
//     }
//   } catch (error) {
//     console.log(error);
//     return new Response(JSON.stringify({ message: error.message }), {
//       status: 500,
//     });
//   }
// }
