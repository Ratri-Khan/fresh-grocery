import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CategoryCover = ({data , img , title}) => {
    return (
        <div
        className="hero h-[500px] mb-4 w-11/12 mx-auto"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
            <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {data.map((item) => (
                <div key={item.id} className="bg-black/70 text-center p-4">
                  <p className="text-2xl">{item.name}</p>
                  <Rating
                  className="mx-auto py-2"
                    style={{ maxWidth: 100}}
                    value={item.rating}
                    readOnly
                  />
                  <p className="text-xs">Available</p>
                </div>
              ))}
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default CategoryCover;