import { useEffect, useState } from "react";
import Card from "components/Card";
import {
  Box,
  FormControl,
  Stack,
  Text,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import StyledTextInput from "components/input/StyledTextInput";
import StyledCheckBox from "components/input/StyledCheckBox";

export type InputDataType = string | number | boolean;

export enum InputType {
  STRING,
  NUMBER,
  BOOLEAN,
}

interface InputInfo {
  [key: string]: InputType;
}

interface FormData {
  [x: string]: InputDataType;
}

interface ListFormProps {
  formLayout: InputInfo;
  data?: FormData[];
}

export default function ListForm({ formLayout, data }: ListFormProps) {
  const [formData, setFormData] = useState<FormData>({ ...formLayout });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <Box display="flex" alignItems="flex-start" gap={8}>
      <Card
        textAlign="center"
        flex="50%"
        alignContent="start"
        maxHeight="70vh"
        overflowY="scroll"
      >
        <FormControl>
          <Stack spacing={4}>
            {Object.entries(formData).map(([key, _], index) => {
              const SetValue = (value: InputDataType) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [key]: value,
                }));
              };
              switch (formLayout[key]) {
                case InputType.STRING:
                  return (
                    <StyledTextInput
                      value={formData[key] as string}
                      setValue={SetValue}
                      label={key}
                    />
                  );
                case InputType.NUMBER:
                  break;
                // return (
                //   <StyledInput
                //     key={`key_${key}`}
                //     label={key.toUpperCase()}
                //     value={"formData[keyString]" as string}
                //     handleChange={handleChange}
                //   />
                // );
                case InputType.BOOLEAN:
                  return (
                    <StyledCheckBox
                      value={formData[key] as boolean}
                      setValue={SetValue}
                      label={key}
                    />
                  );
                default:
                  break;
              }
              return (
                <>
                  <p key={`key_${key}`}>INVALID</p>
                </>
              );
            })}
          </Stack>
        </FormControl>
      </Card>
      <Card flex="50%" maxHeight="70vh" overflowY="scroll">
        <TableContainer boxShadow="md">
          <Table variant="striped" colorScheme="gray">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array.from(Array(50)).map(() => (
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
