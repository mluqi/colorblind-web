import Image from 'next/image'
import GlitchText from '@/app/components/GlitchText/GlitchText'

const Hero = () => {
  return (
    <section id='home' className='h-full xl:pt-8 pb-8'>
        <div className='container mx-auto h-full'>
            <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 pt-6 xl:gap-10'>
                <div className='text-center xl:text-left xl:order-none'>
                    <h1>
                        Not Bad For Your Vaping
                    </h1>

                </div>
            </div>

        </div>
      
    </section>
  )
}

export default Hero
