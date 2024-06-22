import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useSlot from "../../../hooks/useSlot"
import TitleSection from "../../../components/TitleSection/TitleSection";
import useCartAll from "../../../hooks/useCartAll";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageSlot = () => {
  const {user} = useAuth();
  const [slots, loading, refetch] = useSlot();

  const [cartAll] = useCartAll()
  //console.log(cartAll);
  const myBookedClient = cartAll.filter(slotMine => slotMine.trainerEmail === user?.email );
  console.log(myBookedClient);
  const axiosSecure = useAxiosSecure();

  const mySlots = slots.filter(slotMine => slotMine.email === user?.email );
  

  const handleDeleteSlot = (mySlots) => {
    Swal.fire({
        title: `Are you sure you want to delete?`,
        text: `You won't be able to revert this!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, delete it!`
      }).then((result) => {
        if (result.isConfirmed) { 
          axiosSecure.delete(`/slot/${mySlots._id}`)
          .then(res => {
            if(res.data.deletedCount > 0){
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `Your slot has been deleted.`,
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
                      <th>Class</th>
                      <th>Slot Name</th>
                      <th>Available Slot </th>  
                      <th>Available Day</th> 
                      <th>Classes Time</th>  
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      mySlots.map((mySlot, index) => <tr key={mySlot._id}>
                        <th>{index + 1}</th>
                        <td>
                          {
                            mySlot.classes.map((myclass, index) => <button key={index} className="mr-1 btn btn-sm">{myclass.label}</button>)
                          }
                        </td>
                        <td className="capitalize">{mySlot.slotName}</td>
                        <td>{mySlot.slotTime}</td>
                        <td>
                          {
                            mySlot.availableDay.map((availday, index) => <button key={index} className="mr-1 btn btn-sm my-1">{availday.label}</button>)
                          }
                        </td>
                        <td>
                          {mySlot.slotDuration}
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
            {/* Booked slots start */}
            <div className="mb-5 mt-10">
                <TitleSection  subHeading={'Booked slots'}></TitleSection>
            </div>
            <div className="">
              <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>                 
                        <th>Booked By</th> 
                        <th>Slot Name</th>
                        <th>Class Time</th> 
                        <th>Booked Slot </th>  
                        <th>Available Day</th> 
                      </tr>
                    </thead>
                    <tbody>
                      {
                        myBookedClient.map((client, index) => <tr key={client._id}>
                          <th>{index + 1}</th>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img src={client.clientImage} alt="Avatar Tailwind CSS Component" />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{client.clientName}</div>
                                <div className="text-sm opacity-50">{client.clientEmail}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            {client.slotName}
                          </td>
                          <td>
                            {client.slotTimeDuration}
                          </td>
                          <td>
                            {client.training}
                          </td>
                          <td>
                            {
                              client.availday.map((availableday, index) => <button key={index} className="mr-1 btn btn-sm my-1">{availableday.label}</button>)
                            }
                          </td>
                        </tr>)
                      }
                      
                    </tbody>
                  </table>
              </div>
            </div>
            {/* Booked slots start */}
        </div>
    </>
  )
}

export default ManageSlot