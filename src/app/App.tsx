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
        MuiTooltip: {
            defaultProps: {
                disableInteractive: true,
                enterDelay: 500,
                enterNextDelay: 500,
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: "100%",
                }
            },
            defaultProps: {
                multiline: true,
                variant: "filled",
                InputLabelProps: {shrink: true},
            }
        }
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
