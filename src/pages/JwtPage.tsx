import { Container, Divider, Title } from "@mantine/core";
import JwtGenerator from "../components/JwtGenerator";
import JwtVerifier from "../components/JwtVerifier";

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
