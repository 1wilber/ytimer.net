import { Box, Drawer } from "@mui/material";
import { styled } from '@mui/material/styles';

const HomeDrawer = styled(Drawer)(() => ({
  height: "100vh",
  flexShrink: 0,
  display: "flex",
}))

const CenterFlex = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}))

const HomeContainer = styled(Box)(() => ({
  height: "100%",
  display: "flex"
}))

const Aside = styled('aside')(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.secondary.main,
}))

const Brand = styled('div')(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 5,
}))

const AsideInfo = styled('div')(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(1, 1fr)",
  textAlign: "center",
  gap: "1rem",
}))

const AsideActions = styled('div')(({ theme }) => ({
  padding: "1rem .75rem",
  borderTop: "1px solid",
  borderColor: theme.palette.secondary.light,
}))

export {
  Aside,
  Brand,
  AsideInfo,
  AsideActions,
  HomeContainer,
  HomeDrawer,
  CenterFlex,
}
