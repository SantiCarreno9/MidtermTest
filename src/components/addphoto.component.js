import React, { Component } from "react";
import "../App.css";

export default class AddLogo extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
      file: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onChangeFile(e) {
    this.setState({
      file: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Name: " + this.state.name);
    console.log("Description: " + this.state.description);
    console.log("Category: " + this.state.category);
    console.log("Quantity: " + this.state.quantity);
    console.log("Price: " + this.state.price);
    console.log("File: " + this.state.file);
    this.resetValues();
  }

  resetValues() {
    this.setState({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
      file: "",
    });
  }

  render() {
    return (
      <div className="container" style={{ justifyItems: "center" }}>
        <div className="col-lg-6">
          <form onSubmit={this.onSubmit}>

            <div class="form-group">
              <h4 style={{ color: "gray", paddingLeft: "60px" }}>
                New Product
              </h4>

              <br />
              <label>Upload Photo</label>
              <br />
              <input
                type="file"
                class="form-control-file"
                id="fileId"
                accept="image/*"
                value={this.state.file}
                onChange={this.onChangeFile}
              />
            </div>

            <br />

            <div class="form-group input">
              <input
                type="text"
                placeholder="Name"
                class="customInput"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>

            <br />

            <div class="form-group input">
              <input
                type="text"
                placeholder="Description"
                class="customInput"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>

            <br />

            <div class="form-group input">
              <input
                type="text"
                placeholder="Category"
                class="customInput"
                value={this.state.category}
                onChange={this.onChangeCategory}
              />
            </div>

            <br />

            <div class="form-group input">
              <input
                type="text"
                placeholder="Quantity"
                class="customInput"
                value={this.state.quantity}
                onChange={this.onChangeQuantity}
              />
            </div>

            <br />

            <div class="form-group input">
              <input
                type="text"
                placeholder="Price"
                class="customInput"
                value={this.state.price}
                onChange={this.onChangePrice}
              />
            </div>

            <br />

            <div class="formButtonsContainer">
            <button type="submit" class="btn btn-primary" style={{marginRight:"20px"}}>
                Submit
              </button>
              <button
                class="btn btn-secondary"
                onClick={this.state.resetValues}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
