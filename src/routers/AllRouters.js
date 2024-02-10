import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, PageNotFound } from '../pages';


export const AllRouters = () => {
    return (
        <div className="dark:bg-darkbg">
            <Routes>
                <Route path="/" element={<MovieList api="movie/now_playing" title="Home" />} />
                <Route path="/movie/:id" element={<MovieDetail api="movie/" title="MovieDetail" />} />
                <Route path="/movies/popular" element={<MovieList api="movie/popular" title="Popular" />} />
                <Route path="/movies/top" element={<MovieList api="movie/top_rated" title="TopRated" />} />
                <Route path="/movies/upcoming" element={<MovieList api="movie/upcoming" title="Upcoming" />} />
                <Route path='/search' element={<Search api="search/movie" title="404" />} />
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </div>
    )
}
