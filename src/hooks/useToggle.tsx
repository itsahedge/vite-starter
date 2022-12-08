import { Button } from "@mantine/core";
import { useToggle } from "@mantine/hooks";

export const UseToggle = () => {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
};
