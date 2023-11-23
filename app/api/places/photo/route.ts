import { type NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const reference = request.nextUrl.searchParams.get("reference");

  if (!reference) {
    return NextResponse.json({ error: "Missing reference" }, { status: 400 });
  }

  const BASE_URL = new URL(
    "maps/api/place/photo",
    "https://maps.googleapis.com"
  );

  const URL_PARAMS = new URLSearchParams(
    `maxwidth=400&photo_reference=${reference}&key=${process.env.PLACES_API_KEY}`
  );

  BASE_URL.search = URL_PARAMS.toString();
  try {
    const res = await fetch(BASE_URL);
    if (res.status !== 200) throw new Error("Something went wrong");

    const image = await res.blob();
    const headers = new Headers();
    headers.set("Content-Type", "image/*");
    return new NextResponse(image, { status: 200, headers });
  } catch (error: unknown) {
    return NextResponse.json("Something went wrong", { status: 500 });
  }
}
