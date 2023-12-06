import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");
  if (!query) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }
  const BASE_URL = new URL(
    "maps/api/place/textsearch/json",
    "https://maps.googleapis.com"
  );

  const URL_PARAMS = new URLSearchParams(
    `?query=${query}
    &key=${process.env.PLACES_API_KEY}`
  );

  BASE_URL.search = URL_PARAMS.toString();

  try {
    const res = await fetch(BASE_URL);
    if (res.status !== 200) throw new Error("Something went wrong");

    const { results } = await res.json();
    return NextResponse.json(results, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
