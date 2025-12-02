import JobsList from "./components/JobsList";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch();

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar />

      <main className="pt-[4.8125rem] pb-[7.5rem]">
        <div className="container">
          <JobsList data={data} />
        </div>
      </main>
    </>
  );
};

export default App;
