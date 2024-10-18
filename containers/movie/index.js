import { FeaturedMovie } from "@/components/featured-movie";
 
export default function MovieContainer({movie}) {
    return (
        <div>
            <FeaturedMovie
                movie={movie}
                isCompact={false} 
            />
        </div>
    )
}