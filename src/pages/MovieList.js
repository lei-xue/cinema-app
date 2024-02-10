
import { useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ api, title }) => {


    const { data: movies } = useFetch(api);

    useEffect(() => {
        document.title = `Cinemate - ${title}`;
    }, [title]);



    return (
        <main>

            <section className="max-w-7xl mx-auto py-7">

                <div className="flex justify-start flex-wrap other:justify-evenly">
                    {movies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}


                </div>
            </section>

        </main>
    )
}
