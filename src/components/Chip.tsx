import { Chip } from "@mantine/core";

export const ChipCustom = ({ text }: { text: string }) => {
  return (
    <Chip defaultChecked color="indigo" variant="filled" size="xs">
      {text}
    </Chip>
  );
};
