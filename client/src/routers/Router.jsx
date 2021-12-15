import { BrowserRouter, Routes, Route } from 'react-router-dom';
import route from './routeConstants';
import Header from '../components/Header/index';
import MainPage from '../pages/main/MainPage';
import SearchPage from '../pages/search/SearchPage';
import SearchTotalPage from '../pages/searchTotal/SearchTotalPage';
import SongInfoPage from '../pages/songInfo/SongInfoPage';
import AboutPage from '../pages/about/AboutPage';

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path={route.MAIN} element={<MainPage />} />
                <Route exact path={route.SEARCH} element={<SearchPage />} />
                <Route exact path={`${route.DETAIL}/:songId`} element={<SongInfoPage />} />
                <Route exact path={route.ABOUT} element={<AboutPage />} />
                <Route
                    exact
                    path={`${route.SEARCHTOTAL}/:searchKeyword`}
                    element={<SearchTotalPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
