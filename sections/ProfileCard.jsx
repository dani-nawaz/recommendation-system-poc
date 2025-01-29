import {motion} from "framer-motion"
import {User} from "lucide-react"
import React from "react"

export default function ProfileCard
    ({title, description,percentage, index}) {
    const color = percentage > 50 ? "bg-green-100" : "bg-red-100"
    const text = percentage > 50 ? "text-green-600" : "text-red-600"

    return (
        <motion.div
            className="bg-gray-50 rounded overflow-hidden w-full flex flex-col justify-between"
            key={title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="p-2">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-400"/>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-sm font-semibold text-gray-900 mb-1">{title}</h2>
                        <p className="text-sm text-gray-500">{description}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="1"/>
                            <circle cx="12" cy="5" r="1"/>
                            <circle cx="12" cy="19" r="1"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="mt-2 relative">
                <motion.div
                    className={`${color} text-center py-2  h-8`}
                    initial={{width: 0}}
                    animate={{width: `${percentage}%`}}
                    transition={{duration: 1, delay: 0.5}}
                >
                    <span className={`text-sm absolute font-semibold ${text} left-[50%]`}>{percentage}%</span>
                </motion.div>
            </div>
        </motion.div>
    )
}

