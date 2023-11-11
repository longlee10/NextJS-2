import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import PlayerSchema from "./schema";

export async function GET(request: NextRequest) {
  const players = await prisma.player.findMany();
  return NextResponse.json(players);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validate = PlayerSchema.safeParse(body);
  if (!validate.success)
    return NextResponse.json({ error: validate.error.errors }, { status: 400 });

  const player = await prisma.player.findUnique({ where: { name: body.name } });
  if (player)
    return NextResponse.json(
      { error: "Player already exists" },
      { status: 400 }
    );

  const newPlayer = await prisma.player.create({
    data: { name: body.name, number: body.number },
  });

  return NextResponse.json(newPlayer, { status: 201 });
}

export async function DELETE(req: NextRequest) {}
