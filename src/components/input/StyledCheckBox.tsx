import {
  Stack,
  FormLabel,
  Input,
  FormHelperText,
  Checkbox,
} from "@chakra-ui/react";
import { InputDataType } from "components/forms/listform";
import React from "react";

interface StyledCheckBoxProps {
  value: boolean;
  setValue: (value: InputDataType) => void;
  label?: string;
  helperText?: string;
}

export default function StyledCheckBox({
  value,
  setValue,
  label,
  helperText,
}: StyledCheckBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  };
  return (
    <Stack spacing={1}>
      {label ? (
        <FormLabel paddingBottom={0} fontSize="sm">
          {label.toUpperCase()}
        </FormLabel>
      ) : null}
      <Checkbox isChecked={value} onChange={handleChange} />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </Stack>
  );
}
