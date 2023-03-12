import {
  ActionIcon,
  Button,
  Container,
  CopyButton,
  Divider,
  Grid,
  Group,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import * as JWT from "jose";
import { RiFileCopy2Fill } from "react-icons/ri";
import React from "react";
import { BsCheck } from "react-icons/bs";
import JwtGenerator from "../components/JwtGenerator";
import JwtVerifier from "../components/JwtVerifier";

const JWT_HEADER = {
  alg: "HS256",
  typ: "JWT",
};

export default () => {
  return (
    <Container>
      <Title>JWT</Title>
      <JwtGenerator />
      <Divider my="xl" />
      <JwtVerifier />
    </Container>
  );
};
