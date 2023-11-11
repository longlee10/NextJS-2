import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import PlayerSchema from "../schema";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const player = await prisma.player.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!player)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(player);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // validate request
  const body = await request.json();
  const validate = PlayerSchema.safeParse(body);
  if (!validate.success)
    return NextResponse.json({ error: validate.error.errors }, { status: 400 });

  // search for player
  const player = await prisma.player.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!player)
    return NextResponse.json({ error: "No data found" }, { status: 404 });

  // update player
  const updatedPlayer = await prisma.player.update({
    where: { id: player.id },
    data: { name: body.name, number: body.number },
  });

  return NextResponse.json(updatedPlayer, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // search for the player
  const player = await prisma.player.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!player)
    return NextResponse.json({ error: "No data found" }, { status: 404 });

  // delete if found
  await prisma.player.delete({ where: { id: player.id } });
  return NextResponse.json({});
}
