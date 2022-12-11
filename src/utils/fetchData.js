export const moviesOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7d71f35b29msh9bfbe9e23edb94fp10754cjsnca9ff1a9ea3a",
    "X-RapidAPI-Host": "movies-and-serials-torrent.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
