"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { CheckIcon, Cross2Icon, DotFilledIcon } from "@radix-ui/react-icons"
import { toggleComplete } from './actions'
import { useState } from 'react'

const ToggleCompleteButton = ({
  isCompleted,
  id,
  showButton
}: {
  isCompleted: boolean
  id: number
  showButton: boolean
}) => {

  const [isCompletionLoading, setIsCompletionLoading] = useState(false)

  const handleClick = async () => {
    if (isCompletionLoading) return
    setIsCompletionLoading(true)
    await toggleComplete(id)
    setIsCompletionLoading(false)
  }

  return (
    <AnimatePresence>
      {(showButton || isCompletionLoading) && (
        <motion.div
          onClick={handleClick}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
          className="border border-white/20 p-1.5 rounded-full flex itemscenter justify-center w-fit absolute top-3 right-3 hover:bg-white/5 cursor-pointer transition-colors duration-200"
        >
          {isCompletionLoading ? <DotFilledIcon className='animate-ping' /> : isCompleted ? <Cross2Icon /> : <CheckIcon />}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ToggleCompleteButton
