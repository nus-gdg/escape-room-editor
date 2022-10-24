import React from 'react'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import MainPage from "../pages/MainPage";
import './App.css';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: "8px",
                }
            }
        },
    },
});

export const App = () => {
    return (
        <div id={"app"}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <MainPage />
            </ThemeProvider>
        </div>
    )
}
