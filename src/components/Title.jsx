import React from "react";

const Title = ({ name, text }) => {
  return (
    <>
      <p className=" mb-8 text-2xl  tracking-[1px]">{name}</p>
      {text && (
        <p className="leading-[1.7] font-normal max-w-[640px] text-white/80">
          {text}
        </p>
      )}
    </>
  );
};

export default Title;
