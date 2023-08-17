import React from "react";
import * as yup from "yup";

const ChangePasswordValidationSchema = yup.object().shape({
  oldPassword: yup.string(),
  newPassword: yup.string().when("oldPassword", {
    is: (val) => val && val.length > 0,
    then: yup.string().min(6, "Password must be at least 6 characters"),
  }),
  confirmPassword: yup.string().when("newPassword", {
    is: (val) => val && val.length > 0,
    then: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Passwords do not match"),
  }),
});

export default ChangePasswordValidationSchema;
