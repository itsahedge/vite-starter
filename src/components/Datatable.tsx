import { DataTable } from "mantine-datatable";

/*
 *
 * Empty State: https://icflorescu.github.io/mantine-datatable/examples/empty-state
 * */

const data = [
  { id: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { id: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { id: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { id: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { id: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

export const CustomDataTable = ({ fetching }: { fetching: boolean }) => {
  return (
    <DataTable
      fetching={fetching}
      shadow="sm"
      striped
      highlightOnHover
      horizontalSpacing="xs"
      verticalSpacing="xs"
      fontSize="sm"
      verticalAlignment="center"
      columns={[
        { accessor: "id", width: 150 },
        { accessor: "mass" },
        { accessor: "symbol" },
        { accessor: "name" },
      ]}
      records={data}
    />
  );
};
