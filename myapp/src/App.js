import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import TableRow from "./TableRow";

function App() {
  const [val, setVal] = useState(0);

  // API states
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Increment / Decrement
  const handleIncrement = () => setVal(prev => prev + 1);
  const handleDecrement = () => setVal(prev => prev - 1);

  // Debouncing — reset negative value after 2 seconds
  useEffect(() => {
    if (val < 0) {
      const timer = setTimeout(() => {
        setVal(0);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [val]);

  // Fetch API once
  useEffect(() => {
    const FetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        console.log("API Error:", err);
        setLoading(false);
      }
    };

    FetchApi();
  }, []);

  return (
    <div className="App">
      <h1>Learning React</h1>

      {/* Counter Component */}
      <Counter
        val={val}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td className="aaa">Loading...</td>
              <td className="aaa">Loading...</td>
              <td className="aaa">Loading...</td>
            </tr>
          ) : (
            data.map(item => (
              <TableRow key={item.id} item={item} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
