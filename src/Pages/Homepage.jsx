import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

import { myTool } from "../Context/DataTransferringtool";
import UseEdit from "../Custome Hooks/UseEdit";
import UseDelete from "../Custome Hooks/UseDelete";
import { getTasks } from "../utils/taskStorage";

const HomePage = () => {

    // ==============================
    // Context
    // ==============================

    const myData = useContext(myTool);

    // ==============================
    // Filter
    // ==============================

    const [filterType, setFilterType] = useState("all");

    // ==============================
    // Load Tasks From LocalStorage
    // ==============================

    useEffect(() => {

        const storedTasks = getTasks();

        myData.setTasks(storedTasks);

    }, []);

    // ==============================
    // Tasks
    // ==============================

    const tasks = myData.Tasks || [];

    // ==============================
    // Hooks
    // ==============================

    const { handleComplete } = UseEdit();

    const { handleDelete } = UseDelete();

    // ==============================
    // Statistics
    // ==============================

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed === true
    ).length;

    const pendingTasks = tasks.filter(
        (task) => task.completed === false
    ).length;

    // ==============================
    // Filter Tasks
    // ==============================

    const filteredTasks = tasks.filter((task) => {

        if (filterType === "completed") {
            return task.completed === true;
        }

        if (filterType === "pending") {
            return task.completed === false;
        }

        return true;
    });

    // ==============================
    // Complete / Uncomplete
    // ==============================

    const handleCheckbox = async (task) => {

        const updatedTask = await handleComplete(task);

        if (!updatedTask) {
            return;
        }

        myData.setTasks((currentTasks) =>
            currentTasks.map((currentTask) =>
                currentTask.id === updatedTask.id
                    ? updatedTask
                    : currentTask
            )
        );
    };

    // ==============================
    // Delete Task
    // ==============================

    const deleteTask = async (task) => {

        const deleted = await handleDelete(task);

        if (!deleted) {
            return;
        }

        myData.setTasks((currentTasks) =>
            currentTasks.filter(
                (currentTask) => currentTask.id !== task.id
            )
        );
    };

    return (

        <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-purple-950 via-purple-800 to-pink-700">

            {/* ==============================
                Background Effects
            ============================== */}

            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />

            <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

            {/* ==============================
                Main Content
            ============================== */}

            <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                {/* ==============================
                    Header
                ============================== */}

                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                        <h1 className="text-3xl font-bold text-white sm:text-4xl">
                            My Tasks
                        </h1>

                        <p className="mt-2 text-sm text-white/60 sm:text-base">
                            Manage your tasks and stay productive.
                        </p>

                    </div>

                    <Link to="/AddTask">

                        <button
                            className="w-full rounded-xl bg-pink-500 px-5 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:bg-pink-400 active:scale-95 sm:w-auto"
                        >

                            <span className="sm:hidden">
                                ＋
                            </span>

                            <span className="hidden sm:inline">
                                ＋ Add Task
                            </span>

                        </button>

                    </Link>

                </div>

                {/* ==============================
                    Statistics
                ============================== */}

                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                    {/* Total */}

                    <button
                        onClick={() => setFilterType("all")}
                        className={`rounded-2xl border bg-white/10 p-5 text-left backdrop-blur-xl transition-all duration-300 ${
                            filterType === "all"
                                ? "border-pink-400 shadow-lg shadow-pink-500/20"
                                : "border-white/20 hover:bg-white/15"
                        }`}
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-white/60">
                                    Total Tasks
                                </p>

                                <p className="mt-1 text-3xl font-bold text-white">
                                    {totalTasks}
                                </p>

                            </div>

                            <div className="text-3xl">
                                📋
                            </div>

                        </div>

                    </button>

                    {/* Completed */}

                    <button
                        onClick={() => setFilterType("completed")}
                        className={`rounded-2xl border bg-white/10 p-5 text-left backdrop-blur-xl transition-all duration-300 ${
                            filterType === "completed"
                                ? "border-green-400 shadow-lg shadow-green-500/20"
                                : "border-white/20 hover:bg-white/15"
                        }`}
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-white/60">
                                    Completed
                                </p>

                                <p className="mt-1 text-3xl font-bold text-white">
                                    {completedTasks}
                                </p>

                            </div>

                            <div className="text-3xl">
                                ✅
                            </div>

                        </div>

                    </button>

                    {/* Pending */}

                    <button
                        onClick={() => setFilterType("pending")}
                        className={`rounded-2xl border bg-white/10 p-5 text-left backdrop-blur-xl transition-all duration-300 ${
                            filterType === "pending"
                                ? "border-yellow-400 shadow-lg shadow-yellow-500/20"
                                : "border-white/20 hover:bg-white/15"
                        }`}
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-white/60">
                                    Pending
                                </p>

                                <p className="mt-1 text-3xl font-bold text-white">
                                    {pendingTasks}
                                </p>

                            </div>

                            <div className="text-3xl">
                                ⏳
                            </div>

                        </div>

                    </button>

                </div>

                {/* ==============================
                    Filter Title
                ============================== */}

                <div className="mb-5 flex items-center justify-between">

                    <div>

                        <h2 className="text-xl font-semibold text-white">

                            {filterType === "all" && "All Tasks"}

                            {filterType === "completed" && "Completed Tasks"}

                            {filterType === "pending" && "Pending Tasks"}

                        </h2>

                        <p className="mt-1 text-sm text-white/50">

                            {filteredTasks.length}{" "}

                            {filteredTasks.length === 1
                                ? "task"
                                : "tasks"}

                        </p>

                    </div>

                </div>

                {/* ==============================
                    Tasks
                ============================== */}

                {filteredTasks.length === 0 ? (

                    <div className="rounded-2xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur-xl">

                        <div className="mb-3 text-5xl">
                            📝
                        </div>

                        <h3 className="text-xl font-semibold text-white">
                            No tasks found
                        </h3>

                        <p className="mt-2 text-sm text-white/50">
                            There are no tasks in this section.
                        </p>

                    </div>

                ) : (

                    <div className="grid gap-4">

                        {filteredTasks.map((task) => (

                            <div
                                key={task.id}
                                className={`rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/15 ${
                                    task.completed
                                        ? "opacity-75"
                                        : ""
                                }`}
                            >

                                <div className="flex items-start gap-4">

                                    {/* Checkbox */}

                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() =>
                                            handleCheckbox(task)
                                        }
                                        className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-pink-400"
                                    />

                                    {/* Task Content */}

                                    <div className="min-w-0 flex-1">

                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                                            <div className="min-w-0">

                                                <h3
                                                    className={`text-lg font-semibold ${
                                                        task.completed
                                                            ? "text-white/50 line-through"
                                                            : "text-white"
                                                    }`}
                                                >
                                                    {task.title}
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-white/50">
                                                    {task.description}
                                                </p>

                                            </div>

                                            {/* Priority */}

                                            <span
                                                className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                                                    task.priority === "High"
                                                        ? "bg-red-500/20 text-red-300"
                                                        : task.priority === "Medium"
                                                        ? "bg-yellow-500/20 text-yellow-300"
                                                        : "bg-green-500/20 text-green-300"
                                                }`}
                                            >
                                                {task.priority}
                                            </span>

                                        </div>

                                        {/* Category / Status / Buttons */}

                                        <div className="mt-4 flex flex-wrap items-center gap-2">

                                            <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-200">
                                                {task.category}
                                            </span>

                                            <span
                                                className={`rounded-full px-3 py-1 text-xs ${
                                                    task.completed
                                                        ? "bg-green-500/20 text-green-300"
                                                        : "bg-yellow-500/20 text-yellow-300"
                                                }`}
                                            >
                                                {task.completed
                                                    ? "Completed"
                                                    : "Pending"}
                                            </span>

                                            {/* Buttons */}

                                            <div className="ml-auto flex gap-2">

                                                {/* Edit */}

                                                <Link
                                                    to={`/EditTask/${task.id}`}
                                                    className="rounded-lg bg-blue-500/20 px-3 py-2 text-sm text-blue-300 transition-all duration-300 hover:bg-blue-500/30"
                                                >

                                                    <span className="sm:hidden">
                                                        ✏️
                                                    </span>

                                                    <span className="hidden sm:inline">
                                                        ✏️ Edit
                                                    </span>

                                                </Link>

                                                {/* Delete */}

                                                <button
                                                    onClick={() =>
                                                        deleteTask(task)
                                                    }
                                                    className="rounded-lg bg-red-500/20 px-3 py-2 text-sm text-red-300 transition-all duration-300 hover:bg-red-500/30"
                                                >

                                                    <span className="sm:hidden">
                                                        🗑️
                                                    </span>

                                                    <span className="hidden sm:inline">
                                                        🗑️ Delete
                                                    </span>

                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
};

export default HomePage;