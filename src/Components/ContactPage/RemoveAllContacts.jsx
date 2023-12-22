const RemoveAllContacts=(props)=>{
    return (
        <div>
            <button  className="btn btn-danger form-control" onClick={()=>props.handleRemoveAllContact()}>All</button>
        </div>

    );
}

export default RemoveAllContacts;