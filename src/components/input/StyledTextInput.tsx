import React from "react";
import { Stack, FormLabel, Input, FormHelperText } from "@chakra-ui/react";
import { InputDataType } from "components/forms/listform";

interface StyledTextInputProps {
  value: string;
  setValue: (value: InputDataType) => void;
  label?: string;
  helperText?: string;
}

export default function StyledTextInput({
  value,
  setValue,
  label,
  helperText,
}: StyledTextInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Stack spacing={1}>
      {label ? (
        <FormLabel paddingBottom={0} fontSize="sm">
          {label.toUpperCase()}
        </FormLabel>
      ) : null}
      <Input variant="filled" value={value} onChange={handleChange} />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </Stack>
  );
}
