import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

//  TABLE
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
                    <TableRow key={item.id} >
                        <TableCell component="th" align='center' scope="row">
                            {idx}
                        </TableCell>
                        <TableCell align="left">{item.id}</TableCell>
                        <TableCell align="left">{item.name}</TableCell>
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
                <div className="top"></div>
                <div className="listGenre">
                    <h2>Genre</h2>
                    <div className="genre-wrapper">
                        <TableContainer component={Paper} sx={{ width: 400 }}>
                            <Table sx={{ width: 400 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align='center'>No</TableCell>
                                    <TableCell align='left'>ID</TableCell>
                                    <TableCell align="left">Category Name</TableCell>
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