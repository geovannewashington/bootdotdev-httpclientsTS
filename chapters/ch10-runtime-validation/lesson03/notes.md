# Schemas and Type Inference

Zod schemas can both validate runtime data and generate TypeScript types, giving you a single source
of truth for your data structures.

## Parsing Schemas:

Use your schema's parse() method to validate data. It returns the validated data or throws a ZodError:

Example:

```typescript
import { z } from "zod";

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
});

try {
  const user = UserSchema.parse(unknownData);
  // user is now typed and validated
  console.log(user.name); // TypeScript knows this is a string
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("Validation failed:", error.errors);
  }
}
```

## z.infer

Zod can automatically generate TypeScript types from your schemas using z.infer:

Example:

```typescript
type User = z.infer<typeof UserSchema>;
// User is: { id: number; name: string }
```
