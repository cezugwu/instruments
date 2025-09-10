import {} from 'react';

import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return(
        <div className='pt-10 space-y-12'>
            <div className='text-8xl font-bold text-slate-300 '>BUILD. GROW. SERVE.</div>
            <div className='space-y-4 pb-20'>
                <div>We are investing $3 million over three years in our <br />
                    Build | Grow | Serve program, created to support and empower Black and <br />
                    underrrepresented communities
                </div>
                <div className='flex items-center gap-1 text-black w-fit p-2 rounded-xl bg-white font-bold hover:opacity-50 cursor-pointer duration-300'>
                    Learn More <ArrowRight strokeWidth={2.5} />
                </div>
            </div>
            <div className='space-y-20'>
                <img className='object-cover bg-cover bg-center w-[90%] mx-auto'
                src="https://cezugwu.github.io/instruments/2.jpg" alt="" />
                <div className='text-center font-medium text-3xl'>
                We enrich human lives through <br />
                the thoughtfull application of <br />
                design and technology</div>
            </div>
        </div>
    );
}

export default Hero;