import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, PageNotFound } from '../pages';


export const AllRouters = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/movies/popular" element={<MovieList />} />
                <Route path="/movies/top" element={<MovieList />} />
                <Route path="/movies/upcomming" element={<MovieList />} />
                <Route path='/search' element={<Search />} />
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </>
    )
}
