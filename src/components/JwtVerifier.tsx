import { Button, Grid, Stack, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import * as JWT from "jose";
import React from "react";

export default () => {
    const [payload, setPayload] = React.useState<string | null>(null);
    const form = useForm({
        initialValues: {
            token: "",
            secret: "MON SECRET",
        },
        validate: {
            token: (value) => {
                if (value.length <= 0) {
                    return "Token is required";
                }
            },
            secret: (value) => {
                if (value.length <= 0) {
                    return "Secret is required";
                }
            },
        },
    });

    const handleSubmit = form.onSubmit(async (values) => {
        const secret = new TextEncoder().encode(values.secret);

        try {
            // https://github.com/panva/jose/blob/HEAD/docs/classes/jwt_sign.SignJWT.md#class-signjwt
            // WARNING: Will not work if not HTTPS or not localhost
            const { payload } = await JWT.jwtVerify(values.token, secret);
            setPayload(JSON.stringify(payload, null, 2));
        } catch {
            notifications.show({
                color: "red",
                title: "Token verification failed",
                message: "Token has been tampered with or secret is invalid",
            });
        }
    });

    return (
        <Stack>
            <Title order={3}>Verify</Title>
            <form onSubmit={handleSubmit}>
                <Stack>
                    <Grid>
                        <Grid.Col span={8}>
                            <Textarea
                                {...form.getInputProps("token")}
                                autosize
                                minRows={6}
                                label="Token"
                                placeholder="Token"
                                required
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <TextInput
                                {...form.getInputProps("secret")}
                                label="Secret"
                                placeholder="Secret"
                                required
                            />
                        </Grid.Col>
                    </Grid>
                    <Button type="submit" variant="outline" color="blue">
                        Verify
                    </Button>

                    {payload && (
                        <Textarea
                            value={payload}
                            autosize
                            minRows={10}
                            label="Payload"
                            readOnly
                        />
                    )}
                </Stack>
            </form>
        </Stack>
    );
};
