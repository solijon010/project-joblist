function JobsItem({ job }) {
  const {
    company,
    logo,
    new: isNew,
    featured: isFeatured,
    position,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
    tools
  } = job;

  // API noto‘g‘ri yo‘l beradi → biz to‘g‘rilaymiz
  const fixedLogo = logo.replace("./", "/");

  const skills = [
    role,
    level,
    ...(languages || []),
    ...(tools || [])
  ];

  return (
    <li
      className={`bg-white flex items-center gap-6 rounded-[5px] py-8 px-10 shadow-card-hover ${
        isFeatured ? "border-l-[5px] border-primary" : ""
      }`}
    >
      <img
        className="rounded-full mr-6"
        src={fixedLogo}    // ← faqat shu joy o‘zgaradi!!!
        alt={position}
        width={88}
        height={88}
      />

      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-2.5">
          <h3 className="text-primary font-bold text-lg">{company}</h3>

          <div className="flex items-center gap-2 uppercase font-bold text-sm text-white">
            {isNew && (
              <span className="bg-primary pt-1.75 pb-0.75 px-2 rounded-full">
                NEW!
              </span>
            )}
            {isFeatured && (
              <span className="bg-secondary pt-1.75 pb-0.75 px-2 rounded-full">
                FEATURED
              </span>
            )}
          </div>
        </div>

        <h2 className="font-bold text-[1.375rem] text-secondary mb-1.75 hover:text-primary cursor-pointer">
          {position}
        </h2>

        <div className="flex items-center gap-4 text-gray text-lg font-medium">
          <span>{postedAt}</span>
          <span className="w-1 h-1 rounded-full bg-gray"></span>
          <span>{contract}</span>
          <span className="w-1 h-1 rounded-full bg-gray"></span>
          <span>{location}</span>
        </div>
      </div>

      <ul className="flex items-center gap-4 ml-auto">
        {skills.map((s) => (
          <li
            key={s}
            className="rounded-sm py-1.75 px-2 bg-primary-10 text-primary font-bold hover:bg-primary hover:text-white cursor-pointer"
          >
            {s}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default JobsItem;
