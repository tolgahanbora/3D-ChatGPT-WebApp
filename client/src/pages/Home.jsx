import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'


import{
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import state from '../store'
import { CustomButton } from '../components'


function Home() {


    const snap = useSnapshot(state)

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('down')}>
                <motion.header>
               <img 
               src='./threejs.png'
               alt="logo"
               className='w-8 h-8 object-contain'
               />
                </motion.header>

                <motion.div className='home-content' {
                    ...headContainerAnimation}>
                        <h1 className='head-text'> HADİ <br className='xl:block hidden' />TASARLA</h1>
                </motion.div>
                <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                    <p className='max-w-md font-normal text-gray-600' >
                        Ücretsiz bir şekilde eşsiz tişörtünü ya da formanı tasarla. Markanı bu yapay zeka ile oluştur. <strong>Hayalinin sınırı yok</strong> {" "}
                        ve kendi tarzını yarat.
                    </p>
                    <CustomButton 
                    type="filled"
                    title="Tasarla"
                    handleClick={() => state.intro = false}
                    customStyles= "w-fit px-4 py-2.5 font-bold text-sm"
                    />
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home