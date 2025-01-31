"use client"
import React from "react"
import { motion } from "framer-motion"
import { User } from "lucide-react"


export default function ProfileCard({ title, description, percentage, role, index }) {
    const getProgressColors = (percentage) => {
        if (percentage >= 75) {
            return {
                bg: "bg-gradient-to-r from-emerald-50 to-emerald-100",
                bar: "bg-gradient-to-r from-emerald-400 to-emerald-500",
                text: "text-emerald-700",
            }
        } else if (percentage >= 50) {
            return {
                bg: "bg-gradient-to-r from-blue-50 to-blue-100",
                bar: "bg-gradient-to-r from-blue-400 to-blue-500",
                text: "text-blue-700",
            }
        } else if (percentage >= 25) {
            return {
                bg: "bg-gradient-to-r from-amber-50 to-amber-100",
                bar: "bg-gradient-to-r from-amber-400 to-amber-500",
                text: "text-amber-700",
            }
        } else {
            return {
                bg: "bg-gradient-to-r from-rose-50 to-rose-100",
                bar: "bg-gradient-to-r from-rose-400 to-rose-500",
                text: "text-rose-700",
            }
        }
    }

    const colors = getProgressColors(percentage)

    return (
        <motion.div
            className="bg-white rounded-xl overflow-hidden w-full flex flex-col justify-between  shadow-sm hover:shadow-md transition-shadow duration-200"
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="p-4 space-y-3">
                <div className="flex items-end gap-2">
                    <motion.div
                        initial={{scale: 0.8}}
                        animate={{scale: 1}}
                        transition={{delay: index * 0.1 + 0.2, type: "spring"}}
                        className="size-6 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center shadow-inner"
                    >
                        <User className="size-3 sm:w-6 sm:h-6 text-gray-500"/>
                    </motion.div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">{title}</h2>
                                <p className="text-xs sm:text-sm font-medium text-gray-500">{role}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>

            </div>
            <div className={`${colors.bg} p-4 mt-2`}>
                <div className="relative h-2 bg-white/50 rounded-full overflow-hidden">
                    <motion.div
                        className={`absolute inset-y-0 left-0 ${colors.bar} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className={`text-sm font-semibold ${colors.text} mt-2 text-center`}
                >
                    {percentage}% Recommended
                </motion.p>
            </div>
        </motion.div>
    )
}

