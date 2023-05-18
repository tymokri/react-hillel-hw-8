import React, {useEffect} from 'react';
import {languages} from "../../service/GithubLanguagesList";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedLanguage, setMyParam} from '../../store/slices/popular';
import {getRepos} from "../../store/slices/popular.thunk";

const LanguagesList = ({isLoading}) => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedLanguage = useSelector(state => state.popular.selectedLanguage);
    const myParamValue = useSelector(state => state.popular.myParam);
    const currentMyParam = searchParams.get('lang');

    useEffect(() => {
        setSearchParams({lang: currentMyParam});
    }, []);

    useEffect(() => {
        setSearchParams({lang: selectedLanguage});
        dispatch(setMyParam({lang: myParamValue}));
        dispatch(getRepos(selectedLanguage));
    }, [selectedLanguage]);

    return (
        <ul className="languages">
            {languages.map((language, index) => (
                <li
                    key={index}
                    onClick={() => {
                        dispatch(setSelectedLanguage(language))
                    }}
                    style={{
                        color: language === selectedLanguage ? '#d0021b' : '#000000',
                        pointerEvents: isLoading ? 'none' : 'auto'
                    }}
                >
                    {language}
                </li>
            ))}
        </ul>
    );
};

export default LanguagesList;