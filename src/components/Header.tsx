import { useState } from 'react';
import { Menu, X } from 'lucide-react';


const navInfo = [
    {label:'WHAT WE DO', path:''},
    {label:'WHO WE ARE', path:''},
    {label:'BEING HERE', path:''},
    {label:'CAREERS', path:''},
]
const Header = () => {
    const [menu, setMenu] = useState(false);
    return(
        <div>
            <div className='flex justify-between items-center h-16'>
                <div className='font-bold'>INSTRUMENT</div>
                <div className='hidden md:flex justify-around gap-10 text-[0.7em]'>
                    {navInfo.map((item, index) => (
                        <a key={index} className='font-bold hover:text-yellow-500 hover:[text-shadow: 0_0_10px_#3b82f6, 0_0_20px_#3b82f6] duration-300'
                        href="">{item.label}</a>
                    ))}
                </div>
                <div className='md:hidden cursor-pointer select-none' onClick={() => setMenu(!menu)} >
                    {!menu ? <Menu className='size-7' /> : <X className='size-7' />}
                </div>
            </div>
            {menu &&
                <div className='md:hidden flex flex-col gap-10 text-[0.7em] border-t py-4'>
                    {navInfo.map((item, index) => (
                        <a key={index} className='font-bold hover:text-yellow-500 hover:[text-shadow: 0_0_10px_#3b82f6, 0_0_20px_#3b82f6] duration-300 w-fit'
                        href="">{item.label}</a>
                    ))}
                </div>
            }
        </div>
    );
}

export default Header;