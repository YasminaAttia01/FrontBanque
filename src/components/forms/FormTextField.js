import { FieldAttributes, useField } from "formik";
import React from "react";
import { ThemeProvider, TextField } from "@material-ui/core";
import { theme } from "../../utils/CustomThemeProvider";
export const FormTextField = ({ placeholder, className, type, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <ThemeProvider theme={theme}>
      <TextField
        className={className}
        type={type}
        variant="outlined"
        required={true}
        placeholder={placeholder}
        {...field}
        helperText={errorText}
        error={!!errorText}
      />
    </ThemeProvider>
  );
};

export const FormDatePicker = ({ placeholder, className, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <ThemeProvider theme={theme}>
      <TextField
        className={className}
        type="date"
        variant="outlined"
        required={true}
        placeholder={placeholder}
        {...field}
        helperText={errorText}
        error={!!errorText}
        label="Date of birth"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </ThemeProvider>
  );
};
