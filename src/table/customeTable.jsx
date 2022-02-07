import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import MyTable from './MyTable';


const customeTable = () => {

   

    const columns = [
        { id: "E_ID", name: "E_NAME", age: "E_AGE", }
    ]
    const rows = [
        { e_id: 1, e_name: "Zahid", e_age: 22 },
        { e_id: 2, e_name: "Tarun", e_age: 27 },
        { e_id: 3, e_name: "Kapil", e_age: 27 },
        { e_id: 4, e_name: "Bhati", e_age: 24 },
        { e_id: 5, e_name: "Saurabh", e_age: 23 },
    ]
    const Col = (
        <>
            <TableHead>
                {columns.map((col) => {
                    return (
                        <>
                            <TableRow key={col.id} width='100' >
                                <TableCell> {col.id}</TableCell>
                                <TableCell>{col.name}</TableCell>
                                <TableCell>{col.age}</TableCell>
                            </TableRow>
                        </>
                    )
                })}
            </TableHead>
        </>
    )
    const Row = (
        <>
            <TableBody>
                {rows.map((row) => {
                    return (
                        <>
                            <TableRow key={row.id} >
                                <TableCell>{row.e_id}</TableCell>
                                <TableCell>{row.e_name}</TableCell>
                                <TableCell>{row.e_age}</TableCell>
                            </TableRow>
                        </>
                    )
                })}
            </TableBody>
        </>
    )
    return (
        <>
                    <MyTable Row={Row} Col={Col} />
        </>
    )
};

export default customeTable;
