import { Link } from "react-router-dom";

const Navigation = () => {

  return(
    <nav className="flex items-center justify-around py-4 gap-4 mt-3" >
      <Link to="/anime-inventory/addNew" >
        <button className="dark:text-white md:text-xl bg-transparent text-blue-700 font-semibold">
          Add Yours
        </button>
      </Link>

      <Link to="/anime-inventory/" >
        <span className="relative text-center my-4">
          <span className="block absolute -inset-3 -skew-y-3 dark:bg-pink-600 border-pink-600 border-2 md:border-t-0" aria-hidden="true"></span>
          <span className="relative text-pink-600 dark:text-white font-bold md:text-5xl">Anime-Tory</span>
        </span>
      </Link>

      <Link to="/anime-inventory/" >
        <button className="dark:text-white md:text-xl bg-transparent text-blue-700 font-semibold">
          All
        </button>
      </Link>
    </nav>
  )
}

export default Navigation;