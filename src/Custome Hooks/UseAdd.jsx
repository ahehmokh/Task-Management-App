import { v4 as uuidv4 } from "uuid";

const UseAdd = () => {

    const handleAdd = async (task) => {

        try {

            const newTask = {
                ...task,
                id: uuidv4()
            };

            const response = await fetch(
                "http://localhost:8000/Tasks",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newTask)
                }
            );

            if (!response.ok) {
                throw new Error("Failed to add task");
            }

            return await response.json();

        } catch (error) {

            console.log(error);
            return null;

        }
    };

    return { handleAdd };
};

export default UseAdd;