import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import UseEdit from "../Custome Hooks/UseEdit";

const EditTask = () => {

    // ==============================
    // Get Task ID
    // ==============================

    const { id } = useParams();

    const navigate = useNavigate();

    // ==============================
    // Edit Hook
    // ==============================

    const { handleEdit } = UseEdit();

    // ==============================
    // Task State
    // ==============================

    const [task, setTask] = useState({
        title: "",
        description: "",
        completed: false,
        priority: "",
        category: ""
    });

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState("");

    // ==============================
    // Fetch Task
    // ==============================

    useEffect(() => {

        const fetchTask = async () => {

            try {

                setIsLoading(true);

                const response = await fetch(
                    `http://localhost:8000/Tasks/${id}`
                );

                if (!response.ok) {
                    throw new Error("Task not found");
                }

                const data = await response.json();

                setTask(data);

            } catch (error) {

                console.log(error);

                setError("Failed to load task.");

            } finally {

                setIsLoading(false);

            }
        };

        fetchTask();

    }, [id]);

    // ==============================
    // Handle Input
    // ==============================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setTask((currentTask) => ({
            ...currentTask,
            [name]: value
        }));

    };

    // ==============================
    // Handle Submit
    // ==============================

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log("Submit clicked");

    const updatedTask = await handleEdit(task);

    console.log("Result:", updatedTask);

    if (!updatedTask) {
        console.log("Update failed");
        return;
    }

    navigate("/HomePage");
};

    // ==============================
    // Loading
    // ==============================

    if (isLoading) {

        return (
            <div className="flex min-h-screen items-center justify-center bg-purple-950">

                <p className="text-xl font-semibold text-white">
                    Loading Task...
                </p>

            </div>
        );

    }

    // ==============================
    // Error
    // ==============================

    if (error) {

        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-purple-950">

                <p className="mb-5 text-xl font-semibold text-red-300">
                    {error}
                </p>

                <Link
                    to="/HomePage"
                    className="rounded-xl bg-pink-500 px-5 py-3 font-semibold text-white"
                >
                    Back to Home
                </Link>

            </div>
        );

    }

    // ==============================
    // UI
    // ==============================

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

                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-3xl">
                                ✏️
                            </div>

                        </Link>

                        <h1 className="text-3xl font-bold text-white sm:text-4xl">
                            Edit Task
                        </h1>

                        <p className="mt-2 text-sm text-white/60 sm:text-base">
                            Update your task information.
                        </p>

                    </div>

                    {/* Form */}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* Title */}

                        <div>

                            <label className="mb-2 block text-sm font-medium text-white">
                                Task Title
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={task.title}
                                required
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/30 transition-all duration-300 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/20"
                            />

                        </div>

                        {/* Description */}

                        <div>

                            <label className="mb-2 block text-sm font-medium text-white">
                                Description
                            </label>

                            <textarea
                                name="description"
                                rows="5"
                                value={task.description}
                                required
                                onChange={handleChange}
                                className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/30 transition-all duration-300 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/20"
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
                                    name="priority"
                                    value={task.priority}
                                    required
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-white/20 bg-purple-950/60 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
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
                                    name="category"
                                    value={task.category}
                                    required
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-white/20 bg-purple-950/60 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
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

                            {/* Save */}

                            <button
                                type="submit"
                                className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:bg-blue-400 active:scale-95"
                            >
                                💾 Save Changes
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default EditTask;