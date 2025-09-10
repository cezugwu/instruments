import { ArrowRight } from 'lucide-react';
import {} from 'react';


const Section = () => {
    return(
        <div className='pt-20 space-y-20'>
            <div className='md:flex justify-around items-center space-y-10 md:space-y-0'>
                <img className='object-cover bg-cover bg-center w-[80%] md:w-[50%]'
                src="../3.jpg" alt="" />
                <div className=''>
                    In the summer of 2020, we <br />
                    reported our representation data <br />
                    and committed to doing so <br />
                    annually. One year later, we are <br /> 
                    pleased to share an update on our <br /> 
                    goals, our progress, and the work <br />
                    that still need to be done. <br />
                    <div className='flex items-center gap-1 text-black w-fit p-2 rounded-xl bg-white font-bold hover:opacity-50 cursor-pointer duration-300 mt-8'>
                        Learn More <ArrowRight strokeWidth={2.5} />
                    </div>
                </div> 
            </div>
            <div className='md:flex flex-row-reverse justify-around items-center space-y-10 md:space-y-0'>
                <img className='object-cover bg-cover bg-center w-[80%] md:w-[50%]'
                src="../4.jpg" alt="" />
                <div className='flex items-end flex-col md:block'>
                    In the summer of 2020, we <br />
                    reported our representation data <br />
                    and committed to doing so <br />
                    annually. One year later, we are <br /> 
                    pleased to share an update on our <br /> 
                    goals, our progress, and the work <br />
                    that still need to be done. <br />
                    <div className='flex items-center gap-1 text-black w-fit p-2 rounded-xl bg-white font-bold hover:opacity-50 cursor-pointer duration-300 mt-8'>
                        Learn More <ArrowRight strokeWidth={2.5} />
                    </div>
                </div> 
            </div>
            <div className='md:flex justify-around items-center space-y-10 md:space-y-0'>
                <img className='object-cover bg-cover bg-center w-[80%] md:w-[50%]'
                src="../5.jpg" alt="" />
                <div className=''>
                    In the summer of 2020, we <br />
                    reported our representation data <br />
                    and committed to doing so <br />
                    annually. One year later, we are <br /> 
                    pleased to share an update on our <br /> 
                    goals, our progress, and the work <br />
                    that still need to be done. <br />
                    <div className='flex items-center gap-1 text-black w-fit p-2 rounded-xl bg-white font-bold hover:opacity-50 cursor-pointer duration-300 mt-8'>
                        Learn More <ArrowRight strokeWidth={2.5} />
                    </div>
                </div> 
            </div>

            <div className='py-12 flex flex-col justify-center items-center'>
                <div className='text-3xl font-semibold py-8 text-center'>
                    Explore a few of our most <br /> 
                    impactful projects
                </div>
                <div>
                    <div className='flex items-center gap-1 text-black w-fit p-2 rounded-xl bg-white font-bold hover:opacity-50 cursor-pointer duration-300'>
                        Learn More <ArrowRight strokeWidth={2.5} />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 space-y-8'>
                <div className='w-[80%] mx-auto space-y-4'>
                    <img className='' src="../6.jpg" alt="" />
                    <div className='text-2xl font-medium'>Levi's</div>
                    <div className='text-[0.8em]'>
                        we partnered with levi's, an icon of American industry and <br />
                        culture, to reimagine levi.com for a new generation of <br />
                        shoppers and the digital future of retail.
                    </div>
                </div>
                <div className='w-[80%] mx-auto space-y-4'>
                    <img className='' src="../2.jpg" alt="" />
                    <div className='text-2xl font-medium'>Dropbox Brand Campaign</div>
                    <div className='text-[0.8em]'>
                        Dropbox is on a path to becoming a multi-product company. <br />
                        To bring their customer new and old along for that journey, <br />
                        We helped reimagine how Dropbox engages with their <br />
                        audience.
                    </div>
                </div>
            </div>
            <div className='flex justify-around text-xl font-bold py-4'>
                <div>Better</div>
                <div>Facebook</div>
                <div>UMPQUA</div>
            </div>

            <div className='text-center space-y-8 flex flex-col items-center'>
                <div className='text-2xl font-semibold text-center'>we'd love to be your partner</div>
                <div className='flex items-center gap-1 text-black w-fit p-2 rounded-xl bg-white font-bold hover:opacity-50 cursor-pointer duration-300'>
                        Learn More <ArrowRight strokeWidth={2.5} />
                </div>
            </div>
        </div>
    );
}


export default Section;