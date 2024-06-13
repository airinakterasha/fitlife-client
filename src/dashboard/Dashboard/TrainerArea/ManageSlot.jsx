import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useSlot from "../../../hooks/useSlot"
import TitleSection from "../../../components/TitleSection/TitleSection";
import useCartAll from "../../../hooks/useCartAll";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageSlot = () => {
  const {user} = useAuth();
  const [slots, refetch] = useSlot();
  const [cartAll] = useCartAll()
  console.log(cartAll);
  const axiosSecure = useAxiosSecure();

  const mySlots = slots.filter(slotMine => slotMine.email === user?.email );
  const mySelectedSlots = cartAll.filter(bookedSlot => bookedSlot.trainerEmail === user?.email );

  console.log(mySlots);
  console.log(mySelectedSlots);

  const handleDeleteSlot = (mySlots) => {
    Swal.fire({
        title: `Are you sure you want to delete ${mySlots.slotName}?`,
        text: `You won't be able to revert ${mySlots.slotName}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, delete ${mySlots.slotName}!`
      }).then((result) => {
        if (result.isConfirmed) { 
          axiosSecure.delete(`/slot/${mySlots._id}`)
          .then(res => {
            if(res.data.deletedCount > 0){
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${mySlots.slotName} has been deleted.`,
                icon: "success"
              });
            }
          })
        }
    });
  }
  return (
    <>
        <Helmet>
              <title>FitLife | Manage Slot</title>
        </Helmet>
        <div className="">
            <div className="mb-10">
                    <TitleSection heading={'Manage Slots'} subHeading={'Here you will see your all slots'}></TitleSection>
                </div>
            <div className="">
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Slot Name</th>
                      <th>Slot hr</th>
                      <th>Booked Slot</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      mySlots.map((mySlot, index) => <tr key={mySlot._id}>
                        <th>{index + 1}</th>
                        <td>Cy Ganderton</td>
                        <td>{mySlot.slotName}</td>
                        <td>{mySlot.slotTime}</td>
                        <td>
                          client name
                        </td>
                        <td>
                          <button onClick={() => handleDeleteSlot(mySlot)} className="btn btn-sm">Delete</button>
                        </td>
                      </tr>)
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    </>
  )
}

export default ManageSlot