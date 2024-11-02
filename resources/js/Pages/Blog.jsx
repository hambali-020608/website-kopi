import Article from '@/Components/Article';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PostLayout from '@/Layouts/PostLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState,useEffect } from 'react';

export default function Blog({post}) {
    
    const { flash } = usePage().props
    const [successMessage, setSuccessMessage] = useState(flash.success);

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => setSuccessMessage(null), 3000); // 3000ms = 3 detik
            return () => clearTimeout(timer); // Bersihkan timer saat komponen unmount
        }
    }, [successMessage]);


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Blog
                </h2>
            }
        >
            <Head title="Blog" />

            <div className="py-12">
          
            {successMessage && (
                  <div class="flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
                  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-medium">{successMessage}</span> 
                  </div>
                  </div>
            )}
          
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                        <PostLayout type="All">
                            {post.map((p)=>{
                                return(
                                    <Article post={p} type="All" />

                                )
                            })}
                        </PostLayout>
                           
                           
       
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
