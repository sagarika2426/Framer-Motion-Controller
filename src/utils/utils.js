export function generatcode({savedParams}){
    return `
     <motion.div
        initial={{ opacity: 1, scale: 1, rotate: 0 }}
        animate={{
        
                opacity:${savedParams.opacity},
                scale: ${savedParams.scale},
                rotate: ${savedParams.rotate ?? 0},
                width: ${savedParams.width},
                height: ${savedParams.height},
                transition: { duration: ${savedParams.duration} },
              }
        }
        whileHover={{ scale: 1.2 }}
        className="rounded-xl cursor-pointer"
        style={{
          width: ${savedParams.width},
          height: ${savedParams.height},
          backgroundColor: ${savedParams.backgroundColor},
        }}
      />
    `

}
