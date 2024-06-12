import { useBookList } from "../../../Hook/useBookList"

export const Feature = () => {

  const {data} = useBookList()
console.log(data)
  return (

  <div>  
    <div className="my-10">
        <h1 className="text-center text-4xl font-bold underline">Features</h1>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {
      data?.map(item => <article key={item?._id} className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt=""
        src={item?.imageURL}
        className="absolute inset-0 h-full w-full object-cover"
      />
    
      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{item?.name}</h3>
          </a>
    
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {item?.description}
          </p>
        </div>
      </div>
    </article>)
     }
   </div>
  </div>
  )
}
