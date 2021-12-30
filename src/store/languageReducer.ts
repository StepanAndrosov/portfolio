import {ru} from "../data/ru";


const initialState = {
    language: ru
}
type toggleLanguageAT = {
    type: "TOGGLE_LANGUAGE",
    language: LanguageType
}
export type LanguageType = typeof initialState.language
export type InitialStateType = typeof initialState

type ActionType = toggleLanguageAT
export const languageReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "TOGGLE_LANGUAGE" : {
            return {
                ...state,
                language: action.language
            }
        }
        default:
            return state
    }
}

export const toggleLanguageAC = (language: LanguageType): toggleLanguageAT => ({type: "TOGGLE_LANGUAGE", language})

