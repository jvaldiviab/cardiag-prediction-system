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
import ItemDoctor from './ItemDoctor'

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

export default function Doctors({ sc }) {

  const handleSubmit = () => {


    sc(5)

  }

  const { documents, error } = useCollection('doctors')

  const customers = documents ? documents.filter(doc => doc.rol === "doctor") : null

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
            <Grid item mb={2}>
              <Card>
                <CardContent mb={2}>

                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
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
                          placeholder="Search doctor"
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <Box>
                        <Button
                          onClick={handleSubmit}
                          color="success"
                          variant="outlined"
                        >
                          + AGREGAR DOCTOR
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>

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
                          Nombre del contacto
                        </TableCell>
                        <TableCell>
                          Email
                        </TableCell>
                        <TableCell>
                          Numero de contacto
                        </TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>


                      {customers && customers.map((customer) => (
                        <ItemDoctor item={customer} />
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