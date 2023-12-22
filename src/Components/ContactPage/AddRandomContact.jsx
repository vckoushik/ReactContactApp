import {getRandomUser} from '../../Utility/api';
const GetRandomContact =async (props)=>{
    const response = await getRandomUser();
    console.log(response);
    return props.handleAddRandomContact({
        name: response.data.first_name+" "+response.data.last_name,
        email: response.data.email,
        phone: response.data.phone_number,
    });
}
const AddRandomContact=(props)=>{

    return (
        <div>
            <button  className="btn btn-success form-control" onClick={()=>GetRandomContact(props)}>AddRandomContact</button>
        </div>

    );
}

export default AddRandomContact;