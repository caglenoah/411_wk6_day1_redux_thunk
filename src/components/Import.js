import React from 'react';

import {
    Container,
    Button, 
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Import = (props) => {
    // fill out this component

    return (
        <Container>
            <Button onClick={props.fetchMakes} variant='contained' color='primary'>import</Button>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>MAKE</TableCell>
            <TableCell>ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((row, index) => (
            <TableRow key={row.MakeName}>
              <TableCell >{row.MakeId}</TableCell>
              <TableCell >{row.MakeName}</TableCell>
              <TableCell >
              <MoreVertIcon/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </Container>

    )
}

export default Import