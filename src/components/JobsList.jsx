import JobsItem from "./JobsItem";

function JobsList({ data }) {
  return (
    <ul className="flex flex-col gap-6">
      {data &&
        data.map((job) => {
          return <JobsItem key={job.id} job={job} />;
        })}
    </ul>
  );
}

export default JobsList;
