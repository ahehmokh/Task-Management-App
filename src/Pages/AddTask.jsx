import { useState } from "react";
import { Link, useNavigate } from "react-router";
import UseAdd from "../Custome Hooks/UseAdd";

const AddTask = () => {

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        completed: false,
        priority: "",
        category: ""
    });

    const { handleAdd } = UseAdd();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const addedTask = await handleAdd(newTask);

        // If adding the task failed
        if (!addedTask) {
            return;
        }

        console.log("Task Added:", addedTask);

        // Reset form
        setNewTask({
            title: "",
            description: "",
            completed: false,
            priority: "",
            category: ""
        });

        // Go back to HomePage after successful POST
        navigate("/HomePage");
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-purple-950 via-purple-800 to-pink-700">

            {/* Background Effects */}

            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />

            <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Main Content */}

            <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4 py-10 sm:px-6">

                {/* Form Card */}

                <div className="w-full rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">

                    {/* Header */}

                    <div className="mb-8">

                        <Link to="/HomePage">

                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/20 text-3xl">
                                📝
                            </div>

                        </Link>

                        <h1 className="text-3xl font-bold text-white sm:text-4xl">
                            Add New Task
                        </h1>

                        <p className="mt-2 text-sm text-white/60 sm:text-base">
                            Create a new task and keep your work organized.
                        </p>

                    </div>

                    {/* Form */}

                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >

                        {/* Title */}

                        <div>

                            <label className="mb-2 block text-sm font-medium text-white">
                                Task Title
                            </label>

                            <input
                                type="text"
                                placeholder="Enter task title..."
                                value={newTask.title}
                                required
                                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/30 transition-all duration-300 focus:border-pink-400 focus:bg-white/15 focus:ring-2 focus:ring-pink-400/20"
                                onChange={(e) => {
                                    setNewTask({
                                        ...newTask,
                                        title: e.target.value
                                    });
                                }}
                            />

                        </div>

                        {/* Description */}

                        <div>

                            <label className="mb-2 block text-sm font-medium text-white">
                                Description
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Describe your task..."
                                value={newTask.description}
                                required
                                className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/30 transition-all duration-300 focus:border-pink-400 focus:bg-white/15 focus:ring-2 focus:ring-pink-400/20"
                                onChange={(e) => {
                                    setNewTask({
                                        ...newTask,
                                        description: e.target.value
                                    });
                                }}
                            />

                        </div>

                        {/* Priority + Category */}

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                            {/* Priority */}

                            <div>

                                <label className="mb-2 block text-sm font-medium text-white">
                                    Priority
                                </label>

                                <select
                                    value={newTask.priority}
                                    required
                                    className="w-full rounded-xl border border-white/20 bg-purple-950/60 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
                                    onChange={(e) => {
                                        setNewTask({
                                            ...newTask,
                                            priority: e.target.value
                                        });
                                    }}
                                >

                                    <option value="">
                                        Select Priority
                                    </option>

                                    <option value="High">
                                        High
                                    </option>

                                    <option value="Medium">
                                        Medium
                                    </option>

                                    <option value="Low">
                                        Low
                                    </option>

                                </select>

                            </div>

                            {/* Category */}

                            <div>

                                <label className="mb-2 block text-sm font-medium text-white">
                                    Category
                                </label>

                                <select
                                    value={newTask.category}
                                    required
                                    className="w-full rounded-xl border border-white/20 bg-purple-950/60 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
                                    onChange={(e) => {
                                        setNewTask({
                                            ...newTask,
                                            category: e.target.value
                                        });
                                    }}
                                >

                                    <option value="">
                                        Select Category
                                    </option>

                                    <option value="Study">
                                        Study
                                    </option>

                                    <option value="Work">
                                        Work
                                    </option>

                                    <option value="Personal">
                                        Personal
                                    </option>

                                    <option value="Project">
                                        Project
                                    </option>

                                </select>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">

                            {/* Cancel */}

                            <button
                                type="button"
                                onClick={() => navigate("/HomePage")}
                                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white/15 active:scale-95"
                            >
                                Cancel
                            </button>

                            {/* Add */}

                            <button
                                type="submit"
                                className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:bg-pink-400 active:scale-95"
                            >
                                + Add Task
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default AddTask;