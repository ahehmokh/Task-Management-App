import { deleteTask } from "../utils/taskStorage";

const UseDelete = () => {

    const handleDelete = async (task) => {

        try {

            const deleted = deleteTask(task.id);

            return deleted;

        } catch (error) {

            console.log(error);

            return false;
        }
    };

    return { handleDelete };
};

export default UseDelete;