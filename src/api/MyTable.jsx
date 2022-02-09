import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    TableHead: {
        backgroundColor: '#83bbe38a',
        textAlign: 'center',
        color: '#FFF',
        "&:hover": {
            backgroundColor: 'rgba(225,225,225,0.2)'
        }
    }
})

const MyTable = ({ row, col }) => {


    const classes = useStyles()
    return (
        <>

            <TableContainer >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
                    <TableHead >
                        <TableRow >
                            {
                                col.map((cols) => <TableCell  style={{backgroundColor:'#f1f1f1'}}>
                                    <Typography align="center" >{cols}</Typography>
                                </TableCell>)
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            row.map((rows, index) => {
                                return (
                                    <TableRow key={index} className={classes.TableHead}>
                                        <TableCell align="center">
                                            <Typography><input type="Checkbox" /></Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography>{rows.id}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography>{rows.title}</Typography>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>

                </Table>
            </TableContainer>
        </>
    )
};

export default MyTable;
