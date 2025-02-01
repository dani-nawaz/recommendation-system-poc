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
        <article className="flex flex-col gap-6  justify-center overflow-hidden  sm:pb-0 h-screen">
            <div className="flex flex-col gap-2 sm:gap-4">
                <h1>
                    Solution
                </h1>
                <h3 className="text-lg sm:text-3xl font-semibold">
                    Proven success, endless possibilities.
                </h3>
                <h3 className="text-base sm:text-3xl font-semibold text-gray-600">
                    The model that powered Alex's success is not just a one-time solution—it's a flexible, adaptable
                    system designed for businesses like yours.
                </h3>
            </div>

            <div className="flex overflow-y-auto w-full gap-6"
                 style={{display: "grid", gridTemplateColumns: "230px 230px 230px"}}>
                {featureData.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} description={feature.description}/>
                ))}
            </div>

            <div className="flex flex-col gap-4 max-w-2xl">
                <p className="text-xs sm:text-lg text-gray-600">
                    Built on our powerful platform, it can be tailored to fit your unique needs and seamlessly
                    integrated into your existing operations. Whether you want to enhance efficiency, optimize
                    decision-making, or create personalized experiences, this model is ready to transform your business.
                </p>
            </div>

            <button
                onClick={() => window.location.href = 'mailto:marketing@clickchain.com'}
                className="bg-cyan-600 text-base sm:text-2xl text-gray-50 px-6 py-4 flex gap-4 rounded w-max cursor-pointer items-center">
                Get in touch with us
            </button>
        </article>
    );
}