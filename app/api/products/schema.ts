import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(1),
  price: z
    .number() // can use min / max here also
    .min(1)
    .max(1000),
});

export default productSchema;
