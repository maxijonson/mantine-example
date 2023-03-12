import axios from "axios";
import React from "react";
import { Post } from "../../utils/types";
import { PostContext, PostContextValue } from "../PostContext";

interface PostProviderProps {
    children?: React.ReactNode;
}

export default ({ children }: PostProviderProps) => {
    const getPosts = React.useCallback(async () => {
        const response = await axios.get<Post[]>(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return response.data;
    }, []);

    const getPost = React.useCallback(async (id: number) => {
        const response = await axios.get<Post>(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        return response.data;
    }, []);

    const providerValue = React.useMemo<PostContextValue>(
        () => ({
            getPosts,
            getPost,
        }),
        [getPost, getPosts]
    );

    return (
        <PostContext.Provider value={providerValue}>
            {children}
        </PostContext.Provider>
    );
};
