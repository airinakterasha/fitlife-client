

const AppliedTrainerComp = () => {
  return (
    <>
        <div className="">
            <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
                {/*  <!-- Image --> */}
                <figure className="p-6 pb-0">
                <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
                    <img
                    src="https://i.pravatar.cc/80?img=22"
                    alt="user name"
                    title="user name"
                    width="80"
                    height="80"
                    className="max-w-full rounded-full"
                    />
                </span>
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">
                    Nichole Jones
                    </h3>
                    <p className=" text-slate-400">Senior Designer</p>
                </header>
                </div>
                {/*  <!-- Action base sized with lead icon buttons  --> */}
                <div className="flex justify-end gap-2 p-6 pt-0">
                <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
                    <span className="order-2">Send message</span>
                    <span className="relative only:-mx-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-21 desc-21"
                    >
                        <title id="title-21">Icon title</title>
                        <desc id="desc-21">
                        A more detailed description of the icon
                        </desc>
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                    </span>
                </button>
                <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span className="order-2">Add friend</span>
                    <span className="relative only:-mx-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-06 desc-06"
                    >
                        <title id="title-06">Icon title</title>
                        <desc id="desc-06">
                        A more detailed description of the icon
                        </desc>
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                    </svg>
                    </span>
                </button>
                </div>
            </div>
            {/*<!-- End User profile card --> */}
        </div>
    </>
  )
}

export default AppliedTrainerComp