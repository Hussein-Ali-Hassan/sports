/* eslint-disable @next/next/no-img-element */
import { facilities } from "@/data/facilities";

export default function Home() {
  return (
    <main>
      <header className="bg-blue-500 min-h-[300px] rounded-br-[80px] md:rounded-br-[100px] flex items-start justify-center flex-col pl-2 lg:pl-12">
        <h1 className="font-extrabold text-2xl md:text-4xl text-white">
          Find your perfect training spot
        </h1>
        <p className="text-lg text-slate-100">
          Your preferred place to find gyms, playgrounds, and more in Lebanon.
        </p>
      </header>

      <section className="my-10 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center lg:place-items-start">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="w-60 h-80 bg-white shadow rounded-3xl p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-50 hover:shadow-2xl hover:shadow-sky-400 transition-all duration-200 ease-linear"
            >
              <img
                className="w-52 h-40 bg-sky-300 rounded-2xl"
                src={facility.thumbnail}
                alt={facility.name}
              ></img>
              <div>
                <p className="font-extrabold">{facility.name}</p>
                <p className="">4 popular types of cards in UI design.</p>

                <div className="flex items-center gap-2 mt-2">
                  {facility.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2 py-1 text-xs font-semibold text-white bg-sky-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
