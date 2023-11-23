import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const placeId = request.nextUrl.searchParams.get("place");

  if (!placeId) {
    return NextResponse.json({ error: "Missing place ID" }, { status: 400 });
  }

  const BASE_URL = new URL("maps/embed/v1/place", "https://www.google.com");

  const URL_PARAMS = new URLSearchParams(
    `key=${process.env.PLACES_API_KEY}
    &q=${placeId}`
  );

  BASE_URL.search = URL_PARAMS.toString();
  try {
    const res = await fetch(BASE_URL);
    if (res.status !== 200) throw new Error("Something went wrong");

    const map = await res.blob();
    const headers = new Headers();
    headers.set("Content-Type", "text/html");
    return new NextResponse(map, { status: 200, headers });
  } catch (error: unknown) {
    return NextResponse.json("Something went wrong", { status: 500 });
  }
}
