import { Link } from "react-router-dom";
import { useBanner } from "../../../Hook/useBanner";

export const Banner = () => {
    const {data, isLoading} = useBanner()
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }
console.log(data)
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center  lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-rose-700">
              {" "}
              Forever Home.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8  text-center">
            <Link to="/allTests"
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
                   Promo Code : <span>DiagEv20</span>
                  </p>
                  <div className="flex items-center justify-center">
                    <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                      20%
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-11/12 h-2 mx-auto bg-red-900 rounded-b opacity-75"></div>
              <div className="w-10/12 h-2 mx-auto bg-red-900 rounded-b opacity-50"></div>
              <div className="w-9/12 h-2 mx-auto bg-red-900 rounded-b opacity-25"></div>
            </div>
          </div>
      </div>
    </section>
  );
};
