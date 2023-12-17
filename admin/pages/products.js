import axios from "axios";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Image } from "next/image";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { data: session, update, status } = useSession();
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, [session]);
  // console.log({ products });
  return (
    <Layout>
      <Link
        className="color-green-100 rounded shadow-sm px-3 py-2 bg-gray-400"
        href={"/products/new"}
      >
        Add new product
      </Link>
      {products.length > 0 ? (
        <table className="basic mt-6">
          <thead>
            <tr>
              <th>id</th>
              <th>Image</th>
              <th>Product name</th>
              <th>Owner Email</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="mb-1 border-b-2 border-b-gray-400 mb-1">
                <td>{product.id}</td>
                <td>
                  {product.image.length > 0 && (
                    <img
                      src={product.image[0]} // Use the first image URL
                      alt={product.title} // Add alt text as needed
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                </td>

                <td>{product.title}</td>
                <td>{product.adminName}</td>
                <td>
                  <p className="m-1 p-1 top-0 flex capitalize relative">
                    {product.stock}
                  </p>
                </td>
                <td>
                  <Link
                    className="btn-default"
                    href={"/products/edit/" + product.id}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    Edit
                  </Link>
                  <Link
                    className="btn-red mt-1"
                    href={`/products/delete/${product.id}&&adName=${product.adminUsername}&&auth=${session?.user?.username}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="truncate m-4 p-4 border-red-400 text-center mt-36 border-b-2">
          Product table is empty
        </h1>
      )}
    </Layout>
  );
}