const STORAGE_KEY = "task-management-tasks";

export const getTasks = () => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);

    if (!storedTasks) {
        return [];
    }

    try {
        return JSON.parse(storedTasks);
    } catch (error) {
        console.error("Failed to parse tasks:", error);
        return [];
    }
};

export const saveTasks = (tasks) => {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    );
};

export const addTask = (task) => {
    const tasks = getTasks();

    const newTask = {
        ...task,
        id: Date.now(),
    };

    const updatedTasks = [
        ...tasks,
        newTask
    ];

    saveTasks(updatedTasks);

    return newTask;
};

export const updateTask = (updatedTask) => {
    const tasks = getTasks();

    const updatedTasks = tasks.map((task) =>
        task.id === updatedTask.id
            ? updatedTask
            : task
    );

    saveTasks(updatedTasks);

    return updatedTask;
};

export const deleteTask = (taskId) => {
    const tasks = getTasks();

    const updatedTasks = tasks.filter(
        (task) => task.id !== taskId
    );

    saveTasks(updatedTasks);

    return true;
};