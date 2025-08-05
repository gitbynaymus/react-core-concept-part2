export default function TaskUser({taskUser}){
    const{name,company,address} = taskUser;
 

    return(
        <div className="card2">
            <h3>Name : {name} </h3>
            <p>Company Name : {company.name} </p>
            <p>City : {address.city} </p>
        </div>
    )
}