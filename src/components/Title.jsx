import WordByWordAnimation from "./WordByWordAnimation";

const Title = ({ name, text }) => {
  return (
    <>
      <p className=" mb-8 text-2xl  tracking-[1px]">{name}</p>
      {text && (
        <p className="leading-[1.7] font-normal max-w-[640px] text-black dark:text-white/80">
          <WordByWordAnimation text={text} />
          {/* {text} */}
        </p>
      )}
    </>
  );
};

export default Title;
