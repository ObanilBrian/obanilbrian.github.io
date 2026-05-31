import { z } from "zod";
import type * as zType from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).optional(),
});

export type EnvType = zType.infer<typeof envSchema>;

export const Env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
});
