import { Text, Paper } from "@mantine/core";

export const PaperCustom = () => {
  return (
    <Paper shadow="xl" p="md">
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that
        require background with shadow
      </Text>
    </Paper>
  );
};
