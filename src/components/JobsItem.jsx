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
      className={`bg-white rounded-[5px] py-8 px-10 shadow-card-hover ${
        isFeatured ? "border-l-[5px] border-primary" : ""
      }`}
    >
      <img className="rounded-full" src={images} alt={title} />
    </li>
  );
}

export default JobsItem;
