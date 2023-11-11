import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function PUT(req: NextRequest) {
  const body = await req.json();

  const validate = userSchema.safeParse(body);
  if (!validate.success)
    return NextResponse.json({ error: validate.error.errors }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (!user)
    return NextResponse.json({ error: "Data not found" }, { status: 404 });

  const password = await bcrypt.hash(body.password, 10);

  await prisma.user.update({
    where: { email: body.email },
    data: { email: body.email, password: password },
  });

  return NextResponse.json({ email: user.email });
}
