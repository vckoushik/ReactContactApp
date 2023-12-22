import Contact from "./Contact";
const GeneralContact=(props)=>{
    return (
        <div className="border 1px solid rounded">
          <div className="text-center text-white-50" style={{fontWeight:"bold",fontSize:"2rem"}}>General Contacts</div>
          {props.contacts.map((contact,index)=>(
            <Contact contact={contact} key={index} favoriteClick={props.favoriteClick} deleteClick={props.deleteClick} updateClick={props.updateClick}></Contact>
          ))};
        </div>

    );
}

export default GeneralContact;