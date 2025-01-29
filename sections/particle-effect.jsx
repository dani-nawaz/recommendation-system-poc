"use client"

import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const Particle = ({ x, y, size, color }) => (
    <motion.div
        className="absolute rounded-full"
        style={{
            x,
            y,
            width: size,
            height: size,
            backgroundColor: color,
        }}
        initial={{ opacity: 1, scale: 0 }}
        animate={{
            opacity: [1, 1, 0],
            scale: [0, 1, 1],
            y: y - Math.random() * 100 - 50,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
    />
)

export const ParticleEffect = ({ onComplete }) => {
    const containerRef = useRef(null)
    const particlesRef = useRef([])

    useEffect(() => {
        if (containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect()
            particlesRef.current = Array.from({ length: 100 }, () => ({
                x: width / 2 + (Math.random() - 0.5) * 200,
                y: height / 2 + (Math.random() - 0.5) * 200,
                size: Math.random() * 15 + 5,
                color: ["#60A5FA", "#34D399", "#FBBF24", "#F87171", "#A78BFA"][Math.floor(Math.random() * 5)],
            }))
        }
        const timer = setTimeout(onComplete, 1500)
        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
            {particlesRef.current.map((particle, index) => (
                <Particle key={index} {...particle} />
            ))}
        </div>
    )
}

