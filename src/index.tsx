import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import store from "./store/store";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    box-sizing: border-box;
    color: #FFFFFF;
  }
`
const theme = {
    colors: {
        purple: '#C241FF',
        blue: '#4BC9F0',
        red: '#EF466F',
        lightBlack: '#141416',
        mediumBlack: '#171717',
        gray: '#353945',
        lightGray: '#DADADA',
        yellow: '#FFD166',
        green: '#45B26B'
    },
    media: {
        sm: "(max-width: 425px)",
        md: "(min-width: 425) and (max-width: 768px)"
    }
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Global/>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
