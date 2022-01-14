import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorElement } from "./error-element";
import Rating from "@mui/material/Rating";

const Form = () => {
  console.log('env ', process.env.PROD_ENV);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onFormSubmit = (data) => {
    if (!data.rating) data.rating = rating;
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex items-center justify-center flex-col px-7 translate-y-1/2"
    >
      <div className="mb-4 w-full md:w-1/3" >
        <label className="lock text-gray-700 dark:text-white font-bold text-lg" htmlFor="anime_name" >
          Anime
        </label>
        <input
          type="text"
          name="anime_name"
          {...register(
            "anime_name",
            {
              required: true,
              minLength: 3
            }
          )}
          placeholder="anime name"
          className="shadow capitalize appearance-none border rounded mb-2 w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:italic dark:border-zinc-300"
        />
        {
          Boolean(errors) && errors.anime_name?.type === "required" ?
            <ErrorElement
              text="Please enter anime name"
            />
            :
            Boolean(errors) && errors.anime_name?.type === "minLength" ?
              <ErrorElement
                text="Please enter valid anime name"
              />
              : null
        }
      </div>

      <div className="mb-4 w-full md:w-1/3" >
        <label className="lock text-gray-700 dark:text-white font-bold text-lg" htmlFor="rating" >
          Rating
        </label>
        <Rating
          name="rating"
          value={rating}
          {...register(
            "rating",
            {
              required: false
            }
          )}
          onChange={(event, newValue) => setRating(newValue)}
          className="w-full pl-0 ml-0 mt-1"
          size="large"
        />
      </div>

      <div className="w-full md:w-1/3 mt-8" >
        <button
          type="submit"
          className={"bg-gray-300 w-full justify-center hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-500 "}
          disabled={loading}
        >
          {
            loading &&
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          }
          Add
        </button>
      </div>
    </form>
  )
}

export default Form;