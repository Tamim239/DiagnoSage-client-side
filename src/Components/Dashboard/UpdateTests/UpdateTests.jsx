import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import { useTests } from "../../../Hook/useTests";
import toast from "react-hot-toast";

export const UpdateTests = () => {
    const {refetch}  = useTests()
  const data = useLoaderData();
  const { _id, name, imageURL, testDate, price, slots, description } = data;

  const [startDate, setStartDate] = useState(testDate);
  const handleUpdateTest = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imageURL = form.imageURL.value;
    const testDate = startDate.toLocaleDateString();
    const price = parseFloat(form.price.value);
    const slots = parseInt(form.slots.value);
    const description = form.description.value;
    const testInfo = {
      name,
      imageURL,
      testDate,
      price,
      slots,
      description,
    };
    console.log(testInfo);
      axios.patch(`https://diagno-sage-server.vercel.app/tests/${_id}`, testInfo)
       .then((res)=>{
          if(res.data.modifiedCount > 0){
            refetch()
            toast.success('updated test successfully');
          }
       })
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form onSubmit={handleUpdateTest} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Name"
                defaultValue={name}
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="image">
                  ImageURL
                </label>
                <input
                  className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Image URL here"
                  defaultValue={imageURL}
                  type="text"
                  id="image"
                  name="imageURL"
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
                  <label className="sr-only" htmlFor="price">
                    Price
                  </label>
                  <input
                  defaultValue={price}
                    className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="price"
                    type="text"
                    id="price"
                    name="price"
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
                    defaultValue={slots}
                    name="slots"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Description
              </label>
              <textarea
                className="w-full textarea textarea-bordered rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Message"
                rows="8"
                name="description"
                id="message"
                defaultValue={description}
              ></textarea>
            </div>

            <div className="mt-4">
              <input
                type="submit"
                value="Update"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
