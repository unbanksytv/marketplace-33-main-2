import React, { useState, useEffect } from "react";
import axios from "axios";

interface Data {
    id: number,
    name: string,
    email: string
}

const MyCovalent: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://api.covalenthq.com/v1/1/address/demo.eth/portfolio_v2/?key=COVALENT_API_KEY");
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-200 p-4">
      <table className="table-auto">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="bg-white text-gray-800">
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCovalent;
