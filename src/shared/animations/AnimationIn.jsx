import { motion } from "framer-motion"

const AnimationTitle = ({children,direction}) => {

  const directionVariants = {
    topInitial   : { opacity:0, translateY:-20},
    topFinal     : { opacity:1, translateY:0},

    bottomI : { opacity:0, translateY: 20},
    bottomF : { opacity:1, translateY: 0},

    leftI  : { opacity:0, translateX:-20},
    leftF  : { opacity:1, translateX:0},

    rightI : { opacity:0, translateX: 20},
    rightF : { opacity:1, translateX:0},
  }
  
  return (
    <motion.div
        variants={directionVariants}
        initial={ 
          ((direction === 'top')    && 'topInitial') ||  ((direction === 'bottom') && 'bottomI') ||
          ((direction === 'left')   && 'leftI')      ||  ((direction === 'right')  && 'rightI')
        }

        animate={ 
          ((direction === 'top') && 'topFinal')   ||   ((direction === 'bottom') && 'bottomF') ||
          ((direction === 'left') && 'leftF')     ||   ((direction === 'right') && 'rightF') 
        }

        transition={{duration:0.5, delay:0.1}}
        style={{
          width:"100%",
          display:"flex",
          borderBottom: "none",
          gap:"5px"
        }}
    >
        {children}
    </motion.div>
  )
}

export default AnimationTitle