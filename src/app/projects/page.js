import CardProjects from '@/components/CardProjects'
import React from 'react'
import CardEcommerce from '@/components/CardEcommerce'
import CardApi from '@/components/CardApi'
import CardCrud from '@/components/CardCrud'
import CardLanding from '@/components/CardLanding'

const pageProjects = () => {
  return (
    <div className='bg-black grid grid-cols-2 w-full h-screen justify-center items-center 
     text-white'>

      <div >
        <CardApi />
      </div>
      <div>
        <CardCrud />
      </div>
      <div>
        <CardLanding />
      </div>

      <div >
        <CardEcommerce />
      </div>

    

    </div>
  )
}

export default pageProjects