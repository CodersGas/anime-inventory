import { useEffect, useState } from "react";
import { hitAPI } from "../helpers/hitAPI";
import Rating from "@mui/material/Rating";
import { Link, Outlet } from "react-router-dom";
import EmptyScreen from "./emptyScreen";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { addNotification } from "./addNotification";

const AllAnimes = () => {

  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalData, setTotalData] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const fetchAllData = async (page) => {
    try {
      setLoading(true);
      const payload = { "page": page, "limit": 10 };
      const response = await hitAPI("GET", payload, "");
      setAllData(allData.concat(response.data));
      if (!totalData) setTotalData(response.length);
      if (response.length > 10) setShowMore(true);
    } catch (error) {
      console.log("Error in fetchAllData ", error);
    }
    setLoading(false);
  }

  const deleteRecord = async (id) => {
    try {
      setDeleting(true);
      await hitAPI("DELETE", { id: id }, "deleteRecord");

      let temp = [...allData];
      temp = temp.filter(v => v._id !== id);
      setAllData(temp);
      addNotification("Success", "Deleted Successfully", "success");
    } catch (error) {
      console.log("Error while deleting record ", error);
      addNotification("Error", "Something wrong happened. Please try again", "danger");
    }
    setDeleting(false);
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
              <div className="relative" key={data._id} >
                <img
                  className="h-64 w-full"
                  src={data.img}
                />
                <div className="flex justify-between items-end w-full" >
                  <div className="mt-4 flex justify-center flex-col gap-1" >
                    <Tooltip title={<p className="text-xl" >Edit</p>} placement="top" arrow >
                      <Link to={`/anime-inventory/edit/${data._id}`} >
                        <p className="capitalize dark:text-white text-slate-700" >
                          {data.name} <Edit fontSize="small" className="ml-2" />
                        </p>
                      </Link>
                    </Tooltip>

                    <Rating
                      value={data.rating}
                      readOnly
                      size="small"
                    />
                  </div>

                  {
                    deleting ?
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      :
                      <Tooltip title={<p className="text-xl" >Delete</p>} placement="top" arrow >
                        <IconButton onClick={() => deleteRecord(data._id)} >
                          <Delete fontSize="large" className="deleteIcon" />
                        </IconButton>
                      </Tooltip>
                  }
                </div>
              </div>
            ))
            : null
        }
        <Outlet />
      </section>

      {
        !allData.length && !loading && <EmptyScreen />
      }

      {
        loading &&
        <div className="absolute -translate-y-1/2 top-1/2 text-center w-full" >
          <p className="dark:text-white text-slate-700 text-lg" >
            Loading...
          </p>
        </div>
      }

      {
        !showMore ? null :
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