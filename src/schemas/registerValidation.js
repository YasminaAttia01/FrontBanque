import React from "react";
import * as yup from "yup";

const RegisterValidationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  streetAddress: yup.string().required("Street address is required"),
  password: yup.string().when("confirmPassword", {
    is: (val) => val && val.length > 0,
    then: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  }),
  confirmPassword: yup.string().when("password", {
    is: (val) => val && val.length > 0,
    then: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Confirm Password is required"),
  }),
  dateOfBirth: yup
    .date()
    .max(new Date(), "Date of birth cannot be in the future")
    .typeError("Date of birth has to be a valid date")
    .required("Date of birth is required"),
});

export default RegisterValidationSchema;
