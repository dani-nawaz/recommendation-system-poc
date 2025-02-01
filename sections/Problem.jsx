import React from "react";
import video from "../src/assets/Images/gif.mp4";

function ProposalCard({title, description}) {
    return (
        <div className="flex flex-col gap-2 p-6 bg-gray-50 rounded w-full">
            <p className="text-sm sm:text-base font-semibold text-gray-900">
                {title}
            </p>
            <p className="text-sm text-gray-400">
                {description}
            </p>
        </div>
    )
}

export function EvaluatorCard({name, title, src}) {
    return (
        <div
            className="bg-gray-50 p-6 rounded flexflex-wrap items-center justify-between sm:flex-nowrap">
            <div className="flex flex-col gap-2">
                <div className="shrink-0">
                    <img className="size-12 rounded-full"
                         src={src || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"}
                         alt=""/>
                </div>
                <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">{name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                        <a href="#">{title}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Problem({setActiveSection}) {
    const proposalData = [
        {
            title: "GreenTech Innovation Grant",
            description: "A proposal focused on developing biodegradable batteries that provide long-lasting energy storage without harming the environment. The goal is to replace lithium-ion batteries with sustainable alternatives."
        },
        {
            title: "Next-Gen EdTech Platform",
            description: "A gamified learning app that teaches kids financial literacy through interactive storytelling and virtual investments. The app aims to make learning about money fun and engaging for children aged 8–14."
        },
        {
            title: "AI-Powered Remote Health Diagnostics",
            description: "A telemedicine service with smart wearables that track vital signs and detect early symptoms of chronic diseases like diabetes and heart conditions, helping doctors provide remote consultations."
        }
    ]

    const evaluatorData = [
        {
            name: "Dr. Evelyn Carter",
            title: "Renewable Energy Scientist & Rock Climber",
            src: "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {name: "David Chang", title: "Surgeon & Street Food Critic"},
        {
            name: "Sophia Lin",
            title: "Venture Capitalist & Amateur Beekeeper",
            src: "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ]


    return (
        <article className="flex flex-col gap-6 sm:gap-12 justify-start sm:justify-center overflow-hidden sm:pb-0 h-screen">
            <div className="flex flex-col gap-2 sm:gap-4">
                <h1>
                    Problem
                </h1>
                <h3 className="text-lg sm:text-3xl font-semibold">
                    Where precision meets efficiency.
                </h3>
                <h3 className="text-xl sm:text-5xl">
                    Finding the right evaluator among thousands of experts for each unique proposal.
                </h3>
            </div>
            <div className="flex overflow-y-auto w-full gap-6"
                 style={{display: "grid", gridTemplateColumns: "230px 230px 230px"}}>
                {proposalData.map((proposal, index) => (
                    <ProposalCard key={index} title={proposal.title} description={proposal.description}/>
                ))}
            </div>
            <div className="hidden md:flex gap-12 justify-center">
                <video src={video} alt="" loop autoPlay={false}
                       controls={false} muted/>
                {/*<img src={image} alt="" className="size-48"/>*/}
            </div>
            <div className="flex overflow-y-scroll gap-6"
                 style={{display: "grid", gridTemplateColumns: "230px 230px 230px"}}>
                {evaluatorData.map((evaluator, index) => (
                    <EvaluatorCard key={index} name={evaluator.name} title={evaluator.title} src={evaluator.src}/>
                ))}
            </div>
            <button
                onClick={() => setActiveSection(2)}
                className="bg-cyan-600 text-base sm:text-2xl text-gray-50 px-6 py-4 flex gap-4 rounded w-max cursor-pointer items-center">
                Want to know how we solve it?
            </button>

        </article>
    )
}