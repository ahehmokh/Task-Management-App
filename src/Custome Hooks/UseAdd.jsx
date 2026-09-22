import { addTask } from "../utils/taskStorage";

const UseAdd = () => {

    const handleAdd = async (task) => {

        try {

            const newTask = addTask(task);

            return newTask;

        } catch (error) {

            console.log(error);

            return null;
        }
    };

    return { handleAdd };
};

export default UseAdd;