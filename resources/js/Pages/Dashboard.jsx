import Menu from '@/Components/section/menu';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MenuLayout from '@/Layouts/MenuLayout';
import { Head, Link,usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Selamat Datang {user.name }
                </h2>
            }
        >
            <Head title="Dashboard" />
                

                <MenuLayout title='Riwayat Pembelian'>
                {
                    
                        user.coffe.map((c)=>{
                            console.log(c)
                            return(<>
                            <Menu coffe={c} title='Riwayat'/>
                            </>)
                        })

                }   
                </MenuLayout>

                
            
           
        </AuthenticatedLayout>
    );
}
