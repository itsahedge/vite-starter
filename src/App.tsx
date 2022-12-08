import {
  MantineProvider,
  AppShell,
  Header,
  Footer,
  Tabs,
  Grid,
  Container,
} from "@mantine/core";
import { IconMessageCircle, IconPhoto, IconSettings } from "@tabler/icons";
import { List } from "@mantine/core";

import { ChipCustom } from "./components/Chip";
import { CustomGrid } from "./components/Grid";
import { CustomDataTable } from "./components/Datatable";
import { CustomButton } from "./components/Button";
import { UseToggle } from "./hooks/useToggle";
import { PaperCustom } from "./components/Paper";

export default function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <AppShell>
        <Header height={40}>
          <Grid>
            <Grid.Col span={2}>
              <ChipCustom text={"Eth Price $1337"} />
            </Grid.Col>
            <Grid.Col span="auto">
              <ChipCustom text={"block #1675890"} />
            </Grid.Col>
          </Grid>
        </Header>

        {/*App Content in the Grid*/}
        <Tabs
          variant="pills"
          radius="xs"
          orientation="vertical"
          defaultValue="overview"
        >
          <Tabs.List>
            <Tabs.Tab value="overview" icon={<IconPhoto size={14} />}>
              Overview
            </Tabs.Tab>
            <Tabs.Tab value="pools" icon={<IconPhoto size={14} />}>
              Pools
            </Tabs.Tab>
            <Tabs.Tab value="tokens" icon={<IconPhoto size={14} />}>
              Tokens
            </Tabs.Tab>
            <Tabs.Tab value="positions" icon={<IconPhoto size={14} />}>
              Positions
            </Tabs.Tab>
            <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>
              Gallery
            </Tabs.Tab>
            <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>
              Messages
            </Tabs.Tab>
            <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" pl="xs">
            Overview content

          </Tabs.Panel>

          <Tabs.Panel value="pools" pl="xs">
            Pools content
            <CustomDataTable fetching={true} />
          </Tabs.Panel>

          <Tabs.Panel value="tokens" pl="xs">
            Tokens content
            <CustomDataTable fetching={false} />
          </Tabs.Panel>

          <Tabs.Panel value="positions" pl="xs">
            Positions content
          </Tabs.Panel>

          <Tabs.Panel value="gallery" pl="xs">
            CustomDataTable tab content
            <CustomDataTable fetching={false} />
          </Tabs.Panel>
          <Tabs.Panel value="messages" pl="xs">
            Messages tab content
          </Tabs.Panel>

          <Tabs.Panel value="settings" pl="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>

        <Footer height={40}>footer stuff....</Footer>
      </AppShell>
    </MantineProvider>
  );
}
