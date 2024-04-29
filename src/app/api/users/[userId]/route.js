import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  // console.log(request);
  console.log(params);

  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  console.log(searchParams.get("name"));
  console.log(searchParams.get("lastname"));

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.userId}`
  );
  const data = await res.json();

  // return NextResponse.json({ message: "GET /users" });
  return NextResponse.json(data);
}
