type Props = {
  length: number;
  deleteSelected: () => void;
};

function Heading({ length, deleteSelected }: Props) {
  return (
    <div className="my-20 md:flex md:justify-between space-y-4 md:space-y-0 md:mx-4 mx-2 lg:mx-6 md:items-center">
      <p className="lg:text-3xl md:text-xl font-semibold">
        {!length ? "Image Gallery" : `Total Selected Items: ${length}`}
      </p>
      <button
        className="bg-red-500 rounded-full lg:px-4 md:px-3 px-2 py-1 md:flex justify-center items-center cursor-pointer"
        onClick={deleteSelected}
      >
        <p className="font-semibold text-white text-center text-xs md:text-sm lg:text-base">
          Delete Selected Item{length > 1 && "s"}
        </p>
      </button>
    </div>
  );
}

export default Heading;
