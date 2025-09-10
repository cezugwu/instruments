import {} from 'react';
import { ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';


const navInfo = [
    {label:'[HOME]', path:''},
    {label:'WHAT WE DO', path:''},
    {label:'WORK', path:''},
    {label:'WHO WE ARE', path:''},
    {label:'BEING HERE', path:''},
    {label:'CAREERS', path:''},
    {label:'CONTACT', path:''},
    {label:'PRIVACY', path:''},
]

const Footer = () => {
    return(
        <div className='pt-20'>
            <div className='grid grid-flow-col grid-rows-4 gap-4 text-[0.8em]'>
                {navInfo.map((item, index) => (
                    <a className='w-fit hover:text-yellow-500 duration-300' key={index} href="">{item.label}</a>
                ))}
            </div>
            <div className='flex gap-10 items-center justify-end pt-10'>
                <div className='flex items-center gap-1 text-black w-fit p-2 rounded-xl bg-white font-bold hover:opacity-50 cursor-pointer duration-300 mt'>
                    NEWSLETTER  <ArrowRight strokeWidth={2.5} />
                </div>
                <Instagram className='size-5 hover:scale-[1.5] duration-300' />
                <Twitter className='size-5 hover:scale-[1.5] duration-300' />
                <Linkedin className='size-5 hover:scale-[1.5] duration-300' />
            </div>
        </div>
    );
}

export default Footer;