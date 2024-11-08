import CartButton from "@/Components/cartButton";
import NavBar from "@/Components/NavBar";
import NavLink from "@/Components/NavLink";
import About from "@/Components/section/about";
import Footer from "@/Components/section/footer";
import Hero from "@/Components/section/hero";
import Menu from "@/Components/section/menu";
import MenuLayout from "@/Layouts/MenuLayout";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import { useEffect } from "react";

export default function Welcome({ coffe,auth}) {

    

    function HandleAddToCart(CoffeId){
        axios.post(route('coffe.store'),{
            'coffe_id': CoffeId,
            'quantity':1
    }).then((response)=>{
        console.log(response.data)
        window.location.reload()
  
        
    }).catch(error=>console.error(error))


    }

  

    return (
        <>
            <Head title="Home" />
            <NavBar >
                {console.log(auth.user)}
                
                {auth.user ? (
                    <>

                    <Link
                        href={route("dashboard")}
                        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#EBB25B] md:p-0 dark:text-white md:dark:text-blue-500"
                    >
                        Dashboard
                    </Link>
                    <Link className="inline-flex items-center rounded-lg bg-primary-700 px-5  text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    
                    <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                    </svg>
                    {auth.user.coffe.length > 0 ? (
        <span>
            {auth.user.coffe.reduce((total, c) => total + c.pivot.quantity, 0)}
        </span>
    ) : (
        <span>Tidak ada kopi yang dibeli.</span>
    )}
                    </Link>
                    </>
                    



                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#EBB25B] md:p-0 dark:text-white md:dark:text-blue-500"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route("register")}
                            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#EBB25B] md:p-0 dark:text-white md:dark:text-blue-500"
                        >
                            Register
                        </Link>
                    </>
                )}
            </NavBar>
            <Hero/>
            <About/>

            <MenuLayout>
            {coffe.map((c)=>{
               
                 return(<>
                 <Menu coffe={c}>
                <CartButton onClick={()=>HandleAddToCart(c.id)}/>

                 </Menu>

                
                 </>)
                })}
        
            </MenuLayout>

            <Footer/>
          
          
        </>
    );
}
