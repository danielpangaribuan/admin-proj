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
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
    }, [page, dispatch, movieList]);
    

    const handleChange = ( event, value) => {
        setPage(value);
    };


    const renderMovie = () => {
        if ( movieList.results !== undefined ) {
            return movieList.results.map((item, idx) => {
                return (
                    <TableRow key={item.id} >
                        <TableCell component="th" align='center' scope="row">
                            {idx + 1}
                        </TableCell>
                        <TableCell>
                            { Math.round( item.vote_average * 10 ) / 10 }
                        </TableCell>
                        <TableCell align="left">
                            <a onClick={ () => navigate(`${ item.id }`) }>
                                {item.title}
                            </a>
                        </TableCell>
                        <TableCell align="left" sx={{ width: 300 }}>{item.overview}</TableCell>
                        <TableCell align="center">
                            {
                                <div style={{ width: 100 }}>
                                    <img src={"https://image.tmdb.org/t/p/original" + item.poster_path} alt="" style={{ width: "100%", height: "100%" }}/>
                                </div>
                            }
                        </TableCell>
                        <TableCell align="center">
                            {
                                <div style={{ width: 100 }}>
                                    <img src={"https://image.tmdb.org/t/p/original" + item.backdrop_path} alt="" style={{ width: "100%", height: "100%" }}/>
                                </div>
                            }
                        </TableCell>
                        <TableCell align="center">
                            { item.release_date }
                        </TableCell>
                        <TableCell align="center">
                            <ul>
                                {
                                    item.genre_ids.map( (v, i) => {
                                        let idx =  genreList.findIndex( el => el.id === v );
                                        if ( idx !== -1 ) {
                                            return (
                                                <li style={{ listStyle: 'none' }}>{ genreList[idx].name } </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </TableCell>
                    </TableRow>
                )
            })
        }
    }


    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="listMovie">
                    <h2>Movie</h2>

                    <div className="movie-wrapper">
                        <TableContainer component={Paper} sx={{ width: "100wh" }}>

                            <div className="movie-pagination-wrapper">
                                <Stack spacing={2}>
                                    <Pagination count={movieList.total_pages} key={"pagination-" + page} page={page} onChange={handleChange} color="primary" />
                                </Stack>
                            </div>
                            <Table sx={{ width: "100wh" }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align='center'>No</TableCell>
                                    <TableCell align='center'>Rate</TableCell>
                                    <TableCell align="left">Category Name</TableCell>
                                    <TableCell align='left'>Overview</TableCell>
                                    <TableCell align='left'>Poster Image</TableCell>
                                    <TableCell align='left'>Backdrop Image</TableCell>
                                    <TableCell align='center'>Release Date</TableCell>
                                    <TableCell align='center'>Genre</TableCell>
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
