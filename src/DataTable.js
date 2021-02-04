import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./cssFiles/DataTableDemo.css";
import ReactDOM from "react-dom";
import { Tag } from "primereact/tag";

import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ProductService from "./ProductService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
// import "./DataTableDemo.css";

export default function DataTableCrudDemo() {
  let emptyMeter = {
    model: "fifteenmmdp.allmeterfiles",
    pk: null,
    fields: { year: "", month: "", zippedMeterFile: null },
  };
  let emptyProduct = {
    id: null,
    name: "",
    image: null,
    description: "",
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: "INSTOCK",
  };

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const [meterZippedFile, setMeterZippedFile] = useState();

  const newBook = () => {
    console.log("works");
    console.log(meterZippedFile);
    console.log(meterZippedFile.name);
    const uploadData = new FormData();
    uploadData.append("year", year);
    uploadData.append("month", month);
    uploadData.append("meterZippedFile", meterZippedFile, meterZippedFile.name);
    // var csrftoken = getCookie("csrftoken");
    console.log(uploadData);
    fetch("http://127.0.0.1:8000/fmmdp/addNewMeterFile/", {
      method: "POST",
      body: uploadData,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  //////////////////////////////////// my own ///////////////////////////////////

  const [meters, setMeters] = useState(null);
  const [meter, setMeter] = useState(emptyMeter);
  const [meterDialog, setMeterDialog] = useState(false);
  const [selectedMeters, setSelectedMeters] = useState(null);

  //////////////////////////////////////////////////////////////////////////////

  //   const [products, setProducts] = useState(null);

  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  //   const [product, setProduct] = useState(emptyProduct);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const productService = new ProductService();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/fmmdp/getAllMeterData/")
      .then((res) => res.json())
      .then((result) => {
        setMeters(result);
        console.log(result);
      });
    //   meterData.getMeterData().then((data) => setProducts(data));
    // productService.getProducts().then((data) => {
    //   console.log(data);
    //   setProducts(data);
    // });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const openNew = () => {
    setMeter(emptyMeter);
    setSubmitted(false);
    setMeterDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setMeterDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveMeter = () => {
    setSubmitted(true);

    if (meter.name.trim()) {
      let _meters = [...meters]; // Fetching already existing meters. Because we will use it for both edit & creation
      let _meter = { ...meter };
      if (meter.id) {
        // Id not null means it is editing. So call update function on this id
        const index = findIndexById(meter.id);

        _meters[index] = _meter;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Meter Updated",
          life: 3000,
        });
      } else {
        // else just call the create function of view
        _meter.id = createId();
        _meter.image = "product-placeholder.svg";
        _meters.push(_meter);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Created",
          life: 3000,
        });
      }

      setMeters(_meters);
      setMeterDialog(false);
      //   setProductDialog(false);
      setMeter(emptyMeter);
    }
  };

  const editMeter = (meter) => {
    setMeter({ ...meter }); // meter object spread
    setMeterDialog(true);
  };

  //   const editProduct = (product) => {
  //     setProduct({ ...product }); // product object spread
  //     setProductDialog(true);
  //   };

  const confirmDeleteProduct = (meter) => {
    setMeter(meter);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    let _meters = meters.filter((val) => val.id !== meter.id);
    setMeter(_meters);
    setDeleteProductDialog(false);
    setMeter(emptyProduct);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Product Deleted",
      life: 3000,
    });
  };

  const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < meters.length; i++) {
      if (meters[i].pk === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _meters = meters.filter((val) => !selectedMeters.includes(val));
    setMeters(_meters);
    setDeleteProductsDialog(false);
    setSelectedMeters(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Products Deleted",
      life: 3000,
    });
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _meter = { ...meter };
    _meter[`${name}`] = val;

    setMeter(_meter);
  };

  const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    let _meter = { ...meter };
    _meter[`${name}`] = val;

    setMeter(_meter);
  };

  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="New"
          icon="pi pi-plus"
          className="p-button-success p-mr-2"
          onClick={openNew}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedMeters || !selectedMeters.length}
        />
      </React.Fragment>
    );
  };

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const TagDemo = () => {
    return (
      <div>
        <div className="card">
          <Tag className="p-mr-2" severity="success" value="Success"></Tag>
        </div>
      </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          //   onClick={() => editProduct(rowData)}
          onClick={() => {
            console.log(rowData);
            editMeter(rowData);
          }}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteProduct(rowData)}
          //   onClick={() => confirmMeterFileDeletion(rowData)}
        />
      </React.Fragment>
    );
  };

  const header = (
    <div className="table-header">
      <h5 className="p-m-0">Manage Meter Files</h5>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );
  const meterDialogFooter = (
    <React.Fragment>
      <Button
        label="Discard Changes"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Save Meter Data"
        icon="pi pi-check"
        className="p-button-text"
        onClick={() => newBook()}
      />
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );

  return (
    <div className="datatable-crud-demo">
      <Toast ref={toast} />

      <div className="card">
        <Toolbar
          className="p-mb-4"
          left={leftToolbarTemplate}
          //   right={rightToolbarTemplate}
        ></Toolbar>

        <DataTable
          ref={dt}
          value={meters}
          selection={selectedMeters}
          onSelectionChange={(e) => setSelectedMeters(e.value)}
          dataKey="pk"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          globalFilter={globalFilter}
          header={header}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>
          <Column field="fields.year" header="Year" sortable></Column>
          <Column field="fields.month" header="Month" sortable></Column>
          <Column
            field="fields.zippedMeterFile"
            header="All meter Zip file"
          ></Column>

          <Column
            field="inventoryStatus"
            header="Status"
            body={TagDemo}
            sortable
          ></Column>
          <Column header="Action" body={actionBodyTemplate}></Column>
        </DataTable>
      </div>

      <Dialog
        visible={meterDialog}
        style={{ width: "450px" }}
        header="Add Meter Data"
        modal
        className="p-fluid"
        footer={meterDialogFooter}
        onHide={hideDialog} // The cross button at right
      >
        <div className="p-field">
          <label className="p-sr-only">Year</label>

          <InputText
            type="text"
            defaultValue={meter.fields.year}
            placeholder="Year"
            onChange={(evt) => setYear(evt.target.value)}
          />
          {submitted && !meter.name && (
            <small className="p-error">Name is required.</small>
          )}
        </div>

        <div className="p-field">
          <label className="p-sr-only">Month</label>
          <InputText
            type="text"
            defaultValue={meter.fields.month}
            placeholder="Month"
            onChange={(evt) => setMonth(evt.target.value)}
          />
        </div>
        <div className="p-field">
          <label className="p-sr-only">Meter Zip File </label>

          <input
            type="file"
            onChange={(evt) => setMeterZippedFile(evt.target.files[0])}
          />
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductDialog}
        style={{ width: "450px" }}
        header="Confirm"
        modal
        footer={deleteProductDialogFooter}
        onHide={hideDeleteProductDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle p-mr-3"
            style={{ fontSize: "2rem" }}
          />
          {meter && (
            <span>
              Are you sure you want to delete <b>{meter.name}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductsDialog}
        style={{ width: "450px" }}
        header="Confirm"
        modal
        footer={deleteProductsDialogFooter}
        onHide={hideDeleteProductsDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle p-mr-3"
            style={{ fontSize: "2rem" }}
          />
          {meter && (
            <span>Are you sure you want to delete the selected products?</span>
          )}
        </div>
      </Dialog>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<DataTableCrudDemo />, rootElement);
