import * as Yup from "yup";
import yupPassword from "yup-password";

yupPassword(Yup);

export const signUpSchema = Yup.object({
  userName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .minLowercase(1, "Password must contain at least one lowercase letter")
    .minUppercase(1, "Password must contain at least one uppercase letter")
    .minNumbers(1, "Password must contain at least one number")
    .minSymbols(1, "Password must contain at least one special character")
    .required("Password is required"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .minLowercase(1, "Password must contain at least one lowercase letter")
    .minUppercase(1, "Password must contain at least one uppercase letter")
    .minNumbers(1, "Password must contain at least one number")
    .minSymbols(1, "Password must contain at least one special character")
    .required("Password is required"),
});
