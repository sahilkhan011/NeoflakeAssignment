import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { fetchData } from "../../Api";
import "./Report.css";
import WaitingOverlay from "../../Component/WaitingOverlay/WaitingOverlay";

function Report() {
  const [isWaiting, setWaiting] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setWaiting(false); // Set waiting to false only after data is fetched
      } catch (error) {
        console.error(error.message);
        setWaiting(false); // Set waiting to false even if there is an error
      }
    };

    loadData();
  }, []);

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  const thumbnailBodyTemplate = (rowData) => {
    return (
      <img
        src={rowData.thumbnailUrl}
        alt={rowData.title}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          cursor: "pointer",
        }}
        onClick={() => handleRedirect(rowData.videoUrl)}
      />
    );
  };

  const titleBodyTemplate = (rowData) => {
    return (
      <span
        style={{ cursor: "pointer" }}
        onClick={() => handleRedirect(rowData.videoUrl)}
      >
        {rowData.title}
      </span>
    );
  };

  return (
    <>
      {isWaiting && <WaitingOverlay message="Loading data, please wait..." />}
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Report</h1>
            <div className="table-responsive">
              <DataTable value={data} responsiveLayout="scroll">
                <Column
                  header="Thumbnail"
                  body={thumbnailBodyTemplate}
                  style={{ width: "150px" }}
                ></Column>
                <Column
                  field="title"
                  header="Title"
                  body={titleBodyTemplate}
                  style={{ minWidth: "150px" }}
                ></Column>
                <Column
                  field="description"
                  header="Description"
                  style={{ minWidth: "300px" }}
                ></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
