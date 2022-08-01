import React, { useEffect, useState } from "react";
import axios from "axios";
//https://picsum.photos/v2/list

export const fetchPhotos = (url) => {
  return axios
    .get(url)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const result = fetchPhotos(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    result.then((responsePhotos) => {
      const newPhotos = [...photos, ...responsePhotos];
      console.log(newPhotos);
      setPhotos(newPhotos);
    });
  }, [page]);

  return (
    <div>
      <div className=" grid grid-cols-4 gap-[20px] bg-red-500">
        {photos.map(({ id, download_url, author }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-[10px] h-[200px] flex flex-col"
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
            setPage((page) => page + 1);
          }}
        >
          Load more
        </button>
      </div>
    </div>
  );
};
