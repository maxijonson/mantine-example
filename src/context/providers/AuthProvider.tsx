import axios from "axios";
import React from "react";
import { User } from "../../entities/User";
import { AuthContext, AuthContextValue } from "../AuthContext";

interface AuthProviderProps {
    children?: React.ReactNode;
}

/**
 * Pour login dans un autre component:
 *
 * ```tsx
 * import { useAuth } from "../context/AuthContext";
 * import { Stack, TextInput, Text } from "@mantine/core";
 * import { useForm } from "@mantine/form";
 *
 * const Component = () => {
 *   const form = useForm({
 *     initialValues: {
 *       username: "",
 *       password: "",
 *     },
 *   });
 *   const { login, user } = useAuth();
 *
 *   const handleSubmit = form.onSubmit(async (values) => {
 *     await login(values.username, values.password);
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       <Stack>
 *         <TextInput {...form.getInputProps("username")} label="username" />
 *         <TextInput {...form.getInputProps("password")} label="password" />
 *
 *         {user && <Text>Logged in as {user.username}</Text>}
 *       </Stack>
 *     </form>
 *   );
 * };
 * ```
 */

export default ({ children }: AuthProviderProps) => {
    const [user, _setUser] = React.useState<User | null>(null);
    const login = React.useCallback(
        async (username: string, password: string) => {
            const _response = await axios.post<{
                jwtToken: string;
                user: User;
            }>("https://backend.com/login", {
                username,
                password,
            });

            // TODO: Faire quelque chose avec la réponse (console.log(response) si vous ne savez pas quoi faire)
            //   const { jwtToken, user } = response.data;
            //   try {
            //     const parsedUser = userSchema.parse(user);
            //     setUser(parsedUser);
            //   } catch (e) {
            //     console.error(e);
            //   }
        },
        []
    );

    const providerValue = React.useMemo<AuthContextValue>(
        () => ({
            user,
            login,
        }),
        [login, user]
    );

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    );
};
