export default function About(){
    return(
        <section id="about" style={{minHeight:'100vh'}} className="bg-black pt-20">
    <h1 className="text-balance text-2xl  text-center font-semibold tracking-tight text-[#EBB25B] sm:text-6xl">Tentang <b className="text-white">Kami</b></h1>
                
    <div className="grid grid-cols-5 grid-rows-5 gap-2 mt-5">
        <div className="col-span-2 row-span-5">
            <img data-aos="fade-up-right" src="/images/kopi-about.png" className="" alt=""/>
        </div>
    <div className="col-span-3 row-span-5 col-start-3 mt-10">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-[#ECC4A0]  sm:text-3xl">
        Mengapa Memilih Kopi Kami ???
    </h1>
    <p className="text-white max-w-2xl leading-loose mt-5">
        Senja Kita merupakan brand spesialisasi kopi dengan konsep “Made to Order” yang menyajikan Fresh Quality Coffee. Dengan menggunakan 100% biji kopi asli Indonesia yang disajikan oleh barista terlatih dengan mesin kopi standar internasional. Berdiri sejak tahun 2016, dan kini sudah hadir tersedia di lebih dari 1.200 outlet di seluruh Indonesia untuk mempermudah Senja People menjangkau Point Coffee
    </p>
    
    
    </div>
    </div>
            </section>
    )
}