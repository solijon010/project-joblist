function JobsItem({ job }) {
  const {
    title,
    company_name,
    create_time,
    image,
    isFeatured,
    isNew,
    skills,
    work_place,
    work_time,
  } = job;

  return (
    <li
      className={`bg-white flex items-center gap-6 rounded-[5px] py-8 px-10 shadow-card-hover ${
        isFeatured ? "border-l-[5px] border-primary" : ""
      }`}
    >
      {/* Rasm chapda */}
      <img
        className="rounded-full mr-6"
        src={image}
        alt={title}
        width={88}
        height={88}
      />

      {/* O‘ng tomondagi matnlar */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-2.5">
          <h3 className="text-primary font-bold text-lg">{company_name}</h3>

          <div className="flex items-center gap-2 uppercase font-bold text-sm text-white tracking-[-0.11px] ">
            {isNew && (
              <span className="bg-primary pt-1.75 pb-0.75 px-2 rounded-full">
                NEW!
              </span>
            )}
            {isFeatured && (
              <span className="bg-secondary pt-1.75 pb-0.75 px-2 rounded-full">
                featured
              </span>
            )}
          </div>
        </div>
        <h2 className="font-bold text-[1.375rem] text-secondary mb-1.75 hover:text-primary cursor-pointer">
          {title}
        </h2>
        <div className="flex items-center gap-4 text-gray text-lg font-medium tracking-[0.14px]">
          <span>day</span>
          <span className="w-1 h-1 rounded-full bg-gray"></span>
          <span>{work_time}</span>
          <span className="w-1 h-1 rounded-full bg-gray"></span>
          <span>{work_place}</span>
        </div>
      </div>
      {/* Skills */}
      <ul className="flex items-center gap-4 ml-auto">
        {skills.map((s) => {
          return (
            <li key={s} className="rounded-sm py-1.75 px-2 bg-primary-10 text-primary font-bold tracking-[-0.12px] cursor-pointer hover:bg-primary hover:text-white">
              {s}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default JobsItem;
