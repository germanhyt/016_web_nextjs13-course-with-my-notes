import { NextResponse } from "next/server";

console.log("TOKEN", process.env.TOKEN);

export async function GET() {
  //   res.send("GET /users");
  // return new Response("GET /users");

  const res = await fetch(`${process.env.PATH_PLACEHOLDER}/users`);
  const data = await res.json();

  // Before: Extract params, query database, comunicate with other se rvices, etc.
  //   return NextResponse.json({ message: "GET /users" });
  return NextResponse.json(data);
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);

  return NextResponse.json({ message: "POST /users" });
}

export function UPDATE() {
  return NextResponse.json({ message: "UPDATE /users" });
}
