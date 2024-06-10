import { Link } from "react-router-dom";
import { useBannerActive } from "../../../Hook/useBannerActive";

export const Banner = () => {
  const { data, isLoading } = useBannerActive();
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  console.log(data);
  return (
    <section
      className={`relative bg-[url('${data?.imageURL}')] bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute inset-0 bg-transparent from-black/65 to-white/25 ltr:bg-gradient-to-r rtl:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center  lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right ">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <strong className="block font-extrabold text-black">
              {data?.title}
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed ">{data?.description}</p>

          <div className="mt-8 -ml-10 text-center">
            <Link
              to="/allTests"
              className="w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              All Tests
            </Link>
          </div>
        </div>
        <div className="grid max-w-screen-md gap-10 sm:mx-auto">
          <div>
            <div className="p-8 bg-gray-800 rounded">
              <div className="mb-4 text-center">
                <p className="text-xl font-medium tracking-wide text-white">
                  Promo Code : <span>{data?.couponCode}</span>
                </p>
                <div className="flex items-center justify-center">
                  <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    {data?.couponRate}%
                  </p>
                </div>
              </div>
            </div>
            <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75"></div>
            <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50"></div>
            <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
