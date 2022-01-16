import { useEffect, useState } from "react";
import { hitAPI } from "../helpers/hitAPI";
import Rating from "@mui/material/Rating";
import { Link, Outlet } from "react-router-dom";
import EmptyScreen from "./emptyScreen";

const AllAnimes = () => {

  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalData, setTotalData] = useState(null);

  const fetchAllData = async (page) => {
    try {
      setLoading(true);
      const payload = { "page": page, "limit": 10 };
      const response = await hitAPI("GET", payload, "");
      setAllData(allData.concat(response.data));
      if (!totalData) setTotalData(response.length);
    } catch (error) {
      console.log("Error in fetchAllData ", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchAllData(page);
  }, [page]);

  return (
    <>
      <section className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 justify-center items-center gap-8 my-16 mx-8 md:mx-16" >
        {
          allData.length ?
          allData.map((data, index) => (
            <Link to={`/anime-inventory/edit/${data._id}`} key={data._id} >
              <div className="cursor-pointer" >
                <img
                  className="h-64 w-full"
                  src={data.img}
                />

                <div className="mt-4 flex justify-center flex-col items-center gap-1" >
                  <p className="capitalize dark:text-white text-slate-700" >
                    {data.name}
                  </p>

                  <Rating
                    value={data.rating}
                    readOnly
                    size="small"
                  />
                </div>
              </div>
            </Link>
          ))
          : null
        }
        <Outlet />
      </section>
      
      {
        !allData.length && <EmptyScreen />
      }

      {
        (totalData === allData.length || !allData.length) ? null :
        <div className="w-full flex justify-center" >
          <button
            type="button"
            onClick={() => setPage(page + 1)}
            className="mx-auto py-4 mb-4 w-48
                rounded-full border-0
                text-md font-semibold
                bg-violet-50 text-violet-700
                hover:bg-violet-100"
            disabled={loading}
          >
            {loading ? "Loading..." : "Show More"}
          </button>
        </div>
      }
    </>
  )
}

export default AllAnimes;