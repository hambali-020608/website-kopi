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

    function HandleLike(id){    
        axios.post(route('coffe.like',id))
        window.location.reload()
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
               console.log(c)
                 return(<div key={c.id}>
                 
                 <Menu coffe={c}>
                <CartButton onClick={()=>HandleAddToCart(c.id)} text="add"/>
                    {console.log(c.likes)}
                    {auth.user ? (
                      
                       <button onClick={()=>HandleLike(c.id)} type="submit" className="text-white"><svg fill="#000000" width="25px" height="25px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1637.176 1129.412h-112.94v112.94c62.23 0 112.94 50.599 112.94 112.942 0 62.344-50.71 112.941-112.94 112.941h-112.942v112.941c62.23 0 112.941 50.598 112.941 112.942 0 62.343-50.71 112.94-112.94 112.94h-960c-155.634 0-282.354-126.606-282.354-282.352V903.529h106.617c140.16 0 274.334-57.6 368.3-157.778C778.486 602.089 937.28 379.256 957.385 112.94h36.367c50.484 0 98.033 22.363 130.334 61.44 32.64 39.53 45.854 91.144 36.14 141.515-22.7 118.589-60.197 236.048-111.246 349.102-23.83 52.517-19.313 112.602 11.746 160.94 31.397 48.566 84.706 77.591 142.644 77.591h433.807c62.231 0 112.942 50.598 112.942 112.942 0 62.343-50.71 112.94-112.942 112.94m225.883-112.94c0-124.575-101.308-225.883-225.883-225.883H1203.37c-19.651 0-37.044-9.374-47.66-25.863-10.391-16.15-11.86-35.577-3.84-53.196 54.663-121.073 94.87-247.115 119.378-374.513 15.925-83.576-5.873-169.072-60.085-234.578C1157.29 37.384 1078.005 0 993.751 0H846.588v56.47c0 254.457-155.068 473.224-285.063 612.029-72.734 77.477-176.98 122.09-285.967 122.09H56v734.117C56 1742.682 233.318 1920 451.294 1920h960c124.574 0 225.882-101.308 225.882-225.882 0-46.42-14.117-89.676-38.174-125.59 87.869-30.947 151.116-114.862 151.116-213.234 0-46.419-14.118-89.675-38.174-125.59 87.868-30.946 151.115-114.862 151.115-213.233" fill-rule="evenodd"></path> </g></svg>{c.likes.length}</button>
                        

                    ): ''}
                    
                 </Menu>

                
                 </div>)
                })}
        
            </MenuLayout>

            <Footer/>
          
          
        </>
    );
}
