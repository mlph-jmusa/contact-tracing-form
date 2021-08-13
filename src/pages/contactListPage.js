import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';

export default function ContactListPage() {
    const location = useLocation();
    const { data } = location.state || { data: [] } ;
    const history = useHistory();

    var list = [...Object.values(data)];

    useEffect(() => {
        window.history.replaceState({data: []}, '');
    });

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Contact number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((obj, i) => (
                            <TableRow key={i}>
                                <TableCell align="center">{obj.name}</TableCell>
                                <TableCell align="center">{obj.address}</TableCell>
                                <TableCell align="center">{obj.contact}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button onClick={this.state.h}>Back</Button>
        </Container>
    );
}