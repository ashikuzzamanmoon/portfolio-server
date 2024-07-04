import { z } from 'zod';

const userSchemaValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
  isDeleted: z.boolean()
});

export const userValidationSchemas={
    userSchemaValidation
}