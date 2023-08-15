import Container from "../../components/Shared/Container/Container";

const BrowseJobs = () => {
  return (
    <Container>
      <div className="flex gap-5 h-screen">
        <div className="bg-[#F5F7FC] w-[450px] rounded-lg px-8">
          <div>
            <h2>Search by Keywords</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full py-4 pl-14 rounded-lg"
              />
              <button className="absolute top-0 left-0 bottom-0 bg-red-300 w-10">F</button>
            </div>
          </div>
          <div>
            <h2>Location</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="City or postcode"
                className="w-full py-4 pl-14 rounded-lg"
              />
              <button className="absolute top-0 left-0 bottom-0 bg-red-300 w-10">F</button>
            </div>
          </div>
        </div>
        <div className="bg-yellow-300 w-[800px]">Show jobs</div>
      </div>
    </Container>
  );
};

export default BrowseJobs;
