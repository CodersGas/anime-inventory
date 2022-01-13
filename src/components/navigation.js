const Navigation = () => {

  return(
    <nav className="flex align-middle py-4 gap-4" >
      <button className="dark:text-white basis-auto flex-1 bg-transparent text-blue-700 font-semibold">
        Add Yours
      </button>

      <span className="relative basis-auto flex-1 text-center my-4">
        <span className="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
        <span className="relative text-white font-bold md:text-2xl">Anime-Tory</span>
      </span>

      <button className="dark:text-white basis-auto flex-1 bg-transparent text-blue-700 font-semibold">
        All
      </button>
    </nav>
  )
}

export default Navigation;