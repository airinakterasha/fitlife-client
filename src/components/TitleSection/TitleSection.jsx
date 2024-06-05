

const TitleSection = ({heading, subHeading}) => {
  return (
    <>
        <div className="p-5">
            <div className="text-center space-y-2">
              <p className="text-xl capitalize">--- {subHeading} ---</p>
              <h3 className="text-3xl uppercase font-bold text-[#F23B3F]">{heading}</h3> 
            </div>
        </div>
    </>
  )
}

export default TitleSection