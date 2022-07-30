import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useParams } from 'react-router-dom';

import { getDetailMovie } from "../../redux/action/movie-action";
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
        console.log(data)
    }, [id]);

    const renderForm = () => {
        let form = [];
        for (var item in data) {
            form.push(<TextField
                        disabled
                        id="standard-disabled"
                        label={item.toUpperCase()}
                        defaultValue={data[item]}
                        variant="standard"
                        style={{ width: "100%", marginBottom: 20 }}
                    />)
        }
        return form;
    }

    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <Box
                    component="form"
                    noValidate
                    style={{ padding: 20 }}
                    >
                    <h2>Form Movie Detail { data.title }</h2>
                    <div>
                        { renderForm() }
                    </div>
                    </Box>
            </div>
        </div>
    )
}

export default MovieDetail;