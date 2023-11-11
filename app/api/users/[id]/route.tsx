import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

// FETCHING DATA
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json(user);
}

// UPDATING BY REPLACING OBJECT
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // validate request -> invalid ? 400 : fetch data with the given id
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // if (!body.name)
  //   return NextResponse.json({ error: "Name is required" }, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // data not existing ? 404 : update && return updated data

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(updatedUser);
}

// DELETE DATA
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // fetch user from database -> not found ? 404 : delete && 200
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.user.delete({ where: { id: user.id } });

  return NextResponse.json({});
}
