import React from "react";
import makeNotImplemented from "../utils/makeNotImplemented";
import { Post } from "../utils/types";

export interface PostContextValue {
  getPosts: () => Promise<Post[]>;
  getPost: (id: number) => Promise<Post>;
}

const notImplemented = makeNotImplemented("PostContext");
export const PostContext = React.createContext<PostContextValue>({
  getPosts: notImplemented,
  getPost: notImplemented,
});
