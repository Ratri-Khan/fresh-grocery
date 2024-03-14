import { Rating } from "@smastrom/react-rating";

const OrderCart = ({ data }) => {
  return (
    
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24">
      {data.map((info) => (
        <div key={info.id}>
          <div className="card bg-base-100 shadow-xl border-2 shadow-blue-500/60 text-slate-400">
            <figure className="p-5 bg-slate-900">
              <img src={info.pic} alt="image" className="px-0 rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center pt-0">
              <h2 className="card-title">{info.name}</h2>
              <p>Price: {info.price}</p>
              <p>Condition: {info.condition}</p>
              <p>
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 100 }}
                  value={info.rating}
                  readOnly
                />
              </p>
              <div className="card-actions">
                <button className="gorgeous-button">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default OrderCart;
