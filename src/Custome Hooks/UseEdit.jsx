const UseEdit = () => {

    // ==============================
    // Complete / Uncomplete
    // ==============================

    const handleComplete = async (task) => {

        try {

            const response = await fetch(
                `http://localhost:8000/Tasks/${task.id}`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        completed: !task.completed
                    })
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update task");
            }

            const updatedTask = await response.json();

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

            console.log("Sending task:", task);

            const response = await fetch(
                `http://localhost:8000/Tasks/${task.id}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(task)
                }
            );

            console.log("Response status:", response.status);

            if (!response.ok) {
                throw new Error("Failed to edit task");
            }

            const updatedTask = await response.json();

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