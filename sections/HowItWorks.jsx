"use client"

import React, {useEffect, useState} from "react"
import {AnimatePresence, motion} from "framer-motion"
import {ParticleEffect} from "./particle-effect"
import ProfileCard from "./ProfileCard"
import { use } from "react"

const mailingLists = [
    {id: 1, title: "Newsletter", description: "Last message sent an hour ago", users: "621 users"},
    {id: 2, title: "Existing customers", description: "Last message sent 2 weeks ago", users: "1200 users"},
    {id: 3, title: "Trial users", description: "Last message sent 4 days ago", users: "2740 users"},
]

const ThinkingProcess = ({ steps, isVisible}) => {

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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="my-4 -mt-4 bg-gray-50 p-4 rounded-lg"
          >
            {steps.map((step, index) => (
              <div key={step} className="flex items-start">
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`w-4 h-4 rounded-full ${
                      index < currentStep ? "bg-green-500" : index === currentStep ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    initial={{ scale: 0 }}
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
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: index < currentStep ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
                <motion.span
                  className={`ml-3 ${
                    index < currentStep
                      ? "text-green-600"
                      : index === currentStep
                        ? "text-blue-600 font-medium"
                        : "text-gray-500"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.5, duration: 0.5 }}
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

    const handleProposalClick = () => {
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
        <article className="flex flex-col gap-8 p-6">
            <motion.h1
                className="text-4xl font-bold"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                How it works?
            </motion.h1>
            <FirstStep onProposalClick={handleProposalClick}/>
            <FourthStep/>
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
                    <FourthStep/>
                </motion.div>
            )}
            <ThinkingProcess steps={thinkingSteps} isVisible={showThinking}/>
        </article>
    )
}

function FirstStep({
                       onProposalClick
                   }) {
    return (
        <motion.div
            className="flex flex-col gap-4"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <h2 className="text-2xl">1. Select Any Proposal</h2>
            <p className="text-lg">Select any proposal from the list below to get started.</p>
            <div className="flex gap-4">
                {mailingLists.map((mailingList) => (
                    <motion.div
                        key={mailingList.id}
                        className="flex flex-col gap-2 bg-gray-50 hover:bg-white hover:border-gray-500 p-4 rounded cursor-pointer"
                        onClick={onProposalClick}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        <h3 className="text-lg font-bold">{mailingList.title}</h3>
                        <p className="text-sm">{mailingList.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

function SecondStep({onEvaluatorListClick}) {
    return (
        <motion.div
            className="flex flex-col gap-4"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <h2 className="text-2xl">2. Select Evaluators List</h2>
            <p className="text-lg">Select any evaluators from the list below to get started.</p>
            <div className="flex gap-4">
                {mailingLists.map((mailingList) => (
                    <motion.div
                        key={mailingList.id}
                        className="flex flex-col gap-2 bg-gray-50 hover:bg-white hover:border-gray-500 p-4 rounded cursor-pointer"
                        onClick={onEvaluatorListClick}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        <h3 className="text-lg font-bold">{mailingList.title}</h3>
                        <p className="text-sm">{mailingList.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

function ThirdStep({onRecommendationClick}) {
    return (
        <motion.div
            className="flex flex-col gap-4"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <h2 className="text-2xl">
                3. Click the <span className="text-cyan-700">Recommendation</span> button
            </h2>
            <motion.button
                className="bg-cyan-600 text-xl text-gray-50 px-4 py-4 flex gap-4 rounded w-max cursor-pointer items-center"
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
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                </svg>
            </motion.button>
        </motion.div>
    )
}

function FourthStep() {
    const [currentSet, setCurrentSet] = useState(0);
    const evaluatorSets = [
        [
            { name: "Sarah Chen", role: "CEO", percentage: 80, icon: "👩‍💼" },
            { name: "John Doe", role: "CTO", percentage: 70, icon: "👨‍💻" },
            { name: "Emma Watson", role: "CFO", percentage: 75, icon: "👩‍💼" }
        ],
        [
            { name: "Mike Ross", role: "CTO", percentage: 85, icon: "👨‍💻" },
            { name: "Rachel Green", role: "COO", percentage: 65, icon: "👩‍💼" },
            { name: "David Clark", role: "CTO", percentage: 90, icon: "👨‍💻" }
        ]
    ];

    return (
        <motion.div
            className="flex flex-col gap-4"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="flex items-center justify-between">
<h2 className="text-2xl">4. Get instant, AI-optimized evaluator recommendations</h2>
            <div className="flex justify-between items-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                className="flex gap-4"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
            >
                {evaluatorSets[currentSet].map((evaluator, index) => (
                    <ProfileCard 
                        index={index}
                        key={evaluator.name}
                        title={evaluator.name}
                        description={evaluator.role}
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

