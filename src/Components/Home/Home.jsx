import React from "react";
import useFetch from "../../Hooks/useFetch";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const [error, loading] = useFetch();
  const [data] = useFetch("https://www.boredapi.com/api/activity");
  console.log(data);

  const refreshBtn = () => {
    window.location.reload();
  };

  return (
    <>
      <section>
        {
          // loading
          loading && <div className="text-black">Loading...</div>
        }
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://miro.medium.com/max/775/0*rZecOAy_WVr16810"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{data?.type}</div>
            <p class="text-gray-700 text-base">{data?.activity}</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{data?.type}
            </span>
          </div>

          <div>{error && <div className="text-red-500">{error}</div>}</div>
          <div className="my-4">
            <Link onClick={refreshBtn} className="btn borader refreshBtn">
              Refresh
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
