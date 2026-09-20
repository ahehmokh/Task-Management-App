const UseEdit = () => {

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

    return {
        handleComplete
    };
};

export default UseEdit;