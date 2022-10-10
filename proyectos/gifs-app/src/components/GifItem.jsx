import PropTypes from "prop-types";

export const GifItem = ({ title, img, id }) => {
  return (
    <div className="items-center text-center text-slate-700 py-2 px-2 shadow-2xl mx-10 my-2 rounded-lg">
      <h3 className="text-2xl font-bold">{title}</h3>
      <span className="bg-slate-700 text-white font-bold rounded-lg px-2">
        {id}
      </span>
      <img src={img} className="mx-auto shadow-2xl w-4/5" />
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
};
