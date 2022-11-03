function Service({ img, title, description }) {
  return (
    <>
      <div className="space-y-4">
        <picture>
          <img src={img} alt="icon" />
        </picture>
        <h5 className="text-2xl font-MontBold text-white">{title}</h5>
        <p className="text-base text-secondary">{description}</p>
      </div>
    </>
  );
}
export default Service;
