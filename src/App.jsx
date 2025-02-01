'use client'
import React, {useEffect, useState} from 'react'
import HowItWorks from "../sections/HowItWorks.jsx";
import Case from "../sections/Case.jsx";
import Problem from "../sections/Problem.jsx";
import {Solution} from "../sections/Solution.jsx";
import Model from "../sections/model.jsx";

function App() {
    return (<>
        <Layout>
            <Case/>
            <Problem/>
            <Solution/>
            <HowItWorks/>
            <Model/>
        </Layout>
    </>)
}

export default App

const Layout = ({children}) => {
    const [activeSection, setActiveSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const handleScroll = (e) => {
        console.log("sdads")
        if (isScrolling) return;

        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 1000);

        if (e.deltaY > 0 && activeSection < children.length - 1) {
            setActiveSection(prev => prev + 1);
        } else if (e.deltaY < 0 && activeSection > 0) {
            setActiveSection(prev => prev - 1);
        }
    };

    useEffect(() => {

        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, [activeSection, children.length, isScrolling]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {React.Children.map(children, (child, index) => (
                <div
                    className="absolute w-screen h-screen transition-all duration-1000 ease-in-out"
                    style={{
                        transform: `translateY(${(index - activeSection) * 100}vh)`,
                        opacity: Math.abs(index - activeSection) <= 1 ? 1 : 0,
                    }}
                >
                    <div className="w-full h-full">
                        <section className="px-4 sm:px-26 h-screen">
                            <div className="sm:border-l border-gray-400 px-2 md:px-6 h-full flex items-center">
                                {React.cloneElement(child, { setActiveSection })}
                            </div>
                        </section>
                    </div>
                </div>
            ))}

            {/* Navigation dots */}
            <NavigationButtons activeSection={activeSection} setActiveSection={setActiveSection} totalSections={children.length}/>
            {/* <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-40">
                {React.Children.map(children, (_, index) => (
                    <button
                        onClick={() => setActiveSection(index)}
                        className={`size-5 rounded-full transition-all duration-300 ${
                            index === activeSection
                                ? 'bg-black size-6'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to section ${index + 1}`}
                    />
                ))}
            </div> */}
        </div>
    );
};

import { ChevronUp, ChevronDown } from "lucide-react"


function NavigationButtons({ activeSection, setActiveSection, totalSections }) {
  const goToPreviousSection = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1)
    }
  }

  const goToNextSection = () => {
    if (activeSection < totalSections - 1) {
      setActiveSection(activeSection + 1)
    }
  }

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
      <button
        onClick={goToPreviousSection}
        className={`p-1 sm:p-2 rounded-full transition-all duration-300 ${
          activeSection === 0 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"
        }`}
        disabled={activeSection === 0}
        aria-label="Go to previous section"
      >
        <ChevronUp className="size-6 sm:size-8" />
      </button>
      <button
        onClick={goToNextSection}
        className={`p-1 sm:p-2 rounded-full transition-all duration-300 ${
          activeSection === totalSections - 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
        disabled={activeSection === totalSections - 1}
        aria-label="Go to next section"
      >
        <ChevronDown className="size-6 sm:size-8" />
      </button>
    </div>
  )
}

