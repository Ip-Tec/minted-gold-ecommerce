import axios from "axios";
import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";

function Categories({ swal }) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [properties, setProperties] = useState([]);
  const [description, setDescription] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [editedCategory, setEditedCategory] = useState(null);
  useEffect(() => {
    fetchCategories();
  }, []);
  async function fetchCategories() {
    setLoading(true);
    try {
      const result = await axios.get("/api/categories");
      setCategories(result.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      // Handle error
    } finally {
      setLoading(false);
    }
  }
  async function saveCategory(ev) {
    ev.preventDefault();
    setLoading(true);
    try {
      const data = {
        name,
        description,
        parentCategory,
      };
      if (editedCategory) {
        data.id = editedCategory.id;
        await axios.put("/api/categories", data);
        setEditedCategory(null);
      } else {
        await axios.post("/api/categories", data);
      }
      setName("");
      setDescription("");
      setParentCategory("");
      setProperties([]);
      fetchCategories();
    } catch (error) {
      console.error("Error saving category:", error);
      // Handle error
    } finally {
      setLoading(false);
    }
  }
  function editCategory(category) {
    setEditedCategory(category);
    setName(category.name);
    setName(category.description);
    setParentCategory(category.parent?.id);
    // setProperties(
    //   category.properties.map(({ name, values }) => ({
    //     name,
    //     values: values.join(","),
    //   }))
    // );
  }
  function deleteCategory(category) {
    swal
      .fire({
        title: "Are you sure?",
        text: `Do you want to delete ${category.name}?`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete!",
        confirmButtonColor: "#d55",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const { id } = category;
          await axios.delete("/api/categories?id=" + id);
          fetchCategories();
        }
      });
  }
  function addProperty() {
    setProperties((prev) => {
      return [...prev, { name: "", values: "" }];
    });
  }

  return (
    <Layout>
      <h1>Categories</h1>
      <label>
        {editedCategory
          ? `Edit category ${editedCategory.name}`
          : "Create new category"}
      </label>
      <form onSubmit={saveCategory} disabled={loading}>
        <div className="flex gap-1">
          <input
            type="text"
            placeholder={"Category name"}
            onChange={(ev) => setName(ev.target.value)}
            value={name}
          />
          <textarea
            placeholder="description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </div>
        <div className="flex gap-1 text-center">
          {editedCategory && (
            <button
              type="button"
              onClick={() => {
                setName("");
                setEditedCategory(null);
                setDescription("");
                setParentCategory("");
                setProperties([]);
              }}
              className="btn-default w-32 rounded hover:bg-gray-700 hover:text-white"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="w-32 bg-blue-400 text-gray-800 rounded border shadow-blue-500 px-6 py-1 hover:bg-sky-900 hover:text-white"
          >
            {loading ? <Spinner /> : "Save"}
          </button>
        </div>
      </form>
      {!editedCategory && (
        <table className="basic mt-4">
          <thead>
            <tr>
              <td>Number</td>
              <td>Category name</td>
              <td>Category description</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 &&
              categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category?.description}</td>
                  <td>
                    <button
                      onClick={() => editCategory(category)}
                      className="btn-default mr-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCategory(category)}
                      className="btn-red"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }, ref) => <Categories swal={swal} />);
