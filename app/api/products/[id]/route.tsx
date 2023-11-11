import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } } // id here is from route params
) {
  const body = await request.json();
  const validate = productSchema.safeParse(body);
  if (!validate.success)
    return NextResponse.json(validate.error.errors, { status: 404 });

  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product)
    return NextResponse.json({ error: "Product not found." }, { status: 400 });

  const updatedProduct = await prisma.product.update({
    where: { id: product.id },
    data: { name: body.name, price: body.price },
  });

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product)
    return NextResponse.json({ error: "Product not found." }, { status: 400 });

  await prisma.product.delete({ where: { id: product.id } });

  return NextResponse.json({});
}
