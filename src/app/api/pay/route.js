import { serialize } from "cookie";
export async function POST(req, res) {
  const body = await req.json();

  try {
    const res = await fetch(
      "URL",

      {
        method: "POST",
        body: JSON.stringify({
          // REQUIRED FIELDS
        }),
        headers: {
          "Content-Type": "application/json",
          // "API-Key": process.env.DATA_API_KEY,
        },
      }
    );

    if (res.ok || res.status == 200) {
      const { data } = await res.json();

      return response;
    }

    return Response.json({ status: "failed", data: res.data });
  } catch (error) {
    console.log("Error on login");
  }

  return Response.json({ status: "Something went wrong!" });
}
