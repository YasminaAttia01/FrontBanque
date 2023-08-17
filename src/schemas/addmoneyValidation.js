import React from "react";
import * as yup from "yup";

const AddMoneyValidationSchema = yup.object().shape({
  amount: yup
    .number()
    .required("Amount is required")
    .positive("Amount must be a positive number")
    .integer("Amount must be an integer"),
});

export default AddMoneyValidationSchema;
