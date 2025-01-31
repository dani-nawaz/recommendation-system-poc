import React from "react";
import image from "../src/assets/asset.jpg";
import video from "../src/assets/gif.mp4";

function ProposalCard({title, description}) {
    return (
        <div className="flex flex-col gap-4 p-6 bg-gray-50 rounded">
            <p className="text-base text-gray-700">
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
        <div className="bg-gray-50 p-6 rounded flexflex-wrap items-center justify-between sm:flex-nowrap">
            <div className="flex flex-col gap-2">
                <div className="shrink-0">
                    <img className="size-12 rounded-full"
                         src={src || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"}
                         alt=""/>
                </div>
                <div className="">
                    <h3 className="text-base font-semibold text-gray-900">{name}</h3>
                    <p className="text-sm text-gray-500">
                        <a href="#">{title}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Problem() {
    return (
        <article className="flex flex-col gap-12 justify-start">
            <div className="flex flex-col gap-4">
                <h1>
                    Problem
                </h1>
                <h3 className="text-3xl">
                    Where precision meets efficiency.
                </h3>
                <h3 className="text-5xl">
                    Finding the right evaluator among thousands of experts for each unique proposal.
                </h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <ProposalCard title="GreenTech Innovation Grant"
                              description="A proposal focused on developing biodegradable batteries that provide long-lasting energy storage without harming the environment. The goal is to replace lithium-ion batteries with sustainable alternatives."/>
                <ProposalCard title="Next-Gen EdTech Platform"
                              description="A gamified learning app that teaches kids financial literacy through interactive storytelling and virtual investments. The app aims to make learning about money fun and engaging for children aged 8–14."/>
                <ProposalCard title="AI-Powered Remote Health Diagnostics"
                              description="A telemedicine service with smart wearables that track vital signs and detect early symptoms of chronic diseases like diabetes and heart conditions, helping doctors provide remote consultations."/>
            </div>
            <div className="flex gap-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full" width="477" height="194"
                     viewBox="0 0 377 194" fill="none">
                    <path
                        d="M48.4169 185.695C89.2254 132.02 136.546 79.8379 168.219 19.9688C168.862 18.7525 179.338 -0.895476 180.381 2.72459C181.884 7.9416 180.95 13.5705 182.74 18.8797C199.267 67.8885 207.832 118.743 217.955 169.358C217.993 169.547 219.44 181.826 221.585 180.431C226.413 177.293 230.491 167.399 233.021 163.187C244.894 143.426 257.429 124.592 271.321 106.19C288.941 82.8516 305.727 58.6284 313.071 29.9523C316.292 17.3724 320.842 22.3224 326.321 32.1306C350.344 75.128 375.15 118.821 375.15 169.358C375.15 181.103 352.364 169.756 347.741 167.906C312.086 153.645 278.697 133.582 244.457 116.355C210.104 99.0712 174.998 83.5758 139.902 67.8897C110.156 54.5944 80.5773 40.8978 50.5951 28.1372C42.6632 24.7613 34.2146 21.9673 26.6347 17.7906C26.3096 17.6115 19.5477 13.6254 19.3739 14.5233C17.1097 26.222 23.0084 44.7042 25.001 55.7279C29.7332 81.9085 35.769 107.837 40.7931 133.962C44.2621 152.001 50.1885 169.72 51.775 187.964C52.2763 193.73 55.7491 192.365 58.7634 189.235C80.9306 166.215 109.587 149.518 134.003 129.061C158.188 108.798 179.878 84.8413 206.882 68.1619C216.646 62.1313 228.114 57.0223 236.833 49.4656C239.144 47.4624 239.913 43.1737 241.825 47.7411C257.835 85.9885 270.362 127.318 290.018 163.822C292.131 167.747 300.951 174.291 296.643 175.439C290.378 177.11 274.855 168.288 270.141 166.273C231.846 149.895 195.183 130.138 158.326 110.819C106.898 83.8622 53.771 60.9463 1.94817 35.0348C-0.31317 33.9042 6.5432 37.2876 9.02739 37.7576C19.3205 39.705 30.9133 38.3162 41.1561 37.3038C74.5643 34.0019 107.629 27.7928 140.9 23.4177C183.788 17.778 226.895 14.6873 270.051 11.982C285.594 11.0077 307.947 6.72069 324.052 10.0761C325.264 10.3286 327.091 10.6059 327.774 11.8005C331.64 18.5668 322.476 22.3516 317.518 25.6867C260.035 64.3475 202.025 103.856 141.173 137.048C136.752 139.46 118.605 144.654 116.94 150.48C116.179 153.145 117.031 149.029 117.031 148.121"
                        stroke="black" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                 <video src={video} alt="" loop autoPlay muted/>
                <img src={image} alt="" className="size-48"/>
            </div>
            <div className="grid grid-cols-3  gap-6">
                <EvaluatorCard name="Dr. Evelyn Carter" title="Renewable Energy Scientist & Rock Climber"
                               src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                <EvaluatorCard name="David Chang" title="Surgeon & Street Food Critic"/>
                <EvaluatorCard name="Sophia Lin" title="Venture Capitalist & Amateur Beekeeper"
                               src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
            </div>
        </article>

    )
}