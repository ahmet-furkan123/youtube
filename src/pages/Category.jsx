

import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryLoader from "../components/CategoryLoader";
import AsyncContent from "../components/AsyncContent";
import ShortsListing from "../components/ShortsListing";
import Card from "../components/Card";


const Category = () => {
   const { category_name } = useParams();

  const url = category_name === "trendler" ? "/trending" : `/search?query=${category_name}`;
   
  const { isLoading, error, data } = useFetch(url);
  console.log(data.data)

  const items = data?.data ?? [];
  const videos = items.filter((item) => item.type === "video");
  const [firstShorts, secondShorts] = items.filter((item) => item.type === "shorts_listing");

  console.log(firstShorts)
   
  return (
    <AsyncContent  isLoading={isLoading} error={error} fallback={<CategoryLoader />}>
      <div className="page">
      <div className="space-y-8">
         {firstShorts && <ShortsListing data={firstShorts.data} />}
         <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {videos.map((video) => (
              <Card video={video} key={video.videoId} />
            ))}
          </div>
            {secondShorts && <ShortsListing data={secondShorts.data} />}
      </div>
      </div>
    </AsyncContent>
  )
}

export default Category