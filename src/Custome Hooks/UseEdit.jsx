import { updateTask } from "../utils/taskStorage";

const UseEdit = () => {

    // ==============================
    // Complete / Uncomplete
    // ==============================

    const handleComplete = async (task) => {

        try {

            const updatedTask = {
                ...task,
                completed: !task.completed
            };

            updateTask(updatedTask);

            return updatedTask;

        } catch (error) {

            console.log(error);

            return null;
        }
    };


    // ==============================
    // Edit Task
    // ==============================

    const handleEdit = async (task) => {

        try {

            console.log("Updating task:", task);

            const updatedTask = updateTask(task);

            console.log("Updated task:", updatedTask);

            return updatedTask;

        } catch (error) {

            console.log("Edit error:", error);

            return null;
        }
    };


    return {
        handleComplete,
        handleEdit
    };
};

export default UseEdit;