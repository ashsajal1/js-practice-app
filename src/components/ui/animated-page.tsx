import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

export default function AnimatedPage({ children }: PropsWithChildren) {
    return (
        <motion.div initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
                type:'spring',
                duration: 1
            }}
            exit={{ x: -1000 }}>{children}</motion.div>
    )
}
