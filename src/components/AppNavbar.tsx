import {
  Button,
  createStyles,
  Group,
  Navbar,
  Stack,
  Text,
} from "@mantine/core";
import { BsFillFilePostFill, BsHouse } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
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
    textAlign: "center",
  },
}));

export default () => {
  const { classes } = useStyles();
  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow>
        <Stack>
          <Link to="/" className={classes.link}>
            <Group>
              <BsHouse size={30} />
              <Text className={classes.linkLabel}>Home</Text>
            </Group>
          </Link>
          <Link to="/posts" className={classes.link}>
            <Group>
              <BsFillFilePostFill size={30} />
              <Text className={classes.linkLabel}>Posts</Text>
            </Group>
          </Link>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};
