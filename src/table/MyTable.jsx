import React from 'react';
import { Table ,TableContainer} from '@mui/material';
const MyTable = ({Row, Col}) => {
    return (
        <>
        <TableContainer>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                {Col}
                {Row}
            </Table>
        </TableContainer>
        </>
    )
};

export default MyTable;
