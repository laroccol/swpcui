import { Box } from "@chakra-ui/react";
import ListForm, { InputType } from "components/forms/listform";

export default function Upload() {
  return (
    <ListForm
      formLayout={{
        id: InputType.STRING,
        name: InputType.BOOLEAN,
        "address 1": InputType.STRING,
        "address 2": InputType.STRING,
        "address 3": InputType.STRING,
        "address 4": InputType.STRING,
        "address 5": InputType.STRING,
        "address 6": InputType.STRING,
      }}
    />
  );
}
