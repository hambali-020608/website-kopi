import Article from '@/Components/Article';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PostLayout from '@/Layouts/PostLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Blog({post}) {
    const [state,setState]=useState(0)
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
