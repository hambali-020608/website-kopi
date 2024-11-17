export default function MenuLayout({children,title="Menu"}){
    return(

<section id="menu" style={{minHeight:'100vh'}} className={`${title=="Menu"? 'bg-[#50392B]':'bg-[#4f2b14]'} pt-10 pb-10`}>
    <h1 className="text-balance text-2xl  text-center font-semibold tracking-tight text-white sm:text-6xl mb-20 italic">{title}</h1>

        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">{children}</div>
          </div>
          </section>
    )
}