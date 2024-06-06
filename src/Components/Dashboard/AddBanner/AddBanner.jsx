
export const AddBanner = () => {
  return (
<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="image">ImageURL</label>
              <input
                className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Image URL here"
                type="text"
                id="image"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="title">Title</label>
              <input
                className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm"
                placeholder="title here.."
                type="text"
                id="title"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
            <div>
              <label className="sr-only" htmlFor="title">Coupon Code</label>
              <input
                className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Coupon Code"
                type="text"
                id="coupon rate"
              />
            </div>
            </div>

            <div>
            <div>
              <label className="sr-only" htmlFor="title">Coupon rate</label>
              <input
                className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm"
                placeholder="coupon rate"
                type="text"
                id="coupon rate"
              />
            </div>
            </div>

            <div>
            <div>
              <label className="sr-only" htmlFor="title">Coupon rate</label>
              <select defaultValue="false" name="" id="" className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            </div>
          </div>
          <div>
            <label className="sr-only" htmlFor="message">Description</label>
            <textarea
              className="w-full textarea textarea-bordered rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <input type="submit" value="Save" className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"/>
          </div>
        </form>
      </div>
   
  </div>
</section>
  )
}
