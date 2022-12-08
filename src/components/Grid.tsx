import { Container, Grid } from "@mantine/core";
import MyTable from "./Table";

export const CustomGrid = () => {
  return (
    <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
      {/*Responsive Columns*/}
      <Grid.Col md={6} lg={3}>
        <Container>
          <h2>h2 in container2</h2>
          <MyTable />
        </Container>
      </Grid.Col>
      <Grid.Col md={6} lg={3}>
        <Container>
          <h2>h2 in container2</h2>
          <MyTable />
        </Container>
      </Grid.Col>
    </Grid>
  );
};

export const GridSpan = () => {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
};
