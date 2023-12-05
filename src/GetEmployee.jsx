import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "./customFetch";

const GetEmployee = () => {
  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetchEmployees();
      const data = await response.data;
      return data;
    },
  });

  if (data) {
    return (
      <div>
        {data.map((eachData) => {
          return (
            <div key={eachData.id}>
              <h1>{eachData.firstName}</h1>
            </div>
          );
        })}
      </div>
    );
  }

  return <h1>Wait still Loading...</h1>;
};

export default GetEmployee;
