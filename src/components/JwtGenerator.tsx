import {
  ActionIcon,
  Button,
  Container,
  CopyButton,
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

const JWT_HEADER = {
  alg: "HS256",
  typ: "JWT",
};

export default () => {
  const [jwtToken, setJwtToken] = React.useState<string | null>(null);
  const form = useForm({
    initialValues: {
      payload: `{\n\t"userId": "46cf6656-775e-4664-999a-4b346ca76130"\n}`,
      secret: "MON SECRET",
    },
    validate: {
      payload: (value) => {
        try {
          JSON.parse(value);
        } catch (e) {
          return "Invalid JSON";
        }
      },
      secret: (value) => {
        if (value.length <= 0) {
          return "Secret is required";
        }
      },
    },

    transformValues: (values) => ({
      ...values,
      payload: JSON.parse(values.payload),
    }),
  });

  const handleSubmit = form.onSubmit(async (values) => {
    const secret = new TextEncoder().encode(values.secret);

    // https://github.com/panva/jose/blob/HEAD/docs/classes/jwt_sign.SignJWT.md#class-signjwt
    // WARNING: Will not work if not HTTPS or not localhost
    const token = await new JWT.SignJWT(values.payload)
      .setProtectedHeader(JWT_HEADER)
      .sign(secret);

    console.log(token);
    setJwtToken(token);
  });

  return (
    <Container>
      <Title order={3}>Generate</Title>
      <form onSubmit={handleSubmit}>
        <Stack>
          {/* <Group>
            <Textarea
              {...form.getInputProps("payload")}
              style={{ flexGrow: 1 }}
              autosize
              minRows={10}
              required
              withAsterisk
              label="Payload"
            />
            <TextInput
              {...form.getInputProps("secret")}
              style={{ flexGrow: 1 }}
              required
              withAsterisk
              label="Secret"
            />
          </Group> */}
          <Grid>
            <Grid.Col span={8}>
              <Textarea
                {...form.getInputProps("payload")}
                onKeyDown={(e) => {
                  if (e.key == "Tab") {
                    e.preventDefault();
                    var start = e.currentTarget.selectionStart;
                    var end = e.currentTarget.selectionEnd;

                    // set textarea value to: text before caret + tab + text after caret
                    form
                      .getInputProps("payload")
                      .onChange(
                        e.currentTarget.value.substring(0, start) +
                          "\t" +
                          e.currentTarget.value.substring(end)
                      );
                  }
                }}
                style={{ flexGrow: 1 }}
                autosize
                minRows={10}
                required
                withAsterisk
                label="Payload"
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                {...form.getInputProps("secret")}
                style={{ flexGrow: 1 }}
                required
                withAsterisk
                label="Secret"
              />
            </Grid.Col>
          </Grid>

          <Button type="submit">Submit</Button>
          {jwtToken && (
            <Group align="center">
              <Textarea
                minRows={6}
                value={jwtToken}
                style={{ flexGrow: 1 }}
                readOnly
                label="Token"
              />
              <CopyButton value={jwtToken}>
                {({ copied, copy }) =>
                  copied ? (
                    <ActionIcon>
                      <BsCheck />
                    </ActionIcon>
                  ) : (
                    <ActionIcon onClick={copy}>
                      <RiFileCopy2Fill />
                    </ActionIcon>
                  )
                }
              </CopyButton>
            </Group>
          )}
        </Stack>
      </form>
    </Container>
  );
};
