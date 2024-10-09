import React from "react";

import { FeaturedMovie } from "@/components/featured-movie";
import { Categories } from "@/components/categories";
import { MoviesSection } from "@/components/movies-section";
import Genres from "@/mocks/genres";
import Movies from "@/mocks/movies";

export default function HomeContainer() {
    return (
        <div>
            <FeaturedMovie
                movie={Movies.results[0]}
            />
            <Categories categories={Genres.genres.slice(1, 6)} />

            <MoviesSection
                title="Featured Movies"
                movies={Movies.results.slice(1, 7)}
            />

            <MoviesSection
                title="Popular Films"
                movies={Movies.results.slice(1, 7)} />
        </div>
    );
}

