import React from "react";
import { User } from "../entities/User";
import makeNotImplemented from "../utils/makeNotImplemented";

export interface AuthContextValue {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
}

const notImplemented = makeNotImplemented("AuthContext");
export const AuthContext = React.createContext<AuthContextValue>({
    user: null,
    login: notImplemented,
});
