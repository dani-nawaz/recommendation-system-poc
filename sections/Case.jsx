import React from "react";

export default function Case({setActiveSection}) {
    console.log(setActiveSection)
    return (
        <article className="flex flex-col  gap-6 sm:gap-12 justify-start w-full">
            <div className="flex flex-col gap-4">
                <h1>
                    Case
                </h1>
                <h2 className="text-4xl sm:text-6xl">
                    From hours of reviews to a single click
                </h2>
            </div>
            <button onClick={()=>setActiveSection(1)} className="bg-cyan-600 text-2xl sm:text-4xl text-gray-50 px-6 py-4 rounded w-max cursor-pointer">
                Curious to know more?
            </button>
        </article>

    )
}