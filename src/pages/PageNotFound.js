import { useEffect } from "react";
import PageNotFoundPic from "../assets/PageNotFound.png"
import { Link } from "react-router-dom";

export const PageNotFound = () => {

    useEffect(() => {
        document.title = "Page Not Found - Cinemate"
    })

    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="text-7xl text-gray-700 fount-bold my-10 dark:text-white">404, Oops!</p>
                    <div className="max-w-lg">
                        <img src={PageNotFoundPic} alt="page-not-found" className="rounded"></img>
                    </div>
                </div>
                <div className="flex justify-center my-4">
                    <Link to="/">
                        <button className="w-64 rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">Back to Cinemate!</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
