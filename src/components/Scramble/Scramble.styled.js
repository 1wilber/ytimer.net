import { styled } from '@mui/material/styles';
import { Container } from "@mui/material";

const FilledContainer = styled(Container)(({ theme }) => ({
  display: "block",
  padding: "1.5rem",
  marginTop: ".7rem",
  borderRadius: (theme.shape.borderRadius * 3),
  textAlign: "center",
}))

export {
  FilledContainer,
}
