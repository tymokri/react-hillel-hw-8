import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setPlayerData} from "../../store/slices/battle";

const PlayerInput = ({id, label}) => {
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setPlayerData({
            id: id,
            value: userName
        }));
    };

    return (
        <form
            className="column"
            onSubmit={handleSubmit}
        >
            <label
                className="header"
                htmlFor="userName"
            >
                {label}
            </label>
            <input
                id="userName"
                type="text"
                placeholder="Github username"
                autoComplete="off"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button
                className="button"
                type="submit"
                disabled={!userName}
            >
                Submit
            </button>
        </form>
    );
};

export default PlayerInput;