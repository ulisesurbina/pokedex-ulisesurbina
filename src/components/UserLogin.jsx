import React, { useState } from 'react';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

    const [userName, setUserName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        // alert(userName);
        dispatch(changeUser(userName));
        navigate("/pokedex")
    }

    return (
        <form onSubmit={submit} className="LoginInit">
            <h1><b>Hello pokemon trainer!</b></h1>
            <h3>Give me your name to start:</h3>
            <div className='InputLogin'>
                <input
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    class="form-control"
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="button-addon2"
                />
                <button class="btn btn-danger"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </form>
    );
};

export default UserLogin;