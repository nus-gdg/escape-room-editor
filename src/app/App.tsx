import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
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
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <MainPage/>
                </ThemeProvider>
            </StyledEngineProvider>
        </div>
    )
}
