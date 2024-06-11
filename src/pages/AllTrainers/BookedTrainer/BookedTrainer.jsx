import { useLoaderData } from "react-router-dom"


const BookedTrainer = () => {
  const bookingTrainer = useLoaderData();
  console.log(bookingTrainer)
  return (
    <>
        <div className="">
            <div className="">
                <h1>BookedTrainer</h1>
            </div>
        </div>
    </>
  )
}

export default BookedTrainer