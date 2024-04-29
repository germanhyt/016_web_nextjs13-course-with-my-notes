import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  console.log("task", task);
  return NextResponse.json(task);
}

// Actualización de- datos que puede ser de forma parcial
export async function PUT(request, { params }) {
  const data = await request.json();
  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  console.log(taskUpdated);
  return NextResponse.json({ message: "PUT /tasks" + params.id });
}

export async function DELETE(request, { params }) {
  try {
    const taskremoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });

    console.log(taskremoved);

    return NextResponse.json({ message: "DELETE /tasks/" + params.id });
  } catch (e) {
    console.log(e);
  }
}
