import Menu from "@/Components/section/menu";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MenuLayout from "@/Layouts/MenuLayout";

export default function MenuPage({coffe,topCoffe,topLikeCoffe}){
    return(
    <>
{console.log(topLikeCoffe)}
    <AuthenticatedLayout>
   
    <MenuLayout>
   
        {coffe.map((c)=>{
            return(
                
                <Menu coffe={c} key={c.id}/>
            )
        })}

    </MenuLayout>
    <MenuLayout title="Popular Coffe">
      

        {topCoffe.map((top)=>{
            return(
                
                <Menu key={top.id} coffe={top} title="Popular Coffe"/>
            )
        })}

    </MenuLayout>
    
    <MenuLayout title="Top Likes Coffe">
      

        {topLikeCoffe.map((top)=>{
            return(
                
                <Menu key={top.id} coffe={top} title="Popular Coffe"/>
            )
        })}

    </MenuLayout>
    
    </AuthenticatedLayout>
    </>
    
)
}