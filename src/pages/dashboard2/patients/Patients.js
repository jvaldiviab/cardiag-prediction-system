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
import ItemPatient from './ItemPatient';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Patients() {

  const { documents, error } = useCollection('patients')

  const customers = documents ? documents.filter(doc => {
    switch ('') {

      default:
        return true
    }
  }) : null



  const [limit, setLimit] = useState(10);

  return (

    <Container maxWidth="100%">

      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={12}
          md={6}
          xs={12}
          mb={2}
        >
          <Box >
            <Grid mb={2}>
              <Card>
                <CardContent mb={2}>
                  <Box sx={{ maxWidth: 500 }}>
                    <TextField
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SvgIcon
                              fontSize="small"
                              color="action"
                            >
                              <SearchIcon />
                            </SvgIcon>
                          </InputAdornment>
                        )
                      }}
                      placeholder="Search customer"
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Card >
              <PerfectScrollbar>
                <Box sx={{ minWidth: 1050 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          Nombres
                        </TableCell>
                        <TableCell>
                          Edad
                        </TableCell>
                        <TableCell>
                          Sexo
                        </TableCell>

                        <TableCell>
                          Peso
                        </TableCell>
                        <TableCell>
                          Altura
                        </TableCell>
                        <TableCell>
                          Email
                        </TableCell>
                        <TableCell>
                          Telefono
                        </TableCell>

                        <TableCell>
                          Ficha Medica
                        </TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>

                      {customers && customers.map((customer) => (
                        <ItemPatient item={customer} />
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </PerfectScrollbar>
            </Card>
          </Box>
        </Grid>

      </Grid>



    </Container>


  );
}