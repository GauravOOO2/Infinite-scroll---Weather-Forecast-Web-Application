import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';


const columns = [
    {
        id: 'name',
        label: 'city name',
        minWidth: 170
    },
    {
        id: 'cou_name_en',
        label: 'Country',
        minWidth: 200
    },
    {
        id: 'geoname_id',
        label: 'Country ID',
        minWidth: 170,
    },
    {
        id: 'population',
        label: 'Population',
        minWidth: 80,
        align: 'right',
    },

];


// const rows = [
//     {name:'India', code: 'IN', population:1324171354},
//     {name:'China',code: 'CN',population: 1403500365},
// ];

export default function TableComponent() {

    // const {cityid} = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const rows = useSelector((store) => store.Countries.countryNames)
    console.log(rows);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    
// const {id} = useParams();

    return (
        <div>

            {/* {
                rows.map((data)=>({
                    cityid : data.geoname_id
                }))
            } */}

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    // otherKey={cityid}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                               
                                                <TableCell key={column.id} align={column.align}>

                                                    <Link to={'/WhetherPage/'+row.geoname_id} 
                                                    >
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    
                                                    </Link>

                                                </TableCell>

                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </div>
    );
}
