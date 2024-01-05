import React from 'react';
import {RouterProvider} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {LightTheme} from "./assets/Theme";
import {router} from "./routes/AppRouter";




function App() {
    return (
        <div className="App">
            <ThemeProvider theme={LightTheme}>
                <CssBaseline/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </div>
    );
}

export default App;
