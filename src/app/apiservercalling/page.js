 
 
 async function apicalling(){
    const product=fetch("https://fakestoreapi.com/products")
   const res=await fetch("https://fakestoreapi.com/products");
   const data=await res.json();
   console.log(data);
   return data;
   
    // .then((res)=>res.json())
    // .then((data)=>{
    //     return data;
    // })
}

const  page =async () => {
    const product= await apicalling();
  return (
    <div>
        {
            
            product.map((data)=>(
                // console.log(data.image)
                <div key={data.id}>
                    <img src={data.image}/>
                <div>{data.title}</div>

                </div>
            ))
        }
    </div>
  )
}

export default page

export function generateMetadata(){
    return{
        title:"Ecommerce Product",
        description:"this is ecommerce product page"
    }
  }