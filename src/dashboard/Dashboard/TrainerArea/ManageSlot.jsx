import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useSlot from "../../../hooks/useSlot"
import TitleSection from "../../../components/TitleSection/TitleSection";


const ManageSlot = () => {
  const {user} = useAuth();
  const [slots] = useSlot();

  const mySlots = slots.filter(slotMine => slotMine.email === user?.email );
  console.log(mySlots);
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
                      <th>Job</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    </>
  )
}

export default ManageSlot