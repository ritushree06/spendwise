import React, { useState } from "react";
import Papa from "papaparse";
export default function UploadPage() {
  const [previewData, setPreviewData] = useState([]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === "text/csv") {
      setFile(selected);
      parseCSV(selected);
    } else {
      setError("Please upload a valid CSV file.");
    }
  };

  const handleUpload = () => {
    console.log("Sending to backend:", previewData);
    // TODO: Send to backend API
    alert("Parsed transactions ready to be sent to backend!");
  };
  const parseCSV = (file) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setPreviewData(results.data.slice(0, 10));
      },
      error: function () {
        setError("Failed to parse CSV.");
      },
    });
  };
  return (
    <section className="min-h-screen bg-white text-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Upload Your <span className="text-neonGreen">Transactions</span>
        </h1>
        <p className=" mb-10 max-w-xl mx-auto">
          Upload your bank or wallet CSV file to preview your transactions.
        </p>

        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="mb-10 block mx-auto text-center text-sm text-black file:mr-4 file:py-4 file:px-5 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neonGreen file:text-black hover:file:bg-green-600"
        />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {previewData.length > 0 && (
          <div className="text-left  text-black overflow-x-auto bg-gray-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl text-darkGreen font-semibold mb-4 text-center">
              CSV Preview
            </h2>
            <table className="w-full text-sm table-auto border-collapse bg-white">
              <thead className="text-black border-b border-gray-600">
                <tr>
                  {Object.keys(previewData[0]).map((key, idx) => (
                    <th key={idx} className="px-4 py-2 text-left capitalize">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {previewData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-700">
                    {Object.values(row).map((val, idx) => (
                      <td key={idx} className="px-4 py-2">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleUpload}
              className="mt-6 bg-neonGreen text-black px-6 py-3 rounded-full hover:bg-green-700 transition block mx-auto"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
