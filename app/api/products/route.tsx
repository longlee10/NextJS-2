import { NextRequest, NextResponse } from "next/server";
import ProductSchema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  // read the request body:
  const body = await request.json();
  // validate
  const validate = ProductSchema.safeParse(body);
  if (!validate.success)
    return NextResponse.json(validate.error.errors, { status: 400 });

  const newProduct = await prisma.product.create({
    data: { name: body.name, price: body.price },
  });

  return NextResponse.json(newProduct, { status: 201 });
}
