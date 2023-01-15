import { useEffect, useState, useRef } from "react";
import MoviesGrid from "./MoviesGrid";
const Watchlist = () => {
  // const [movies, setMovies] = useState([]);
  const [text, setText] = useState("");
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const input = useRef();

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(list));
  }, []);
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(list));
    // localStorage.getItem("movies");
  }, [list]);
  // console.log()
  const handleSubmit = (e) => {
    e.preventDefault();
    // setMovies(input.current.value);
    // setMovies((prevMovies) => [...prevMovies, input.current.value]);
    setList((prevList) => [
      ...prevList,
      {
        id: new Date().getTime().toString(),
        value: input.current.value,
      },
    ]);
    setText("");
  };

  function getLocalStorage() {
    return localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : [];
  }
  function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    localStorage.setItem("movies", JSON.stringify(items));
  }

  const setMyData = () => {
    setList(getLocalStorage());
  };

  console.log(list);
  return (
    <div>
      <h1>Watchlist</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          ref={input}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>submit</button>
      </form>

      {list.map((item, i) => (
        <div key={i}>
          <h1>{item?.title}</h1>
          <button
            onClick={() => {
              removeFromLocalStorage(item.id);
              setMyData();
            }}
          >
            delete
          </button>
        </div>
      ))}

      <MoviesGrid moviesList={list} />
    </div>
  );
};

export default Watchlist;
