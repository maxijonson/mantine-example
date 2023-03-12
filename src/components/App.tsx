import { AppShell } from "@mantine/core";
import AppRouter from "../routers/AppRouter";
import AppNavbar from "./AppNavbar";
import AppHeader from "./AppHeader";

export default () => {
    return (
        <AppShell padding="md" navbar={<AppNavbar />} header={<AppHeader />}>
            <AppRouter />
        </AppShell>
    );
};
