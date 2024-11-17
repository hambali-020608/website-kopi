import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';



export default function GuestLayout({ children, title }) {
    return (
        <div  className="bg-[url('images/coffe-background.jpg')] bg-cover bg-no-repeat bg-fixed bg-center  flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
            <div>
                <Link href="/" className='text-balance text-5xl font-semibold tracking-tight  sm:text-7xl text-[#ECC4A0]'>
                    {title}
                </Link>
            </div>

            <div className="mt-6  w-full border-solid border-2 border-black overflow-hidden  bg-transparent px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                {children}
        </div>
        </div>
    );
}
