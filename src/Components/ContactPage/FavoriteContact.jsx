import Contact from "./Contact";
const FavoriteContact=(props)=>{
    return (
        <div className="border 1px solid rounded bg-secondary" >
          <div className="text-center text-white" style={{fontWeight:"bold",fontSize:"2rem"}}>Favorite Contacts</div>
          {props.contacts.map((contact,index)=>(
            <Contact contact={contact} key={index} favoriteClick={props.favoriteClick} deleteClick={props.deleteClick} updateClick={props.updateClick}></Contact>
          ))};
        </div>

    );
}

export default FavoriteContact;