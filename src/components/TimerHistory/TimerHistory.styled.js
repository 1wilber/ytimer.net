import { Paper, Table, TableBody, TableCell, TableHead } from '@mui/material';
import { styled } from '@mui/material/styles';

const TableCellHead = styled(TableCell)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.secondary.light,
  padding: ".50rem .25rem",
}))

const AsideHistory = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none"
  }
}))

export {
  TableCellHead,
  AsideHistory,
}