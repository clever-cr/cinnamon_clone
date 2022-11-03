function PositionInfo({ status, arrow }) {
  return (
    <>
      <div className="flex  justify-between py-6 lg:py-8 border-b border-opacity-20 border-b-gray-100">
        <p className="text-2xl font-MontSemiBold max-w-sm">{status}</p>
        <picture>
          <img
            className="transition-all duration-700 ease-in-out hover:scale-[1.09]"
            src={arrow}
            alt="arrow"
          />
        </picture>
      </div>
    </>
  );
}
export default PositionInfo;
