function Office({ img, location, address }) {
  return (
    <>
      <div className="space-y-6 w-[285px] lg:w-[544px] group">
        <picture>
          <img src={img} alt="img" />
        </picture>
        <div className="flex  space-x-4  ">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:text-primary"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <div className="space-y-2">
            <h5 className="text-2xl font-MontBold group-hover:text-primary text-light">
              {location}
            </h5>

            <p className="text-lighter group-hover:text-primary text-base">
              {address}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Office;
