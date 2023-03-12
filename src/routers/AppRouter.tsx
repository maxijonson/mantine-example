import { Loader } from "@mantine/core";
import React from "react";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const PostsPage = React.lazy(() => import("../pages/PostsPage"));
const PostPage = React.lazy(() => import("../pages/PostPage"));
const JwtPage = React.lazy(() => import("../pages/JwtPage"));

export default () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/posts/:id" element={<PostPage />} />
                <Route path="/jwt" element={<JwtPage />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
};
