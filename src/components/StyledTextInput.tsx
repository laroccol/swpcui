import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface StyledInputProps {
  label: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function StyledInput({
  label,
  value,
  handleChange,
}: StyledInputProps) {
  return (
    <Box display="flex" alignItems="center" gap={4}>
      <Text
        as="b"
        fontSize="0.9rem"
        flex="12%"
        textAlign="right"
        overflowWrap="anywhere"
      >
        {label}:
      </Text>
      <InputGroup flex="88%">
        <Input value={value} onChange={handleChange} />
      </InputGroup>
    </Box>
  );
}
