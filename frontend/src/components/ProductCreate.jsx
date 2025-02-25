import React from "react";
import { useRef } from "react";
const ProductCreate = () => {
  const nameRef = useRef(null);
  const imageUrlRef = useRef(null);
  const priceRef = useRef(null);

  const handleProductCreate = () => {
    console.log("nameRef", nameRef)
  };
  return (
    <div>
      <form
        className="flex flex-wrap flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="p-10">
          <label className="pr-10">Name</label>
          <input
            className="border-2"
            placeholder="name"
            type="text"
            ref={nameRef}
          />
        </div>
        <div className="p-10">
          <label className="pr-10">Price</label>
          <input
            className="border-2"
            placeholder="price"
            type="number"
            ref={priceRef}
          />
        </div>
        <div className="p-10">
          <label className="pr-10">Image</label>
          <input
            className="border-2"
            placeholder="imageurl"
            type="text"
            ref={imageUrlRef}
          />
        </div>
        <div className="p-10">
          <button
            className="bg-blue-500 p-2 rounded-2xl"
            onClick={handleProductCreate}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreate;
