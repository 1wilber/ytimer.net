import { useAppSelector } from "@/hooks/redux";
import { CircularProgress, Container, Typography } from "@mui/material";

const DisplayScramble = () => {
  const { loading, currentScramble } = useAppSelector(
    ({ scramble }) => scramble,
  );

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="body1">{currentScramble}</Typography>
      )}
    </Container>
  );
};

export { DisplayScramble };
