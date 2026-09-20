const UseDelete = () => {

    const handleDelete = async (task) => {

        try {

            const response = await fetch(
                `http://localhost:8000/Tasks/${task.id}`,
                {
                    method: "DELETE"
                }
            );

            if (!response.ok) {
                throw new Error("Failed to delete task");
            }

            return true;

        } catch (error) {

            console.log(error);

            return false;
        }
    };

    return { handleDelete };
};

export default UseDelete;