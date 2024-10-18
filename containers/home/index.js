import { FeaturedMovie } from "@/components/featured-movie";
import { Categories } from "@/components/categories";
import { MoviesSection } from "@/components/movies-section";

export default function HomeContainer({
    popularMovies = [],
    topRatedMovies = [],
    categories,
    selectedCategory }) {
    return (
        <div>
            <FeaturedMovie
                movie={topRatedMovies?.[0]}
            />
            <Categories categories={categories.slice(0, 5)} />
            {!!selectedCategory.movies.length && (
                <MoviesSection
                    title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
                    movies={selectedCategory.movies.slice(1, 7)}
                />
            )}
            <MoviesSection
                title="Top Rated Movies"
                movies={topRatedMovies.slice(1, 7)}
            />

            <MoviesSection
                title="Popular Films"
                movies={popularMovies.slice(7, 13)} />
        </div>
    );
}

