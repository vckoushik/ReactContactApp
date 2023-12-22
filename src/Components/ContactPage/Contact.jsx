const Contact=(props)=>{
    return (
        <div className="border 1px solid row rounded m-2" style={{color:"white"}}>
           <div className="row py-2">
                <div className="col-2 py-2">
                    <img alt="" src={`https://ui-avatars.com/api/?name=${props.contact.name}`}></img>
                </div>
                <div className="col-6">
                    <div className="text-capitalize font-weight-bold" style={{width:"80%",color:"yellow",fontSize:"30px",fontWeight:"bold"}}>{props.contact.name}</div>
                    <div className="text-white-50">{props.contact.email}</div>
                    <div className="text-white-50">{props.contact.phone}</div>
                </div>
                <div className="col-4">
                    <div className="row">
                    <div className="col-4">
                        {props.contact.isFavorite === true ? 
                         <button className="btn btn-warning m-3"
                          onClick={()=>props.favoriteClick(props.contact)}
                          ><i className="bi bi-star"></i>
                        </button>
                          :<button className="btn btn-outline-warning m-3" 
                            onClick={()=>props.favoriteClick(props.contact)}>
                            <i className="bi bi-star"></i>
                        </button>
                        }
                       
                    </div>
                    <div className="col-8">
                    <button className="btn btn-warning m-3" onClick={()=>{props.updateClick(props.contact)}}> <i className="bi bi-pencil-square"></i></button>
                 
                    <button className="btn btn-danger m-3"  onClick={() => props.deleteClick(props.contact.id)}> <i className="bi bi-trash text-white"></i></button>
                    </div>
                    </div> 
                </div>
           </div>
          
        </div>

    );
}

export default Contact;