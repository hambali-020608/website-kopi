import Menu from "@/Components/section/menu";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MenuLayout from "@/Layouts/MenuLayout";

export default function MenuPage({coffe,topCoffe}){
    return(
    <>
{console.log(topCoffe)}
    <AuthenticatedLayout>
   
    <MenuLayout>
      

        {coffe.map((c)=>{
            return(
                
                <Menu coffe={c}/>
            )
        })}

    </MenuLayout>
    <MenuLayout title="Popular Coffe">
      

        {topCoffe.map((top)=>{
            return(
                
                <Menu coffe={top} title="Popular Coffe"/>
            )
        })}

    </MenuLayout>
    
    </AuthenticatedLayout>
    </>
    
)
}