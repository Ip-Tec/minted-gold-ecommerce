// conponents/ProductForm.js

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
  id,
  title: existingTitle,
  stock: existingStock,
  price: existingPrice,
  images: existingImages,
  category: assignedCategory,
  properties: assignedProperties,
  description: existingDescription,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [stock, setStock] = useState(existingStock || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [category, setCategory] = useState(assignedCategory || "");
  const [productProperties, setProductProperties] = useState(
    assignedProperties || {}
  );
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImages || []);
  const [goToProducts, setGoToProducts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const [isUploadingProduct, setIsUploadingProduct] = useState(false);

  const { data: session, update, status } = useSession();

  useEffect(() => {
    setIsUploadingProduct(true);
    axios
      .get("/api/categories", { data: session.user.name })
      .then((result) => {
        setCategories(result.data);
      })
      .finally((d) => {
        setIsUploadingProduct(false);
      });
  }, [session]);
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      title,
      stock,
      price,
      category,
      description,
      image: images,
      properties: productProperties,
      adminName: session?.user?.email,
    };
    setIsUploadingProduct(true);
    if (id) {
      //update
      await axios.put("/api/products", { ...data, id }).then((datd) => {
        setIsUploadingProduct(false);
      });
    } else {
      //create
      await axios.post("/api/products", data).finally((d) => {
        setIsUploadingProduct(false);
      });
    }

    setIsUploadingProduct(false);
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }
  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }
  function updateImagesOrder(images) {
    setImages(images);
  }
  function setProductProp(propName, value) {
    setProductProperties((prev) => {
      const newProductProps = { ...prev };
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  const propertiesToFill = [];
  if (categories.length > 0 && category) {
    let catInfo = categories.find(({ id }) => id === category);
    if (catInfo) {
      propertiesToFill.push(...catInfo.name);
      while (catInfo?.parent?.id) {
        console.log("catInfo?.parent?", catInfo?.parent);
        const parentCat = categories.find(({ id }) => id === catInfo.parent.id);
        if (parentCat) {
          propertiesToFill.push(...parentCat);
          catInfo = parentCat;
        } else {
          break; // Break the loop if parentCat is undefined
        }
      }
    }
  }

  return (
    <form onSubmit={saveProduct}>
      <label>Product name</label>
      <input
        type="text"
        placeholder="product name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Category</label>
      <select value={category} onChange={(ev) => setCategory(ev.target.value)}>
        <option value="">Uncategorized</option>
        {categories.length > 0 &&
          categories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
      </select>
      {propertiesToFill.length > 0 &&
        propertiesToFill.map((p) => (
          <div key={p.name} className="">
            <label>{p.name[0].toUpperCase() + p.name.substring(1)}</label>
            <div>
              <select
                value={productProperties[p.name]}
                onChange={(ev) => setProductProp(p.name, ev.target.value)}
              >
                {p.values.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      <label>Photos</label>
      <div className="mb-2 flex flex-wrap gap-1">
        <ReactSortable
          list={images}
          className="flex flex-wrap gap-1"
          setList={updateImagesOrder}
        >
          {!!images?.length &&
            images.map((link) => (
              <div
                key={link}
                className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200"
              >
                <img src={link} alt="" className="rounded-lg" />
              </div>
            ))}
        </ReactSortable>
        {isUploading && (
          <div className="h-24 flex items-center">
            <Spinner />
          </div>
        )}
        <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <div>Add image</div>
          <input type="file" onChange={uploadImages} className="hidden" />
        </label>
      </div>
      <label>Description</label>
      <textarea
        placeholder="description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <label>Price (in USD)</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      />
      <label>Stock (How many are available)</label>
      <input
        type="number"
        placeholder="stock"
        value={stock}
        onChange={(ev) => setStock(ev.target.value)}
      />
      {!isUploadingProduct ? (
        <button
          type="submit"
          className="text-white rounded-sm shadow-sm bg-gray-400 mt-3 px-7 py-3"
        >
          {isUploadingProduct ? "Loading..." : "Save"}
        </button>
      ) : (
        <Spinner />
      )}
    </form>
  );
}
