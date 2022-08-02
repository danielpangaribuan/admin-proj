import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getListMovie } from "../../redux/action/movie-action";
import { getListGenre } from "../../redux/action/genre-action";

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Movie = () => {
    const [page, setPage] = useState(1);
    const { movieList, genreList } = useSelector( state => {
        return {
            movieList: state.movie.data,
            genreList: state.genre.data
        }
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getListGenre());
        dispatch(getListMovie(page));
        console.log(movieList)
    }, [page]);
    

    const handleChange = ( event, value) => {
        setPage(value);
    };


    const renderMovie = () => {
        if ( movieList.results !== undefined ) {
            return movieList.results.map((item, idx) => {
                return (
                    <StyledTableRow key={`row_${item.id}`} >
                        <StyledTableCell component="th" align='center' scope="row">
                            {idx + 1}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            <a onClick={ () => navigate(`${ item.id }`) } style={{ cursor: 'pointer' }}>
                                {item.title}
                            </a>
                        </StyledTableCell>
                        <StyledTableCell align="left" sx={{ width: 300 }}>{item.overview}</StyledTableCell>
                        <StyledTableCell align="center">
                            {
                                <div style={{ width: 100 }}>
                                    <img src={"https://image.tmdb.org/t/p/original" + item.poster_path} alt="" style={{ width: "100%", height: "100%" }}/>
                                </div>
                            }
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            {
                                <div style={{ width: 100 }}>
                                    <img src={"https://image.tmdb.org/t/p/original" + item.backdrop_path} alt="" style={{ width: "100%", height: "100%" }}/>
                                </div>
                            }
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            { Math.round( item.vote_average * 10 ) / 10 }
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            { item.release_date }
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                {
                                    item.genre_ids.map( (v, i) => {
                                        let idx =  genreList.findIndex( el => el.id === v );
                                        if ( idx !== -1 ) {
                                            return (
                                                <li key={`gl_${i}`} 
                                                    style={{ listStyle: 'none', padding: '4px 8px', background: '#1976D2', marginBottom: 5, borderRadius: 10, width: 'fit-content', fontSize: 12, color: '#FFF' }}>
                                                    { genreList[idx].name }
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </StyledTableCell>
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
                    <div className="movie-wrapper">
                        <TableContainer component={Paper} sx={{ width: "100wh" }}>
                            <div className="movie-pagination-wrapper" style={{ padding: '0 10px', margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                                <h2 style={{ margin: 0 }}>Movie</h2>
                                <Stack spacing={2}>
                                    <Pagination count={movieList.total_pages} key={"pagination-" + page} page={page} onChange={handleChange} color="primary" />
                                </Stack>
                            </div>
                            <Table sx={{ width: "100wh" }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align='center'>No</StyledTableCell>
                                        <StyledTableCell align="left">Title</StyledTableCell>
                                        <StyledTableCell align='left'>Overview</StyledTableCell>
                                        <StyledTableCell align='left'>Poster Image</StyledTableCell>
                                        <StyledTableCell align='left'>Backdrop Image</StyledTableCell>
                                        <StyledTableCell align='right'>Rate</StyledTableCell>
                                        <StyledTableCell align='center'>Release Date</StyledTableCell>
                                        <StyledTableCell align='center'>Genre</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { renderMovie() }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;
