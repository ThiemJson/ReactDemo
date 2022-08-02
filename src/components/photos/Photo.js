import React, { useEffect, useState } from "react";
import axios from "axios";
//https://picsum.photos/v2/list

export const fetchPhotos = async (url) => {
  try {
    console.log("Pre fetch");
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const handlerFetchPhotos = async () => {
    const images = await fetchPhotos(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    const newPhotos = [...photos, ...images];
    setPhotos(newPhotos);
    setPage((page) => page + 1);
  };

  useEffect(() => {
    handlerFetchPhotos();
  }, []);

  return (
    <div>
      <div className=" m-3 grid grid-cols-4 gap-[20px]">
        {photos.map(({ id, download_url, author }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-[10px] h-[200px] flex flex-col shadow-md"
          >
            <div className="flex justify-between item-center mb-[10px]">
              <span>{id}</span>
              <span>{author}</span>
            </div>
            <img
              src={download_url}
              alt=""
              className="rounded-[inherit] object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-[30px]">
        <button
          className=" inline-block px-8 py-4 bg-purple-600 text-[#fff] rounded-lg"
          onClick={() => {
            handlerFetchPhotos();
          }}
        >
          Load more
        </button>
      </div>
    </div>
  );
};
