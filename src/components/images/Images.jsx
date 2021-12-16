import React from 'react'
import useFirestore from '../../hook/useFirestore'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './images.css'
import {motion} from 'framer-motion'
function Images({setSelectedImage}) {
    const {docs} = useFirestore('images')
    const handleOnclick = (value) => {
        console.log(value);
        setSelectedImage(value)
    }
    
    return (
        <div className="images">
            {docs && docs.map(image => (
                <motion.div 
                    className="images__item" 
                    key={image.id}
                    whileHover={{opacity:1}}
                    layout
                    >
                    <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                    >
                        <LazyLoadImage
                            alt="img"
                            src={image.url}
                            onClick={()=> handleOnclick(image.url)}
                            effect="blur"
                            />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}

export default Images
