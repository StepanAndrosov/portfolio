import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Header} from "./components/Header/Header";
import {MyRepresentation} from "./components/MyRepresentation/MyRepresentation";
import {MySkills} from "./components/MySkills/MySkills";
import {getLanguage} from "./api/api";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store/store";
import {InitialStateType, toggleLanguageAC} from "./store/languageReducer";
import {MyWorks} from "./components/MyWorks/MyWorks";
import {DistanceWorking} from "./components/DistanceWorking/DistanceWorking";
import {Footer} from "./components/Footer/Footer";
import {ru} from "./data/ru";
import {en} from "./data/en";

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #141414;
`

function App() {

    const dispatch = useDispatch()
    const toggleLanguage = useSelector<AppStoreType, InitialStateType>(state => state.language)

    const [lang, setLang] = useState<string>('ru')

    useEffect(() => {
        getLanguage()
            .then(res => {
                if (res) {
                    dispatch(toggleLanguageAC(res[lang]))
                } else {
                   return lang === 'ru' ? dispatch(toggleLanguageAC(ru)) : dispatch(toggleLanguageAC(en))
                }

            })
    }, [lang])

    const header = toggleLanguage.language.header
    const presentation = toggleLanguage.language.presentation
    const skills = toggleLanguage.language.skills
    const works = toggleLanguage.language.works
    const distanceWorking = toggleLanguage.language.distanceWorking
    const footer = toggleLanguage.language.footer

    return (
        <AppWrapper>
            <Header lang={lang} setLang={setLang} title={header.title} links={header.links}/>
            <MyRepresentation presentation={presentation}/>
            <MySkills mySkills={skills.mySkills} title={skills.title}/>
            <MyWorks works={works.myWorks} title={works.title} btnText={works.btnTitle}  />
            <DistanceWorking distanceWorking={distanceWorking} />
            <Footer name={footer.name} rights={footer.rights}  />
        </AppWrapper>
    );
}
export default App;
