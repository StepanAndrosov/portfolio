import {InitialStateType, languageReducer, toggleLanguageAC} from "./languageReducer";
import {en} from "../data/en";
import {ru} from "../data/ru";

test("the language should switch correctly", () => {

    const state: InitialStateType = {
        language: {...ru}
    }
    const enLang = {...en}
    const endState = languageReducer(state, toggleLanguageAC(enLang))

    expect(state.language.header.title).toBe("Моё портфолио")
    expect(endState.language.header.title).toBe("My portfolio")
    expect(state.language.presentation).toBe("Привет! Меня зовут Степан. Я front-end разработчик.")
    expect(endState.language.presentation).toBe("Hi! My name is Stepan. I`m front-end developer.")
    expect(state.language.works.title).toBe("Мои работы")
    expect(endState.language.works.title).toBe("My works")
    expect(state.language.distanceWorking.title).toBe("Рассматриваю варианты удаленной работы")
    expect(endState.language.distanceWorking.title).toBe("Remote work possible")
    expect(state.language.footer.name).toBe("Степан Андросов")
    expect(endState.language.footer.name).toBe("Stepan Androsov")
})
