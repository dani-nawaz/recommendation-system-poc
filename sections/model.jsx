import React from 'react';

function FeatureCard({title, description}) {
    return (
        <div className="flex flex-col gap-2 p-6 bg-gray-50 rounded w-full">
            <p className="text-sm sm:text-base font-semibold text-gray-900">
                {title}
            </p>
            <p className="text-sm text-gray-400">
                {description}
            </p>
        </div>
    );
}

export default function Model() {
    const featureData = [
        {
            title: "Flexible Integration",
            description: "Seamlessly integrates with your existing operations and workflows, minimizing disruption while maximizing impact."
        },
        {
            title: "Adaptive Learning",
            description: "Continuously evolves and improves based on your specific use cases and feedback, ensuring optimal performance."
        },
        {
            title: "Custom Solutions",
            description: "Tailored to your unique business needs, from enhancing efficiency to creating personalized user experiences."
        }
    ];

    return (
        <article className="flex flex-col gap-6 justify-center overflow-hidden pb- sm:pb-0 h-dvh">
            <div className="flex flex-col gap-2 sm:gap-4">
                <h1>
                    Proven success, endless possibilities.
                </h1>
                <h3 className="text-base sm:text-3xl font-semibold text-gray-600">
                The model that powered Alex’s success is not just a one-time solution—it’s a flexible, adaptable system designed for businesses like yours.
                Built on our powerful platform, it can be tailored to fit your unique needs and seamlessly integrated into your existing operations.
                </h3>
            </div>

            <div className="flex overflow-y-auto w-full gap-6"
                 style={{display: "grid", gridTemplateColumns: "230px 230px 230px"}}>
                {featureData.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} description={feature.description}/>
                ))}
            </div>

            <div className='flex justify-start gap-4'>
            <button
                onClick={() => window.location.href = 'https://www.linkedin.com/company/clickchain/'}
                className="bg-cyan-600 text-base sm:text-2xl text-gray-50 px-6 py-4 flex gap-4 rounded w-max cursor-pointer items-center">
                Find us
            </button>
            <button 
                onClick={() => window.location.href = 'https://clickchain.com/'}
                className="bg-cyan-100 text-base sm:text-2xl text-gray-70 px-6 py-4 flex gap-4 rounded w-max cursor-pointer items-center">
                Back to clickchain
                </button>
            </div>

        </article>
    );
}