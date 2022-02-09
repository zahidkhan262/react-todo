import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

const CustomeTable = ({ rows, columns }) => {

    const table = useStyles();

    const displayCell = (row, col,index) => {
        
        if (col.content)
            return col.content(row)
        else {
            return   <TableCell key={index}>{row}</TableCell>
        }
    }



    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 450 }} aria-label="simple table" className={table.root}>
                    <TableHead >
                        <TableRow>
                            {columns.map((col, index) => {
                                return (
                                    <TableCell key={index}>
                                        {col.label}
                                    </TableCell>
                                )
                            }
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => {
                            return (
                                <TableRow key={index} >
                                            {
                                                columns.map((col, index) => {
                                                    return displayCell(row, col, index)
                                                })
                                            }
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default CustomeTable;
