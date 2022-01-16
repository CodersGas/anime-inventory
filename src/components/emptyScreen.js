import { Link } from "react-router-dom";

const EmptyScreen = () => {

  return (
    <div className="flex justify-center items-center flex-col w-full absolute top-1/2 -translate-y-1/2 text-center" >
      <p className="dark:text-white text-slate-700 text-lg" >
        Such Emptiness. Add your favorite Anime to see here
      </p>

      <Link to="/addNew" >
        <button
          type="button"
          className="mx-auto py-4 mb-4 w-48 mt-4
                  rounded-full border-0
                  text-md font-semibold
                  bg-violet-50 text-violet-700
                  hover:bg-violet-100"
        >
          Add Yours
        </button>
      </Link>
    </div>
  )
}

export default EmptyScreen;