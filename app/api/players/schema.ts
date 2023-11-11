import { z } from "zod";

const PlayerSchema = z.object({
  name: z.string().min(1),
  number: z.number().min(1).max(99),
});

export default PlayerSchema;
