import React from "react";
class AddContact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: undefined,
            successMessage: undefined,
        };
    }
    handleCancel = () => {
        this.props.cancelUpdateContact();
      };

      handleAddContactFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.contactName.value.trim();
        const email = e.target.elements.contactEmail.value.trim();
        const phone = e.target.elements.contactPhone.value.trim();
        const id = e.target.elements.contactId.value.trim();
        let response = undefined;
        if (this.props.isUpdating) {
          response = this.props.handleUpdateContact({
            name: name,
            email: email,
            phone: phone,
            id: id,
          });
        } else {
          response = this.props.handleAddContact({
            name: name,
            email: email,
            phone: phone,
          });
        }
    
        if (response.status === "success") {
          this.setState({ errorMessage: undefined, successMessage: response.msg });
          document.querySelector(".contact-form").reset();
        } else {
          this.setState({ errorMessage: response.msg, successMessage: undefined });
        }
      };
    
    render(){
    return (
        <div >
            <form className="contact-form border row 1px solid" onSubmit={this.handleAddContactFormSubmit}>
            <div className="col-12 col-md-4 p-1"></div>
            <div className="col-12 text-white-50">
              {this.props.isUpdating ? "Update Contact" : "Add a new Contact"}
            </div>
            <input
            hidden
            name="contactId"
            defaultValue={
              this.props.isUpdating ? this.props.selectedContact.id : ""
            }
          ></input>
            <div className="col-12 col-md-4 p-1">
                <input className="form-control form-control-sm" name="contactName" placeholder="Name"  defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.name : ""
                }></input>
            </div>
            <div className="col-12 col-md-4 p-1">
                <input className="form-control form-control-sm" name="contactEmail" placeholder="Email"  defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.email : ""
                }></input>
            </div>
            <div className="col-12 col-md-4 p-1">
                <input className="form-control form-control-sm" name="contactPhone" placeholder="Phone"  defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.phone : ""
                }></input>
            </div>
            {this.state.errorMessage===undefined?<div></div>: <div className="col-12 text-center text-danger">{this.state.errorMessage}</div>}
            {this.state.successMessage===undefined?<div></div>: <div className="col-12 text-center text-success">{this.state.successMessage}</div>}
            
            <div
              className={`col-12 p-1 ${
                this.props.isUpdating
                  ? "col-md-4 offset-md-2"
                  : "col-md-6 offset-md-3"
              }`}
            >
                 <button className="btn btn-primary btn-sm form-control">
                {this.props.isUpdating ? "Update" : "Create"}
              </button>
            </div>
            <div className="col-12 col-md-4 p-1">
              {this.props.isUpdating && (
                <button
                  className="btn btn-secondary form-control btn-sm"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
            </form>
        </div>
        

    );
}
}

export default AddContact;