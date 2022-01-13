export const ErrorElement = ({
  text
}) => {

  return(
    <span className="text-red-500 dark:text-red-300 italic" >
      {text}
    </span>
  )
}