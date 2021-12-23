import {
  Box,
  Button,
  Card,
  CardContent, InputAdornment,
  SvgIcon, TextField,
  Grid,
  Container,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Modal
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useCollection } from '../../../hooks/useCollection';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ItemDoctor({ item }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <TableRow
        hover
        key={item.id}
        selected={false}
      >
        <TableCell>

          {item.displayName}

        </TableCell>
        <TableCell>
          1
        </TableCell>
        <TableCell>
          2
        </TableCell>

      </TableRow>
    </>

  )
}