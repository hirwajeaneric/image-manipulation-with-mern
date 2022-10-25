import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const navigate = useNavigate();

    const [fname, setFname] = useState('');
    const [file, setFile] = useState('');

    const updateFname = (e) => {
        const {value} = e.target;
        setFname(value);
    }

    const updateFile = (e) => {
        const {files} = e.target;
        setFile(files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append('photo', file);
        formData.append('fname', fname);

        const config = {
            headers: {
                "Content-Type":"multipart/form-data"
            }
        }

        const URL = 'http://localhost:8008/api/imgapp/register'
        axios.post(URL, formData, config)
        .then(res => {
            if (res.data.message) {
                navigate('/');
            } else {
                console.log(res.data.message);
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="fname">First name: </label>
                    <input type='text' name='fname' id='fname' onChange={updateFname}/>
                </div>
                <div>
                    <label htmlFor="photo">Profile photo: </label>
                    <input type='file' name='photo' id='photo' onChange={updateFile}/>
                </div>
                <input type="submit" value="SAVE"/>
            </form>
        </div>
    )
}

export default Form