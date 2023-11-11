import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  password: z.string().min(5),
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validate = userSchema.safeParse(body);
  if (!validate.success)
    return NextResponse.json({ error: validate.error.errors, status: 400 });

  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const password = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: { email: body.email, name: body.name, password: password },
  });

  return NextResponse.json({ email: newUser.email });
}
