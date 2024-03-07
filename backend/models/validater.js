const z = require("zod");

const validateSchema = z.object({
  name: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be at least of 3 characters" })
    .max(25, { message: "name must not be more then 25 characters" }),
  lName: z.string({ required_error: "last name optional" }),
  age: z.string({ required_error: "age is required" }).trim(),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .min(5, { message: "email must be at least of 5 charachers" })
    .max(25, { message: "email must not be more than 25 characters" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(8, { message: "password must be at least 8 characters" })
    .max(25, { message: "password must not be more then 25 characters" }),
});

module.exports = validateSchema;
