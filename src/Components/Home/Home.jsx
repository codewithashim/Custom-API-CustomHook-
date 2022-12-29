import React from "react";
import useFetch from "../../Hooks/useFetch";

const Home = () => {
  const [data] = useFetch("http://api.quotable.io/random");
  console.log(data);

  // const {
  //   content,
  //   author,
  //   tags,
  //   authorSlug,
  //   length,
  //   dateAdded,
  //   dateModified,
  // } = data;

  return (
    <>
      <section>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://miro.medium.com/max/775/0*rZecOAy_WVr16810"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{data?.author}</div>
            <p class="text-gray-700 text-base">{data?.content}</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
            
            {data?.tags.map((tag) => {
              return (
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{tag}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
