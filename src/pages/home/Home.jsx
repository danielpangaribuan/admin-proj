import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

//  TABLE
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "./home.css";
import { getListGenre } from "../../redux/action/genre-action";

const Home = () => {
    const { genreList } = useSelector( state => {
        return {
            genreList: state.genre.data
        }
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListGenre());
    }, []);

    const renderGenre = () => {
        if ( genreList ) {
            return genreList.map((item, idx) => {
                return (
                    <StyledTableRow key={item.id} >
                        <StyledTableCell component="th" align='center' scope="row">
                            {idx}
                        </StyledTableCell>
                        <StyledTableCell align="left">{item.name}</StyledTableCell>
                    </StyledTableRow>
                )
            })
        }
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
    }));
      
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
    }));

    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="content">
                    <div className="genre-wrapper">
                        <TableContainer component={Paper} sx={{ width: 400 }}>
                            <div className="movie-pagination-wrapper" style={{ padding: '0 10px', margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                                <h2 style={{ margin: 0 }}>Genre</h2>
                            </div>
                            <Table sx={{ width: 400 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell align='center'>No</StyledTableCell>
                                    <StyledTableCell align="left">Category Name</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    { renderGenre() }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;