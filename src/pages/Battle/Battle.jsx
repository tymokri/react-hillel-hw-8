import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import PlayerInput from "../../components/PlayerInput";
import PlayerPreview from '../../components/PlayerPreview';
import {useDispatch, useSelector} from "react-redux";
import {resetPlayerData} from '../../store/slices/battle';


const Battle = () => {
    const dispatch = useDispatch();
    const playerData = useSelector(state => state.battle);

    useEffect(() => {
        handleResetPlayerData('playerOne');
        handleResetPlayerData('playerTwo');
    }, []);

    const handleResetPlayerData = (id) => {
        dispatch(resetPlayerData(id));
    };

    return (
        <div>
            <div className="row">
                {!playerData.playerOneImage
                    ?
                    <PlayerInput
                        id='playerOne'
                        label='Player 1'
                    />
                    :
                    <PlayerPreview
                        avatar={playerData.playerOneImage}
                        username={playerData.playerOneName}
                    >
                        <button
                            className="reset"
                            onClick={() => handleResetPlayerData('playerOne')}
                        >
                            Reset
                        </button>
                    </PlayerPreview>}

                {!playerData.playerTwoImage
                    ?
                    <PlayerInput
                        id='playerTwo'
                        label='Player 2'
                    />
                    :
                    <PlayerPreview
                        avatar={playerData.playerTwoImage}
                        username={playerData.playerTwoName}
                    >
                        <button
                            className="reset"
                            onClick={() => handleResetPlayerData('playerTwo')}
                        >
                            Reset
                        </button>
                    </PlayerPreview>}
            </div>

            {playerData.playerOneImage && playerData.playerTwoImage &&
                <Link
                    className="button"
                    to={{
                        pathname: 'results',
                        search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
                    }}
                >
                    Battle
                </Link>}
        </div>
    );
};

export default Battle;