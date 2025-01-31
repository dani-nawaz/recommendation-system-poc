"use client"

import React, {useEffect, useState} from "react"
import {AnimatePresence, motion} from "framer-motion"
import {ParticleEffect} from "./particle-effect"
import ProfileCard from "./ProfileCard"
import {Check} from "lucide-react"

const mailingLists = [
    {
        id: 1,
        title: "GreenTech Innovation Grant",
        description: "Developing biodegradable batteries for long-lasting energy storage without harming the environment.",
        users: "621 users"
    },
    {
        id: 2,
        title: "Next-Gen EdTech Platform",
        description: "A gamified learning app teaching kids financial literacy through interactive storytelling and virtual investments.",
        users: "1200 users"
    },
    {
        id: 3,
        title: "AI-Powered Remote Health Diagnostics",
        description: "Telemedicine service with smart wearables tracking vital signs and detecting early symptoms of chronic diseases.",
        users: "2740 users"
    },
]
const getRandomPercentage = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// GreenTech Innovation Grant
const greenTechEvaluators = [
    [
        {
            name: "Dr. Evelyn Carter",
            role: "Renewable Energy Scientist & Rock Climber",
            description: "Holds a PhD in sustainable energy from MIT. Developed algae-based biofuel for NASA's Mars missions. Spends weekends rock climbing and testing solar-powered camping gear.",
            percentage: getRandomPercentage(76, 100),
            icon: "🔬"
        },
        {
            name: "Max “The Scrap King” Rodriguez",
            role: "Industrial Recycling Innovator",
            description: "Started a business turning electronic waste into art. Designed a system that converts old car batteries into home power banks. Once built a solar-powered DJ booth for Burning Man.",
            percentage: getRandomPercentage(51, 75),
            icon: "♻️"
        }
    ],
    [
        {
            name: "Sophia Lin",
            role: "Venture Capitalist & Amateur Beekeeper",
            description: "Invests in clean energy startups, including electric aviation. Former UN policy advisor on carbon reduction strategies. Owns a bee farm and advocates for sustainable urban farming.",
            percentage: getRandomPercentage(26, 50),
            icon: "🐝"
        },
        {
            name: "John Doe",
            role: "CTO",
            percentage: getRandomPercentage(0, 25),
            icon: "👨‍💻",
            description: "CTO with expertise in developing sustainable technology solutions."
        }
    ],
    [
        {
            name: "Emma Watson",
            role: "CFO",
            percentage: getRandomPercentage(0, 25),
            icon: "👩‍💼",
            description: "CFO with a focus on financial strategies for green tech companies."
        },
        {
            name: "Chef Lorenzo De Luca",
            role: "Michelin-Starred Chef & Food Innovator",
            description: "Uses AI to predict food trends and design experimental recipes. Co-developed a 'smart kitchen assistant' powered by NLP.",
            percentage: getRandomPercentage(0, 25),
            icon: "🍽️"
        }
    ]
];

// AI-Powered Remote Health Diagnostics
const aiHealthEvaluators = [
    [
        {
            name: "Dr. Aisha Khan",
            role: "Medical AI Researcher & Aspiring Stand-up Comedian",
            description: "Developed AI tools for early cancer detection. Runs a TikTok channel explaining medical AI using memes. Tested her AI models on herself after eating questionable street food.",
            percentage: getRandomPercentage(76, 100),
            icon: "🩺"
        },
        {
            name: "David Chang",
            role: "Surgeon & Street Food Critic",
            description: "Performed the first AI-assisted robotic surgery in his hospital. Writes anonymous food reviews for hole-in-the-wall restaurants. Can predict his patients’ cholesterol levels based on their lunch orders.",
            percentage: getRandomPercentage(51, 75),
            icon: "🍲"
        }
    ],
    [
        {
            name: "Emily Carter",
            role: "FDA Compliance Expert & Former Punk Rock Drummer",
            description: "Ensures AI health tech meets regulatory standards. Once toured Europe as a drummer in an all-female punk band. Thinks health regulations are harder to navigate than music contracts.",
            percentage: getRandomPercentage(26, 50),
            icon: "🥁"
        },
        {
            name: "Mike Ross",
            role: "CTO",
            percentage: getRandomPercentage(0, 25),
            icon: "👨‍💻",
            description: "CTO with a focus on integrating AI in healthcare systems."
        }
    ],
    [
        {
            name: "David Clark",
            role: "CTO",
            percentage: getRandomPercentage(0, 25),
            icon: "👨‍💻",
            description: "CTO specializing in AI-driven medical devices."
        },
        {
            name: "Chef Lorenzo De Luca",
            role: "Michelin-Starred Chef & Food Innovator",
            description: "Uses AI to predict food trends and design experimental recipes. Co-developed a 'smart kitchen assistant' powered by NLP.",
            percentage: getRandomPercentage(0, 25),
            icon: "🍽️"
        }
    ]
];

// Next-Gen EdTech Platform
const edTechEvaluators = [
    [
        {
            name: "Michael Reeves",
            role: "EdTech Product Designer & Cognitive Scientist",
            description: "Led UX for a top adaptive learning startup acquired by Google. Developed AI-based tutoring software for dyslexic students. Former Stanford professor specializing in AI and education.",
            percentage: getRandomPercentage(76, 100),
            icon: "📚"
        },
        {
            name: "Dr. Fatima Hassan",
            role: "AI & Learning Analytics Expert",
            description: "Built predictive learning models for underprivileged students. Published research on AI-based personalized education. Former Chief Learning Scientist at a global EdTech firm.",
            percentage: getRandomPercentage(51, 75),
            icon: "🧠"
        }
    ],
    [
        {
            name: "Carlos Mendez",
            role: "Education Policy & Innovation Strategist",
            description: "Worked with governments to implement AI in national curriculums. Advisor for UNESCO on technology-driven education reforms. Evaluated 50+ EdTech proposals for large-scale funding initiatives.",
            percentage: getRandomPercentage(26, 50),
            icon: "🎓"
        },
        {
            name: "Sarah Chen",
            role: "CEO",
            percentage: getRandomPercentage(0, 25),
            icon: "👩‍💼",
            description: "CEO with a background in leading EdTech companies."
        }
    ],
    [
        {
            name: "John Doe",
            role: "CTO",
            percentage: getRandomPercentage(0, 25),
            icon: "👨‍💻",
            description: "CTO with expertise in developing educational technologies."
        },
        {
            name: "Chef Lorenzo De Luca",
            role: "Michelin-Starred Chef & Food Innovator",
            description: "Uses AI to predict food trends and design experimental recipes. Co-developed a 'smart kitchen assistant' powered by NLP.",
            percentage: getRandomPercentage(0, 25),
            icon: "🍽️"
        }
    ]
];
const set = [greenTechEvaluators, aiHealthEvaluators, edTechEvaluators]
const ThinkingProcess = ({steps, isVisible}) => {

    const [currentStep, setCurrentStep] = useState(0)

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setCurrentStep((prev) => (prev + 1) % steps.length)
            }, 2000)
            return () => clearInterval(interval)
        }
    }, [isVisible, steps.length])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.5}}
                    className="my-4  bg-gray-50 p-4 rounded-lg"
                >
                    {steps.map((step, index) => (
                        <div key={step} className="flex items-start">
                            <div className="flex flex-col items-center">
                                <motion.div
                                    className={`size-2 sm:w-4 sm:h-4 rounded-full ${
                                        index < currentStep ? "bg-green-500" : index === currentStep ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                                    initial={{scale: 0}}
                                    animate={{
                                        scale: index === currentStep ? [1, 1.2, 1] : 1,
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: index === currentStep ? Number.POSITIVE_INFINITY : 0,
                                        repeatType: "reverse",
                                    }}
                                />
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="w-0.5 h-6 bg-gray-300"
                                        initial={{scaleY: 0}}
                                        animate={{scaleY: index < currentStep ? 1 : 0}}
                                        transition={{duration: 0.5}}
                                    />
                                )}
                            </div>
                            <motion.span
                                className={`ml-3 text-xs sm:text-sm ${
                                    index < currentStep
                                        ? "text-green-600"
                                        : index === currentStep
                                            ? "text-blue-600 font-medium"
                                            : "text-gray-500"
                                }`}
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: index * 0.5, duration: 0.5}}
                            >
                                {step}
                            </motion.span>
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default function HowItWorks() {
    const [currentStep, setCurrentStep] = useState(0)
    const [showThinking, setShowThinking] = useState(false)
    const [thinkingSteps, setThinkingSteps] = useState([])
    const [showParticles, setShowParticles] = useState(false)
    const [evaluatorSet, setEvaluatorSet] = useState(set[0])

    const handleProposalClick = (id) => {
        setEvaluatorSet(set[id - 1])
        setThinkingSteps([
            "Thinking...",
            "Analyzing proposal content",
            "Creating context-aware embeddings",
            "Generating meaning-aware vectors",
            "Storing results in database",
        ])
        setShowThinking(true)
        setTimeout(() => {
            setShowThinking(false)
            setCurrentStep(1)
        }, 10000)
    }

    const handleEvaluatorListClick = () => {
        setThinkingSteps([
            "Fetching Evaluators",
            "Matching Their Skills and Availability with Proposal Requirements",
            "Shortlisting the Most Suitable Evaluators",
        ])
        setShowThinking(true)
        setTimeout(() => {
            setShowThinking(false)
            setCurrentStep(2)
        }, 6000)
    }

    const handleRecommendationClick = () => {
        setThinkingSteps([
            "Comparing Evaluators' Expertise with Proposal Needs",
            "Scoring and Ranking Each Evaluator",
            "Creating the Final Recommendation List",
        ])
        setShowThinking(true)
        setTimeout(() => {
            setShowThinking(false)
            setShowParticles(true)
        }, 6000)
    }

    const handleParticlesComplete = () => {
        setShowParticles(false)
        setCurrentStep(3)
    }

    return (
        <article className="flex flex-col gap-4 sm:gap-8 p-6 w-full h-screen overflow-x-scroll pb-32">
            <motion.h1
                className="text-4xl font-bold"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                How it works?
            </motion.h1>
            <FirstStep onProposalClick={handleProposalClick}/>
            {currentStep >= 1 && (
                <>
                    <SecondStep onEvaluatorListClick={handleEvaluatorListClick}/>
                    {currentStep >= 2 && <ThirdStep onRecommendationClick={handleRecommendationClick}/>}
                </>
            )}
            {showParticles && (
                <motion.div className="relative">
                    <ParticleEffect onComplete={handleParticlesComplete}/>
                    <motion.div
                        className="text-4xl font-bold text-center text-primary"
                        initial={{scale: 0, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{delay: 0.5, duration: 0.5}}
                    >
                        Recommendations Ready!
                    </motion.div>
                </motion.div>
            )}
            {currentStep >= 3 && (
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, type: "spring"}}
                >
                    <FourthStep evaluatorSets={evaluatorSet}/>
                </motion.div>
            )}
            <ThinkingProcess steps={thinkingSteps} isVisible={showThinking}/>
        </article>
    )
}

function FirstStep({
                       onProposalClick
                   }) {
    const [selectedProposal, setSelectedProposal] = useState(null)

    const handleProposalClick = (id) => {
        setSelectedProposal(id)
        onProposalClick(id)
    }
    return (
        <SectionLayout
            title="1. Select any proposal"
            decription="Select any proposal from the list below to get started."
        >
            <div className="grid grid-cols-3 overflow-y-auto w-full gap-2 px-2 py-8 sm:p-0"
                 style={{display: "grid", gridTemplateColumns: "200px 200px 200px"}}>
                {mailingLists.map((mailingList) => (
                    <motion.div
                        key={mailingList.id}
                        className={`relative flex flex-col gap-3 bg-white p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out
                        ${
                            selectedProposal === mailingList.id
                                ? "ring-2 ring-blue-500 shadow-lg shadow-blue-100"
                                : "hover:shadow-md border border-gray-200"
                        }`}
                        onClick={() => handleProposalClick(mailingList.id)}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                    >
                        <AnimatePresence>
                            {selectedProposal === mailingList.id && (
                                <motion.div
                                    className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-1"
                                    initial={{opacity: 0, scale: 0.5}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0.5}}
                                    transition={{duration: 0.2}}
                                >
                                    <Check size={16}/>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <h3 className="text-sm sm:text-xl font-semibold text-gray-800">{mailingList.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 font">{mailingList.description}</p>
                    </motion.div>
                ))}
            </div>
        </SectionLayout>
    )
}

function SecondStep({onEvaluatorListClick}) {
    return (
        <SectionLayout title="2. Select Evaluators List"
                       decription="Select any evaluators from the list below to get started.">
            <div className="flex gap-4 overflow-y-scroll"
                 style={{display: "grid", gridTemplateColumns: "215px 215px 215px"}}>
                {discussions.map((discussion) => (
                    <motion.div
                        className="flex flex-col gap-2 bg-white hover:bg-white hover:border-gray-500 p-4 rounded cursor-pointer"
                        onClick={onEvaluatorListClick}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        key={discussion.id}
                    >
                        <div>
                            <p className="text-sm/6 font-semibold text-gray-900">
                                <a href={discussion.href} className="hover:underline">
                                    {discussion.title}
                                </a>
                            </p>
                            <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                                <p>
                                    <a href={discussion.author.href} className="hover:underline">
                                        {discussion.author.name}
                                    </a>
                                </p>
                                <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                                    <circle r={1} cx={1} cy={1}/>
                                </svg>
                                <p>
                                    <time dateTime={discussion.dateTime}>{discussion.date}</time>
                                </p>
                            </div>
                        </div>
                        <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                            <div className="flex -space-x-0.5">
                                <dt className="sr-only">Commenters</dt>
                                {discussion.commenters.map((commenter) => (
                                    <dd key={commenter.id}>
                                        <img
                                            alt={commenter.name}
                                            src={commenter.imageUrl}
                                            className="size-6 rounded-full bg-gray-50 ring-2 ring-white"
                                        />
                                    </dd>
                                ))}
                            </div>
                        </dl>
                    </motion.div>
                ))}
            </div>
        </SectionLayout>
    )
}

function ThirdStep({onRecommendationClick}) {
    return (
        <SectionLayout
            title="3. Click the Recommendation button"
        >
            <motion.button
                className="bg-cyan-600 text-xs sm:text-xl text-gray-50 p-2 sm:px-4 sm:py-4 flex gap-1 sm:gap-4 rounded w-max cursor-pointer items-center"
                onClick={onRecommendationClick}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
            >
                Get AI Recommendation
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 sm:size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                </svg>
            </motion.button>
        </SectionLayout>
    )
}

function FourthStep({evaluatorSets}) {
    const [currentSet, setCurrentSet] = useState(0);

    if (!evaluatorSets) return null
    console.log(evaluatorSets)
    return (
        <motion.div
            className="flex flex-col gap-4"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="flex items-center justify-between">
                <h2 className="text-sm sm:text-3xl font-normal text-gray-800">4. Get instant, AI-optimized evaluator
                    recommendations</h2>
                <div className="flex justify-between items-center">
                    <motion.button
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        onClick={() => setCurrentSet(prev => Math.max(0, prev - 1))}
                        disabled={currentSet === 0}
                        className={`p-2 rounded-full ${
                            currentSet === 0
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-blue-500 hover:bg-blue-50'
                        }`}
                    >
                        ←
                    </motion.button>
                    <motion.button
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        onClick={() => setCurrentSet(prev => Math.min(evaluatorSets.length - 1, prev + 1))}
                        disabled={currentSet === evaluatorSets.length - 1}
                        className={`p-2 rounded-full ${
                            currentSet === evaluatorSets.length - 1
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-blue-500 hover:bg-blue-50'
                        }`}
                    >
                        →
                    </motion.button>
                </div>
            </div>

            <motion.div
                className="grid grid-cols-2 gap-4 overflow-y-scroll grid-custom-col sm:grid-cols-2"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
            >
                {evaluatorSets[currentSet].map((evaluator, index) => (
                    <ProfileCard
                        index={index}
                        key={evaluator.name}
                        title={evaluator.name}
                        role={evaluator.role}
                        description={evaluator.description}
                        percentage={evaluator.percentage}
                    />
                ))}
            </motion.div>

            <div className="flex justify-center items-center mt-4 w-full">
                <div className="flex gap-2">
                    {evaluatorSets.map((_, idx) => (
                        <motion.div
                            key={idx}
                            className={`w-2 h-2 rounded-full ${
                                currentSet === idx ? 'bg-blue-500' : 'bg-gray-200'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function SectionLayout({title, decription, children}) {
    return (
        <motion.div
            className="flex flex-col gap-1 sm:gap-4 w-full"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <h2 className="text-base sm:text-3xl font-semibold text-gray-800">{title}</h2>
            <p className="text-sm sm:text-base font-semibold text-gray-600">{decription}</p>
            {children}
        </motion.div>)
}


const discussions = [
    {
        id: 1,
        title: 'Technical Evaluators',
        href: '#',
        author: {name: 'Leslie Alexander', href: '#'},
        date: '2d ago',
        dateTime: '2023-01-23T22:34Z',
        status: 'active',
        totalComments: 24,
        commenters: [
            {
                id: 12,
                name: 'Emma Dorsey',
                imageUrl:
                    'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 6,
                name: 'Tom Cook',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 4,
                name: 'Lindsay Walton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 16,
                name: 'Benjamin Russel',
                imageUrl:
                    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 23,
                name: 'Hector Gibbons',
                imageUrl:
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
    },
    {
        id: 3,
        title: 'Industry & Domain Expert ',
        href: '#',
        author: {name: 'Dries Vincent', href: '#'},
        date: '3d ago',
        dateTime: '2023-01-22T12:59Z',
        status: 'resolved',
        totalComments: 22,
        commenters: [
            {
                id: 19,
                name: 'Lawrence Hunter',
                imageUrl:
                    'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 21,
                name: 'Angela Fisher',
                imageUrl:
                    'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 14,
                name: 'Jenny Wilson',
                imageUrl:
                    'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 16,
                name: 'Benjamin Russel',
                imageUrl:
                    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
    },
    {
        id: 5,
        title: 'Business & Impact Assessor',
        href: '#',
        author: {name: 'Courtney Henry', href: '#'},
        date: '5d ago',
        dateTime: '2023-01-20T20:12Z',
        status: 'active',
        totalComments: 15,
        commenters: [
            {
                id: 11,
                name: 'Kristin Watson',
                imageUrl:
                    'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 6,
                name: 'Tom Cook',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 10,
                name: 'Emily Selman',
                imageUrl:
                    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 16,
                name: 'Benjamin Russel',
                imageUrl:
                    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
    },
]
