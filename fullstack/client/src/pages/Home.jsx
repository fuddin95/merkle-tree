import React from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        console.log(data);
      });
  }, []);
  return (
    <div>
      Home
      <p>{!data ? "No Data From Backend..." : data}</p>
    </div>
  );
};

export default Home;
