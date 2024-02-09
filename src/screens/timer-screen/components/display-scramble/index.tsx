import { useAppSelector } from "@/hooks/redux";
import { Text, Container } from "@chakra-ui/react";

const DisplayScramble = () => {
  const { loading, current } = useAppSelector(({ scramble }) => scramble);

  return (
    <Container>
      {loading ? (
        <Text variant="body1">Loading ...</Text>
      ) : (
        <Text fontSize="x-large">{current}</Text>
      )}
    </Container>
  );
};

export { DisplayScramble };
