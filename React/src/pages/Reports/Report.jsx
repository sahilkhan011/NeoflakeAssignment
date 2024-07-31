import React from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "./Report.css"; // Ensure you have this CSS file

function Report() {
  // Example user data
  const users = [
    {
      id: 1,
      name: "John Doe",
      mobile: "123-456-7890",
      email: "john@example.com",
      address: "123 Main St",
      age: 30,
    },
    {
      id: 2,
      name: "Jane Smith",
      mobile: "987-654-3210",
      email: "jane@example.com",
      address: "456 Elm St",
      age: 25,
    },
    {
      id: 3,
      name: "Mike Johnson",
      mobile: "555-555-5555",
      email: "mike@example.com",
      address: "789 Oak St",
      age: 35,
    },
  ];

  const actionBodyTemplate = () => {
    return (
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-primary"
      />
    );
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">User Report</h1>
          <div className="table-responsive">
            <DataTable value={users} responsiveLayout="scroll">
              <Column field="id" header="#" style={{ width: "50px" }}></Column>
              <Column
                field="name"
                header="Name"
                style={{ minWidth: "150px" }}
              ></Column>
              <Column
                field="mobile"
                header="Mobile"
                style={{ minWidth: "150px" }}
              ></Column>
              <Column
                field="email"
                header="Email"
                style={{ minWidth: "200px" }}
              ></Column>
              <Column
                field="address"
                header="Address"
                style={{ minWidth: "300px" }}
              ></Column>
              <Column
                field="age"
                header="Age"
                style={{ minWidth: "100px" }}
              ></Column>
              <Column
                header="Edit"
                body={actionBodyTemplate}
                style={{ width: "100px" }}
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
