import './App.css';
import Router from './routers/Router';

import { ThemeProvider } from '@emotion/react';
import { theme } from './common/constants/Styles';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Router />
            </ThemeProvider>
        </div>
    );
}

export default App;
