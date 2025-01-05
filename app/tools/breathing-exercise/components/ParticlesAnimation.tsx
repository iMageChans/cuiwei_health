'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
    id: number
    x: number
    y: number
    duration: number
    delay: number
}

export default function ParticlesAnimation() {
    const [particles, setParticles] = useState<Particle[]>([])

    useEffect(() => {
        // 在客户端初始化粒子
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5
        }))
        setParticles(newParticles)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <div key={particle.id} className="absolute">
                    <div className="w-2 h-2 bg-white/10 rounded-full backdrop-blur-sm">
                        <motion.div
                            initial={{
                                x: `${particle.x}vw`,
                                y: `${particle.y}vh`,
                                scale: 0,
                                opacity: 0
                            }}
                            animate={{
                                x: [`${particle.x}vw`, `${(particle.x + 20) % 100}vw`],
                                y: [`${particle.y}vh`, `${(particle.y + 20) % 100}vh`],
                                scale: [0, 1, 0],
                                opacity: [0, 0.2, 0]
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
