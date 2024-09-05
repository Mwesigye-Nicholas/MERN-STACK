import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";
import { VITE_BACKEND_URL } from "../App";

const Products = ({ product, getProducts }) => {
  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        await axios.delete(`${VITE_BACKEND_URL}/api/products/${id}`);
        toast.success(`${product.name} deleted successfully`);
        getProducts();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-28 object-cover"
      />
      <div className="px-4 pt-2 pb-4">
        <h2 className="text font-semibold">{`Name: ${product.name}`}</h2>
        <h2 className="text font-sm">{`Available Quantity: ${product.quantity}`}</h2>
        <h2 className="text font-sm">{`Price per Item: ${product.price}$`}</h2>

        <div className="mt-2 flex gap-4 ">
          <Link
            to={`/edit/${product._id}`}
            className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteProduct(product._id)}
            className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
Products.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.number,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    _id: PropTypes.string.isRequired,
  }),
  getProducts: PropTypes.func,
};

export default Products;
