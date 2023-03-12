import { createStyles, Group, Navbar, Stack, Text } from "@mantine/core";
import { BsFillFilePostFill, BsHouse, BsTiktok } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = createStyles(
    (theme, { alignLabel }: { alignLabel: "left" | "center" | "right" }) => ({
        link: {
            textDecoration: "none",
            color: theme.colors.gray[9],
            padding: theme.spacing.md,
            borderRadius: theme.radius.sm,

            ":hover": {
                color: theme.colors.blue[9],
                backgroundColor: theme.colors.blue[0],
            },
        },
        linkLabel: {
            flexGrow: 1,
            textAlign: alignLabel,
        },
    })
);

export default () => {
    const { classes } = useStyles({ alignLabel: "center" });

    return (
        <Navbar width={{ base: 300 }} p="xs">
            <Navbar.Section grow>
                <Stack>
                    <Link to="/" className={classes.link}>
                        <Group>
                            <BsHouse size={24} />
                            <Text className={classes.linkLabel}>Home</Text>
                        </Group>
                    </Link>
                    <Link to="/posts" className={classes.link}>
                        <Group>
                            <BsFillFilePostFill size={24} />
                            <Text className={classes.linkLabel}>Posts</Text>
                        </Group>
                    </Link>
                    <Link to="/jwt" className={classes.link}>
                        <Group>
                            <BsTiktok size={24} />
                            <Text className={classes.linkLabel}>JWT</Text>
                        </Group>
                    </Link>
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
};
