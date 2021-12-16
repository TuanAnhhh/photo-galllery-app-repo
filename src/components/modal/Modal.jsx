import React from 'react'
import './modal.css'
import {motion} from 'framer-motion'

function Modal({selectedImage, setSelectedImage, isBigImage}) {
    const handleClickClose = (e) => {
        if(e.target.classList.contains('modal')){
            setSelectedImage(null)
        }
       
    }
    

    return (
        <motion.div className="modal" onClick={handleClickClose}
            // initial={{opacity:0}}
            // animate={{opacity:1}}
        >
            <motion.img src={selectedImage} alt="img"
                 initial={{ y: "-50vh" }}
                 animate={{ y: 0 }}
                 transition={{ type: "spring", stiffness: 100 }}
             />
        </motion.div>
   
    )
}

export default Modal
