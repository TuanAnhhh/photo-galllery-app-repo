import React, {useEffect} from 'react'
import './progressBar.css'
import useStorage from '../../hook/useStorage'
import './progressBar.css'

import {motion} from 'framer-motion'
function ProgressBar({file, setFile}) {
    const {url, progress}  = useStorage(file)
    useEffect(() => {
        if(url){
            setFile(null)
        }
        
    }, [url, setFile])
    console.log(progress);
    return (
        <motion.div 
            className="progressBar"
            initial={{width:0}}
            animate={{width: progress}}
        >

        </motion.div>
    )
}

export default ProgressBar
