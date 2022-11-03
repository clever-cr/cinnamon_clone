function BlogInfo({ img, title, name, date, time, description, style }) {
  return (
    <>
      <div className={`space-y-4 ${style} group w-[160px] lg:w-full `}>
        <picture>
          <img className="lg:h-[230px]" src={img} alt="img" />
        </picture>
        <p className="text-xs font-MontBold text-light group-hover:text-primary">
          {title}
        </p>
        <div className="text-base text-lighter flex space-x-2 items-center">
          <p className="truncate">{name}</p>
          <div className="w-2 h-2 bg-yellow rounded-full"></div>
          <p className="truncate">{date}</p>
          <div className="w-2 h-2 bg-yellow rounded-full"></div>
          <p className="truncate">{time}</p>
        </div>
        <h5 className=" text-xl lg:text-2xl font-MontBold text-light group-hover:text-primary">
          {description}
        </h5>
      </div>
    </>
  );
}
export default BlogInfo;
