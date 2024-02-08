import { useAppSelector } from "@/hooks/redux";
import { CircularProgress, Container, Typography } from "@mui/material";

const DisplayScramble = () => {
  const { loading, current } = useAppSelector(({ scramble }) => scramble);

  return (
    <Container style={{ textAlign: "center" }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="body1">{current}</Typography>
      )}
    </Container>
  );
};

export { DisplayScramble };
