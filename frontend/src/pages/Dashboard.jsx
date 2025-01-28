import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";
import Sidebar from "../components/adminSidebar/Sidebar";
import AddProductModal from "../components/AddProductModal/AddProductModal";
import api from "../services/api";

function Dashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", status: "In Stock", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Product 2", status: "Out of Stock", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Product 3", status: "In Stock", image: "https://via.placeholder.com/100" },
  ]);
  const [addProductModal , setAddProductModal] = useState(false)

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const toggleStock = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              status: product.status === "In Stock" ? "Out of Stock" : "In Stock",
            }
          : product
      )
    );
  };



  const handleUpdate = (id) => {
    alert(`Update product with ID: ${id}`);
  };

  const onSubmit = async(productData)=>{
    try {
        const result = await api.addProduct(productData)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
    <AddProductModal isOpen={addProductModal} onClose={()=> setAddProductModal(false)} onSubmit={onSubmit}/>
    <div className="flex">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Product Management</h1>

        {/* Add Product Button */}
        <button
          onClick={()=> setAddProductModal(!addProductModal)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-700"
          >
          Add Product
        </button>

        {/* Products Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                  <tr
                  key={product.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200 text-gray-800"}
                  >
                      <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover mx-auto rounded-md"
                      />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                        product.status === "In Stock" ? "text-green-600" : "text-red-600"
                    }`}
                    >
                    {product.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => toggleStock(product.id)}
                        className="text-yellow-500 hover:text-yellow-600"
                        title="Toggle Stock"
                        >
                        <MdOutlineUpdate size={20} />
                      </button>
                      <button
                        onClick={() => handleUpdate(product.id)}
                        className="text-blue-500 hover:text-blue-600"
                        title="Update"
                        >
                        <FaEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-500 hover:text-red-600"
                        title="Delete"
                        >
                        <FaTrash size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
     </>
  );
}

export default Dashboard;
