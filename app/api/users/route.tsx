import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  // read the body of the request
  const body = await request.json();

  // Validate data -> invalid ? status 400 : 201 && data
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // if (!body.name)
  //   return NextResponse.json({ error: "Name is required" }, { status: 400 }); // 400: bad request
  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const newUser = await prisma.user.create({
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(
    newUser,
    { status: 201 } //201: object is created
  );
}
