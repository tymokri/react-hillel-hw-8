import React from 'react';
import LanguagesList from '../../components/LanguagesList';
import ReposItems from '../../components/ReposItems';
import Loader from '../../components/Loader';
import {useSelector} from "react-redux";

const Popular = () => {
    const isLoading = useSelector(state => state.popular.isLoading);

    return (
        <div>
            <LanguagesList
                isLoading={isLoading}
            />
            {isLoading
                ? <Loader />
                : <ReposItems />}
        </div>
    );
};

export default Popular;