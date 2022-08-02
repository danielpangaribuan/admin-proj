import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { getDetailMovie } from "../../redux/action/movie-action";

import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data } = useSelector( state => {
        return {
            data: state.movie.detail
        }
    })

    useEffect( () => {
        dispatch(getDetailMovie(id));
    }, []);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '0 10px',
        boxShadow: 'unset'
    }));

    const renderGenre = () => {
        if (data.genres) {
            return data.genres.map((el) => {
                return el.name
            }).join(', ');
        }
    }

    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="content">
                    <Box
                        sx={{ flexGrow: 1 }}
                        >
                        <h2 style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
                            Detail 
                            <KeyboardDoubleArrowRightIcon /> 
                            { data.title }
                        </h2>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                {/* { renderForm() } */}
                                <Item>
                                    <TextField
                                        disabled
                                        label='ID'
                                        defaultValue={data.id}
                                        variant="filled"
                                        style={{ width: "100%", marginBottom: 20 }}
                                    />
                                </Item>
                                <Item>
                                    <TextField
                                        disabled
                                        label='TAGLINE'
                                        defaultValue={data.tagline}
                                        variant="filled"
                                        style={{ width: "100%", marginBottom: 20 }}
                                    />
                                </Item>
                                <Item>
                                    <TextField
                                        disabled
                                        label='STATUS'
                                        defaultValue={data.status}
                                        variant="filled"
                                        style={{ width: "100%", marginBottom: 20 }}
                                    />
                                </Item>
                                <Item>
                                    <TextField
                                        disabled
                                        label='POPULARITY'
                                        defaultValue={data.popularity}
                                        variant="filled"
                                        style={{ width: "100%", marginBottom: 20 }}
                                    />
                                </Item>
                                <Item>
                                    <TextField
                                        disabled
                                        label='HOMEPAGE'
                                        defaultValue={data.homepage}
                                        variant="filled"
                                        style={{ width: "100%", marginBottom: 20 }}
                                    />
                                </Item>
                                <Item>
                                    <TextField
                                        disabled
                                        label='GENRE'
                                        defaultValue={renderGenre()}
                                        variant="filled"
                                        style={{ width: "100%", marginBottom: 20 }}
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <TextField
                                        disabled
                                        label="TITLE"
                                        defaultValue={data.title}
                                        variant="filled"
                                        style={{ width: "100%", marginBottom: 20 }}
                                    />
                                </Item>
                                <Item>
                                    <TextField
                                        disabled
                                        label="OVERVIEW"
                                        defaultValue={data.overview}
                                        variant="filled"
                                        multiline
                                        style={{ width: "100%", marginBottom: 20 }}
                                    />
                                </Item>
                                <Item>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <h4>Backdrop</h4>
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 233,
                                                    width: 350,
                                                    maxHeight: { xs: 233, md: 167 },
                                                    maxWidth: { xs: 350, md: 250 }
                                                }}
                                                src={"https://image.tmdb.org/t/p/original" + data.backdrop_path }
                                                alt="Image"
                                            />

                                        </Grid>
                                        <Grid item xs={6}>
                                            <h4>Poster</h4>
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 233,
                                                    width: 350,
                                                    maxHeight: { xs: 233, md: 167 },
                                                    maxWidth: { xs: 350, md: 250 }
                                                }}
                                                src={"https://image.tmdb.org/t/p/original" + data.poster_path }
                                                alt="Poster"
                                            />
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>

                </div>
            </div>
        </div>
    )
}

export default MovieDetail;