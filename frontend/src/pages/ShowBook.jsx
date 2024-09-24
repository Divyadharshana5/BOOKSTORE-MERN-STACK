import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner";

const ShowBook = () => {
  const [book, setbook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bookstore-mern-stack-mu.vercel.app/books/${id}")
      .then((response) => {
        setbook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 ">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Id</span>
            <span>{book._id}</span>
          </div>
          <div>
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div>
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div>
            <span className="text-xl mr-4 text-gray-500">PublishYear</span>
            <span>{book.publishYear}</span>
          </div>
          <div>
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new DataTransfer(book.createdAt).toString()}</span>
          </div>
          <div>
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new DataTransfer(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
