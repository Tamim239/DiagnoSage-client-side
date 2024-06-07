import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AddTest = () => {
  const [startDate, setStartDate] = useState(new Date());
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
              <DatePicker
                  className="border p-2 rounded-md w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
               />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
            <div>
            <div>
              <label className="sr-only" htmlFor="price">Price</label>
              <input
                className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm"
                placeholder="price"
                type="text"
                id="price"
              />
            </div>
            </div>

            <div>
            <div>
              <input
                className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm"
                placeholder="slots input here"
                type="text"
                id="slots"
              />
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
