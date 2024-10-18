import HomeContainer from "@/containers/home"
import {
  getSingleCategory,
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
} from "@/services/movie"

export default async function Home({ params }) {
  const [{ results: popularMovies }, { results: topRatedMovies }, { genres: categories }] =
    await Promise.all(
      [getPopularMovies(), getTopRatedMovies(), getCategories()]
    )
  let selectedCategory
  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0])
    selectedCategory = results
  }

  return (
    <div className="">
      <HomeContainer
        topRatedMovies={topRatedMovies}
        categories={categories}
        popularMovies={popularMovies}
        selectedCategory={{
          id: params.category?.[0] ?? "",
          movies: selectedCategory ? selectedCategory?.slice(0, 7) : []
        }}
      />
    </div>
  );
}
