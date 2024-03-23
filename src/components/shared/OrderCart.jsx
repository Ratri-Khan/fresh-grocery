import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/UseCart";

const OrderCart = ({ data }) => {
  const { name, pic, price, rating, condition, _id } = data;
  const { user } = useContext(AuthContext);
  const [, refatch] = useCart();
  const Navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        cartId: _id,
        name,
        pic,
        price,
        rating,
        condition,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refatch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl border-2 shadow-blue-500/60 text-slate-400">
      <figure className="p-5 bg-slate-900">
        <img src={pic} alt="image" className="px-0 rounded-xl h-[200px]" />
      </figure>
      <div className="card-body items-center text-center pt-0">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}</p>
        <p>Condition: {condition}</p>
        <Rating
          className="mx-auto"
          style={{ maxWidth: 100 }}
          value={rating}
          readOnly
        />
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(data)}
            className="gorgeous-button"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
