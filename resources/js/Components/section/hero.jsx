import { Link } from "@inertiajs/react";

export default function Hero(){
    return(
        <section class="relative isolate px-6 lg:px-8" style={{backgroundColor:'#4f2b14',minHeight:'100vh'}} >
     
        <div class="mx-auto max-w-2xl  sm:py-10 ">
          <div class="text-center">
            <h1 class="text-balance text-5xl font-semibold tracking-tight  sm:text-7xl text-[#ECC4A0]">
                Classic C<img src="/images/biji.png" alt="" class="inline max-w-20"/>ffe
            </h1>
            
            <p class="text-white mt-2 text-pretty text-lg font-medium sm:text-xl/8" >Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
            <hr class="mb-5 mt-5"  style={{border:"1px solid #EBB25B"}}/>
            <div class=" flex items-center justify-center gap-x-6">
                <Link href="dashboard" className="text-black bg-[#EBB25B] font-extrabold focus:outline-none focus:ring-4 focus:ring-gray-300   rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                Pesan Sekarang
                </Link>
           

                
            </div>
            <img data-aos="fade-up"  src="images/coffe.png" alt="" class="max-w-96 ms-36"/>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2"></div>
        </div>
        </div>
    </section>
    )
}