// import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/UseCart";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart , refetch] = useCart();
  // const totalPrice = cart.reduce((total, info) => total + info.price, 0);

  const handleDelete = info => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/carts/${info._id}`, 
            {method:'DELETE'})
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount >0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })

        }
    });
}

  return (
    <div className="w-10/12">
      <div className="flex justify-evenly mb-8">
        <h2 className="text-4xl">infos: {cart.length}</h2>
        {/* <h2 className="text-4xl">Total Price: {totalPrice}</h2> */}
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table  w-full border border-slate-400">
          {/* head */}
          <thead>
            <tr>
              <th className="border border-slate-400">#</th>
              <th className="border border-slate-400">Image</th>
              <th className="border border-slate-400">Name</th>
              <th className="border border-slate-400">Price</th>
              <th className="border border-slate-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((info, index) => (
              <tr key={info._id}>
                <th className="border border-slate-400">{index + 1}</th>
                <td className="border border-slate-400">
                  <div className="flex infos-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={info.pic}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border border-slate-400">{info.name}</td>
                <td className="border border-slate-400">${info.price}</td>
                <th className="border border-slate-400">
                  <button
                    onClick={() => handleDelete(info._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
