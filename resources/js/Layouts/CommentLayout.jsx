export default  function CommentLayout({children,count}){
    return(
        <>
        <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div class="max-w-2xl mx-auto px-4">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({count})</h2>
          </div>
         
{children}
            


          </div>
</section>
        </>
    )

}