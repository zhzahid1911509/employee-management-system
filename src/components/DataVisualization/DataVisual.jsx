import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const DataVisual = () => {
    
    const [data, setData] = useState([]);
    const [fileSelected, setFileSelected] = useState(false);

    const handleFileChange = (event) => {
        console.log("event:", event.target.files[0]);
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onload = (e) => {
          const contents = e.target.result;
          const lines = contents.split("\n");
          const header = lines[0].split(",");
          const parsedData = [];
      
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].split(",");
            const item = {};
      
            for (let j = 0; j < header.length; j++) {
              const key = header[j];
              const value = line[j];
              item[key] = value;
            }

            // Convert "Date" to a JavaScript Date object
            
      
            parsedData.push(item);
          }
      
          setData(parsedData);
        };
      
        if (file) {
          reader.readAsText(file);
          setFileSelected(true);
        }
      };

    return (
        <div>
            <input type="file" accept=".csv" onChange={handleFileChange} />

{!fileSelected && <p>Please select a file.</p>}

{data.length > 0 && (
  <div className="charts-container">
    {/* Line Chart */}
    <div className="chart">
    <LineChart
  width={500}
  height={300}
  data={data}
  margin={{
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Check-In-Time" domain={["dataMin", "dataMax"]} type="date" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="Employee_ID" stroke="#CA4F8E" strokeWidth="3" />
</LineChart>
    </div>

    {/* Bar Chart */}
    <div className="chart">
    <BarChart width={500} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Employee_ID" domain={["dataMin", "dataMax"]} type="number" />
  <YAxis dataKey="Check-Out-Time" fill="#CA4F8E" />
  <Tooltip />
  <Legend />
  <Bar dataKey="Check-Out-Time" fill="#CA4F8E" />
</BarChart>
    </div>
  </div>
)}
        </div>
    );
};

export default DataVisual;
