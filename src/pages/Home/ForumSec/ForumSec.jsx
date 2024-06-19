import useForums from "../../../hooks/useForums";
import ForumSecSingle from "./ForumSecSingle";


const ForumSec = () => {
  const [forums] = useForums();
  return (
    <>
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {
                forums.map(forum => <ForumSecSingle key={forum._id} forum={forum}></ForumSecSingle>)
              }
            </div>
        </div>
    </>
  )
}

export default ForumSec