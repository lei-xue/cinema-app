import { useSearchParams } from 'react-router-dom';

import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../components/useTitle";

export const Search = ({ api }) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");
    const { data: movies } = useFetch(api, queryTerm);

    // Check if movies is not undefined and not null before trying to access its length
    const hasMovies = movies && movies.length > 0;
    useTitle(`Search result for ${queryTerm}`)

    return (
        <main>
            <section className="py-3">
                <p className="text-3x-gray-700 dark:text-white">
                    {hasMovies ? `Search results for "${queryTerm}"` : `No results for "${queryTerm}"`}
                </p>
            </section>
            {hasMovies && (
                <section className="max-w-7xl mx-auto py-7">
                    <div className="flex justify-start flex-wrap ">
                        {movies.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    )
}