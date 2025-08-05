export default function Friend({friend}){

    // console.log(friend);
    //destructuring
    const {name, email,address,phone} = friend;
    return(
        <div className="card"> 
            <h4 >Name: {name} </h4>
            <p>Email: {email} </p>
            <p>Address: {address.street} </p>
            <p>Phone: {phone}</p>
        </div>
    )
}