import CartButton from '@/Components/cartButton';
import Menu from '@/Components/section/menu';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MenuLayout from '@/Layouts/MenuLayout';
import { Head, Link,usePage } from '@inertiajs/react';
import axios from 'axios';

export default function Dashboard() {
   
    function HandleAddToCart(CoffeId){
        axios.post(route('coffe.store'),{
            'coffe_id': CoffeId,
            'quantity':1
    }).then((response)=>{
        console.log(response.data)
        window.location.reload()
    }).catch(error=>console.error(error))
    }  
    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-[#EBB25B] dark:text-gray-200 ">
                    Selamat Datang {user.name }
                </h2>
            }
        >
            <Head title="Dashboard" />
         

                <MenuLayout title='Riwayat Pembelian'>
                {
                        user.coffe.map((c,i)=>{
                            return(
                            <div key={i}>
                            <Menu  coffe={c}  title='Riwayat'>
                                <CartButton  onClick={()=>HandleAddToCart(c.id)}>
                                {user.coffe.length > 0 ? (
        <span key={c.id}>
            {c.buys.reduce((total, c) => total+ c.quantity, 0)}
        </span>
    ) : (
        <span>Tidak ada kopi yang dibeli.</span>
    )}
                                </CartButton >
                            </Menu>
                            </div>)
                        })

                }   
                
                </MenuLayout>

                
            
           
        </AuthenticatedLayout>
    );
}
