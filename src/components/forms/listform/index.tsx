import { useEffect, useState } from "react";
import Card from "components/Card";
import StyledInput from "components/StyledTextInput";
import {
  FormControl,
  Heading,
  Stack,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Box,
} from "@chakra-ui/react";

type InputDataType = string | number | boolean;

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
  formLayout: InputInfo[];
  data?: FormData[];
}

export default function ListForm({ formLayout, data }: ListFormProps) {
  const [formData, setFormData] = useState<FormData>({});

  const InputComponent = ({ key, value }: FormData): JSX.Element => {
    const keyString = key as string;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [keyString]: event.target.value,
      }));
    };
    switch (value) {
      case InputType.STRING:
        return (
          <StyledInput
            label={keyString.toUpperCase()}
            value={"formData[keyString]" as string}
            handleChange={handleChange}
          />
        );
      case InputType.NUMBER:
        return (
          <StyledInput
            label={keyString.toUpperCase()}
            value={"formData[keyString]" as string}
            handleChange={handleChange}
          />
        );
      case InputType.BOOLEAN:
        return (
          <StyledInput
            label={keyString.toUpperCase()}
            value={"formData[keyString]" as string}
            handleChange={handleChange}
          />
        );
      default:
        break;
    }
    return <></>;
  };

  useEffect(() => {}, []);

  return (
    <Card textAlign="center" margin="100px auto" width="50vw">
      <Tabs isFitted variant="enclosed" colorScheme="orange">
        <TabList mb="1em">
          <Tab>
            <Text fontSize="3xl">DETAILS</Text>
          </Tab>
          <Tab>
            <Text fontSize="3xl">LIST</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FormControl>
              <Stack spacing={3}>
                {Object.entries(formLayout).map(([key, value], index) => {
                  return (
                    <Box key={`form_item_${index}`}>
                      <InputComponent key={key} value={value} />
                    </Box>
                  );
                })}
              </Stack>
            </FormControl>
          </TabPanel>
          <TabPanel>
            <TableContainer boxShadow="md" height={400} overflowY="scroll">
              <Table variant="striped" colorScheme="gray" height={400}>
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
}
