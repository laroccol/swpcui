import ListForm, { InputType } from "components/forms/listform";

export default function Upload() {
  return (
    <ListForm
      formLayout={[
        { id: InputType.STRING },
        { name: InputType.STRING },
        { "address 1": InputType.STRING },
        { "address 2": InputType.STRING },
      ]}
    />
  );
}
