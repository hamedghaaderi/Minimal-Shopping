interface IIsError {
  style: string
}

const IsError = ({style}: IIsError) => {
  return (
    <>
     <h5 className={`text-center font-outfit h-full flex justify-center items-center text-gray ${style}`}>There is a problem. Please refresh the page.</h5>
    </>
  )
}

export default IsError