const ProductCard = (props) => {
  const { image } = props;

  return (
    <>
      <div className="relative">
        <img src={image} alt="" className="w-80 rounded-3xl" />
        <div className="absolute bottom-0 w-full p-7">
          <h4 className="text-base font-semibold text-white">Eloria Gajebo</h4>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
