import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";
import Sidebar from "../components/adminSidebar/Sidebar";
import AddProductModal from "../components/AddProductModal/AddProductModal";
import api from "../services/api";
import Spinner from "../components/Spinner/Spinner";
import Swal from "sweetalert2";


function Dashboard() {
  const [products, setProducts] = useState([]);
  const [addProductModal , setAddProductModal] = useState(false)
  const [loading , setLoading] = useState(false)

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


  useEffect(()=>{
    const getProducts = async()=>{
        const data = await api.getProducts()
        if(!data.error){
            setProducts(data.data)
        }else{
            alert("error fetching Products")
        }
    }
    getProducts()
  },[])



  const handleUpdate = (id) => {
    alert(`Update product with ID: ${id}`);
  };

  const onSubmit = async (productData) => {
    try {
      setLoading(true);
      const result = await api.addProduct(productData);
      if (result.error) {
        // Show error alert
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.error.message || "Something went wrong!",
        });
      } else {
        // Show success alert
        Swal.fire({
          icon: "success",
          title: "Product Added",
          text: "Your product has been added successfully!",
          timer: 2000,
          showConfirmButton: false,
        });
  
        console.log(result);
        setAddProductModal(false);
      }
    } catch (error) {
      // Show error alert for exception
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "An unexpected error occurred!",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
    {loading && <Spinner/>}
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
                  key={product._id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200 text-gray-800"}
                  >
                      <td className="border border-gray-300 px-4 py-2">{product.art_number}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={product.images[0].url}
                      alt={product.productName}
                      className="w-16 h-16 object-cover mx-auto rounded-md"
                      />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                        !product.isOutStock ? "text-green-600" : "text-red-600"
                    }`}
                    >
                    {!product.isOutStock ? 'In Stock': 'out of stock'}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => toggleStock(product._id)}
                        className="text-yellow-500 hover:text-yellow-600"
                        title="Toggle Stock"
                        >
                        <MdOutlineUpdate size={20} />
                      </button>
                      <button
                        onClick={() => handleUpdate(product._id)}
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
