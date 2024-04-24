const ActorDetails = ({ actor }) => {
  return (
    <div className="my-2.5 shadow-[0_5px_10px_0_rgba(0,0,0,0.3)] shadow-black/70 rounded-sm overflow-hidden">
      <div className="h-[150px] sm:h-[200px] ">
        <img
          loading="lazy"
          className="transition w-full h-full duration-200 object-fill"
          src={`https://media.themoviedb.org/t/p/w138_and_h175_face${actor?.profile_path}`}
          srcSet={`https://media.themoviedb.org/t/p/w138_and_h175_face${actor?.profile_path} 1x, https://media.themoviedb.org/t/p/w276_and_h350_face${actor?.profile_path} 2x`}
          alt="Anna Sawai as Toda Mariko"
        />
      </div>

      <div className="p-2">
        <p className=" font-semibold text-base md:text-lg">
          {actor?.original_name}
        </p>
        <p className="text-sm">{actor?.character}</p>
      </div>
    </div>
  );
};

export default ActorDetails;
