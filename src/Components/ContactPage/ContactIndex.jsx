import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
import AddContact from "./AddContact";
import FavoriteContact from "./FavoriteContact";
import GeneralContact from "./GeneralContact";

class ContactIndex extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            contactList:[
            {
                id: 1,
                name: "Tony Stark",
                email: "tony@stark.com",
                phone: "9409409444",
                isFavorite: false,

            },
            {
                id: 2,
                name: "John Snow",
                email: "john@gmail.com",
                phone: "84383450102",
                isFavorite: true,

            },
        ],
        selectedContact:undefined,
        isUpdating: false,
        };
    }

    handleAddContact=(newContact)=>{
        if (newContact.name === "") {
            return { status: "failure", msg: "Please Enter a valid Name" };
          } else if (newContact.phone === "") {
            return { status: "failure", msg: "Please Enter a valid Phone Number" };
          }
          const duplicateRecord = this.state.contactList.filter((x) => {
            if (x.name === newContact.name && x.phone === newContact.phone) {
              return true;
            }
            else{
                return false;
            }
          });
          if (duplicateRecord.length > 0) {
            return { status: "failure", msg: "Duplicate Record" };
          } 
          else {
            let idNew=1;
            if(this.state.contactList.length !==0){
                idNew = this.state.contactList[this.state.contactList.length - 1].id + 1
            }
                const contact={...newContact,
                    id: idNew,
                    isFavorite : false,
                };
                console.log(contact);
                this.setState((prevstate)=>{
                    return {
                        contactList: prevstate.contactList.concat([contact]),
                    };
                });
                return { status: "success", msg: "Contact was added successfully" };
            }
        
         
    };

    handleUpdateContact = (updatedContact) => {
        console.log(updatedContact);
        if (updatedContact.name === "") {
          return { status: "failure", msg: "Please Enter a valid Name" };
        } else if (updatedContact.phone === "") {
          return { status: "failure", msg: "Please Enter a valid Phone Number" };
        }
    
        this.setState((prevState) => {
          return {
            contactList: prevState.contactList.map((obj) => {
              if (obj.id == updatedContact.id) {
                return {
                  ...obj,
                  name: updatedContact.name,
                  email: updatedContact.email,
                  phone: updatedContact.phone,
                };
              }
              return obj;
            }),
            isUpdating: false,
            selectedContact: undefined,
          };
        });
        console.log(this.state.contactList);
        return { status: "success", msg: "Contact was updated successfully" };
      };
    
    handleToggleFavorite=(contact)=>{
        this.setState((prevstate)=>{
            return{
                contactList : prevstate.contactList.map((con)=>{
                    if(con.id === contact.id){
                        return {...con,isFavorite : ! con.isFavorite}
                    }
                    else{
                        return con;
                    }
                }),
            }
        })
    };
    handleDeleteContact = (contactId) => {
        console.log(contactId);
        this.setState((prevState) => {
          return {
            contactList: prevState.contactList.filter((obj) => {
              return obj.id !== contactId;
            }),
          };
        });
    };

    handleAddRandomContact = (newContact) => {
        let idNew=1;
        if(this.state.contactList.length !==0){
            idNew = this.state.contactList[this.state.contactList.length - 1].id + 1
        }
    
        const newFinalContact = {
          ...newContact,
          id:idNew,
          isFavorite: false,
        };
        
        this.setState((prevState) => {
          return {
            contactList: prevState.contactList.concat([newFinalContact]),
          };
        });
    };
    handleRemoveAllContact = () => {
        this.setState((prevState) => {
          return {
            contactList: [],
          };
        });
    };
    handleUpdateClick =(contact)=>{
        this.setState((prevState)=>{
            return {
                selectedContact : contact,
                isUpdating: true,
            };
        });
    }
    handleCancelUpdateContact =(contact)=>{
        this.setState((prevState)=>{
            return {
                selectedContact : undefined,
                isUpdating: false,
            };
        });
    }
    render(){
        return(
            <div className="container" style={{minHeight:"85vh"}}>
              <div className="row py-3">
                <div className="col-4 offset-2">
                    <AddRandomContact  handleAddRandomContact={this.handleAddRandomContact}/>
                </div>
                <div className="col-4">
                    <RemoveAllContacts handleRemoveAllContact={this.handleRemoveAllContact}/>
                </div>
                <div className="row py-2">
                    <AddContact 
                    handleAddContact={this.handleAddContact}
                    isUpdating={this.state.isUpdating}
                    selectedContact={this.state.selectedContact}
                    cancelUpdateContact={this.handleCancelUpdateContact}
                    handleUpdateContact={this.handleUpdateContact}
                    />
                </div>
                <div className="row py-2">
                    <FavoriteContact contacts={this.state.contactList.filter(c=>c.isFavorite === true)} favoriteClick={this.handleToggleFavorite} deleteClick={this.handleDeleteContact} updateClick={this.handleUpdateClick}/>
                </div>
                <div className="row py-2">
                    <GeneralContact contacts={this.state.contactList.filter(c=>c.isFavorite === false)} favoriteClick={this.handleToggleFavorite} deleteClick={this.handleDeleteContact} updateClick={this.handleUpdateClick}/>
                </div>

              </div>
            </div>
        );

    }
}
export default ContactIndex;