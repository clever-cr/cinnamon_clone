function Button({ btn, style }) {
  return (
    <>
      <button
        className={`bg-primary px-8 py-3 hover:bg-white hover:text-primary text-white hover:border-primary hover:border-2 border-t-[1px] border-x-[1px]  transition duration-700 ease-in-out items-center ${style} `}
      >
        {btn}
      </button>
    </>
  );
}
export default Button;
