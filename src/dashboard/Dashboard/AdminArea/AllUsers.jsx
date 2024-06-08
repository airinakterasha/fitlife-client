import { useQuery } from "@tanstack/react-query"
import TitleSection from "../../../components/TitleSection/TitleSection";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: `Are you sure you want to delete ${user.name}?`,
            text: `You won't be able to revert ${user.name}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, delete ${user.name}!`
          }).then((result) => {
            if (result.isConfirmed) { 
              axiosSecure.delete(`/users/${user._id}`)
              .then(res => {
                if(res.data.deletedCount > 0){
                  refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: `${user.name} has been deleted.`,
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
              <title>FitLife | All Users</title>
            </Helmet>
            <div className="">
                <div className="mb-10">
                    <TitleSection heading={'All Users'} subHeading={'All users list'}></TitleSection>
                </div>
                <div className="flex justify-evenly my-4">
                    <h2 className="text-3xl">All Users</h2>
                    <h2 className="text-3xl">Total Users: {users.length}</h2>
                </div>
                {/* table */}
                <div className="mt-10">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                users.map((user, index) =><tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        { 
                                            user.role === 'admin' ? 'Admin' : <button 
                                                    onClick={() => handleMakeAdmin(user)} 
                                                    className="btn btn-ghost btn-xs">
                                                    <FaUsers></FaUsers>
                                                </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-xs">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                            
                        
                            </tbody>
                        </table>
                    </div>
                </div>
                 {/* table */}
            </div>
        </>
    )
}

export default AllUsers