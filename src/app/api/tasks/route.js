import { NextResponse } from "next/server";

import { prisma } from "@/libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();
  console.log(tasks);
  // return NextResponse.json("GET /tasks");
  return NextResponse.json(tasks);
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const newTask = await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
    },
  });
  console.log(newTask);
  return NextResponse.json({ message: "POST /tasks" });
  // return NextResponse.json(newTask);
}

export function PUT() {
  return NextResponse.json({ message: "PUT /tasks" });
}

export function DELETE() {
  return NextResponse.json({ message: "DELETE /tasks" });
}
