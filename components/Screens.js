import Link from 'next/link'
 

const Screens = () => {
    return (
        <div className='flex space-x-4 bg-zinc-900 p-6'>
            <Link href='/about' className='bg-zinc-400 rounded-xl py-2 px-10 text-slate-950'>About</Link>
            <Link href='/contact' className='bg-zinc-400 rounded-xl py-2 px-10 text-slate-950'>Contact</Link>
            <Link href='/post' className='bg-zinc-400 rounded-xl py-2 px-10 text-slate-950'>Post</Link>
            <Link href='/search' className='bg-zinc-400 rounded-xl py-2 px-10 text-slate-950'>Search</Link>
            <Link href='/team' className='bg-zinc-400 rounded-xl py-2 px-10 text-slate-950'>Team</Link>
        </div>
    );
}

export default Screens;