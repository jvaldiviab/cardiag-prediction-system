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

export default function ItemPatient({ item }) {

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

          {item.nombres}

        </TableCell>
        <TableCell>
          {item.edad}
        </TableCell>
        <TableCell>
          {item.sexo}
        </TableCell>
        <TableCell>
          {item.peso}
        </TableCell>
        <TableCell>
          {item.altura}
        </TableCell>
        <TableCell>
          {item.email}
        </TableCell>
        <TableCell >
          {item.telefono}
        </TableCell>
        <TableCell>
          <Button
            onClick={
              handleOpen
            }
            color="success"
            variant="contained"
          >
            Ver ficha
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      TDP
                    </TableCell>
                    <TableCell>
                      PA
                    </TableCell>
                    <TableCell>
                      CS
                    </TableCell>

                    <TableCell>
                      AS
                    </TableCell>
                    <TableCell>
                      REC
                    </TableCell>
                    <TableCell>
                      FCM
                    </TableCell>
                    <TableCell>
                      AI
                    </TableCell>

                    <TableCell>
                      ST
                    </TableCell>

                    <TableCell>
                      PST
                    </TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    hover
                    key={item.id}
                    selected={false}
                  >
                    <TableCell>

                      {item.tdp}

                    </TableCell>
                    <TableCell>
                      {item.pa}
                    </TableCell>
                    <TableCell>
                      {item.cs}
                    </TableCell>
                    <TableCell>
                      {item.as}
                    </TableCell>
                    <TableCell>
                      {item.rec}
                    </TableCell>
                    <TableCell>
                      {item.fcm}
                    </TableCell>
                    <TableCell >
                      {item.ai}
                    </TableCell>

                    <TableCell >
                      {item.st}
                    </TableCell>
                    <TableCell >
                      {item.pst}
                    </TableCell>

                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Modal>
        </TableCell>

      </TableRow>
    </>

  )
}