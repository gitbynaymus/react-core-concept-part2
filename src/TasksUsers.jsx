import { use } from "react";
import TaskUser from "./TaskUser";

export default function TaskUsers({fetchTaskUsers}){
    if(fetchTaskUsers){
        const taskUsers = use(fetchTaskUsers);
            return (
                <div className="card">
                    <h3> Total User Information : {taskUsers.length} </h3>
                    {
                        taskUsers.map(taskUser => <TaskUser key={taskUser.id} taskUser = {taskUser} ></TaskUser>)
                    }
                </div>
            )
    }
    else{
        <h3>Error to data fetch</h3>
    }

}