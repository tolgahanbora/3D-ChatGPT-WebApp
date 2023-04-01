import React from 'react'

import CustomButton from './CustomButton'



function AIPicker({prompt, setPrompt, generatingImg, handleSubmit}) {



  return (
    <div className='aipicker-container'>
      <textarea className='aipicker-textarea' rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)} />
    <div className='flex flex-wrap gap-3'>
      {generatingImg ? (

        <CustomButton
          type="outline"
          title="Yapay Zekadan İste"
          customStyles="text-xs"
          />

      ) : (
        <>
          <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => handleSubmit('logo')}
          />
              <CustomButton 
          type="filled"
          title="Full"
          handleClick={() => handleSubmit('full')}
          />
        </>
      ) }
    </div>
      
    </div>
  )
}

export default AIPicker