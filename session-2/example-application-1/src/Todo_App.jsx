
import EditTodo_Modal from './modal/EditTodo_Modal';
import React, { useState, useEffect } from 'react';
import AddTodo_Modal from './modal/AddTodo_Modal';


export default function Todo_App() {

    // Scroll to top 
    const [state, setState] = useState({
        isVisible: true,
        showScrollTop: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            setState((prev) => ({
                ...prev,
                showScrollTop: window.scrollY > 300,
            }));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleVisibility = () => {
        setState((prev) => ({
            ...prev,
            isVisible: !prev.isVisible,
        }));
    };
    // Scroll to top 

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('professional_todos');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error(e);
            }
        }
        return [
            { id: '1', text: 'Understand UI as a function of state', isCompleted: false },
            { id: '2', text: 'Compare state with static variables and props', isCompleted: false },
            { id: '3', text: 'Learn why state triggers component re-renders', isCompleted: false },
            { id: '4', text: 'Initialize state with primitive values (strings, numbers, booleans)', isCompleted: false },
            { id: '5', text: 'Initialize state with complex types (arrays and objects)', isCompleted: false },
            { id: '6', text: 'Use lazy initial state for expensive computations', isCompleted: false },
            { id: '7', text: 'Update state using direct values vs callback updaters (prev => ...)', isCompleted: false },
            { id: '8', text: 'Avoid direct state mutation and understand immutability in React', isCompleted: false },
            { id: '9', text: 'Handle basic click events (onClick)', isCompleted: false },
            { id: '10', text: 'Handle input change events (onChange)', isCompleted: false },
            { id: '11', text: 'Pass arguments and parameters to event handler callbacks', isCompleted: false },
            { id: '12', text: 'Prevent default browser behavior using e.preventDefault()', isCompleted: false },
            { id: '13', text: 'Stop event propagation using e.stopPropagation()', isCompleted: false },
            { id: '14', text: 'Build basic controlled input components', isCompleted: false },
            { id: '15', text: 'Manage multiple form fields using a single state object', isCompleted: false },
            { id: '16', text: 'Handle checkbox and radio button states', isCompleted: false },
            { id: '17', text: 'Handle select dropdown inputs', isCompleted: false },
            { id: '18', text: 'Implement basic client-side form validation and error messages', isCompleted: false },
            { id: '19', text: 'Handle form submission events and clear inputs afterward', isCompleted: false },
            { id: '20', text: 'Understand what a side effect is in React components', isCompleted: false },
            { id: '21', text: 'Write a basic useEffect hook without a dependency array', isCompleted: false },
            { id: '22', text: 'Use an empty dependency array to run effects only on mount', isCompleted: false },
            { id: '23', text: 'Track specific variables inside the dependency array', isCompleted: false },
            { id: '24', text: 'Implement cleanup functions in useEffect (e.g., event listeners, timers)', isCompleted: false },
            { id: '25', text: 'Fetch data from an API inside useEffect securely', isCompleted: false },
            { id: '26', text: 'Handle loading and error states during asynchronous data fetching', isCompleted: false },
            { id: '27', text: 'Prevent race conditions and memory leaks in useEffect cleanups', isCompleted: false }
        ];
    });

    const [filter, setFilter] = useState('all');
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem('professional_todos', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (text) => {
        const newTask = {
            id: Date.now().toString(),
            text,
            isCompleted: false,
        };
        setTasks([newTask, ...tasks]);
    };

    const handleSaveEdit = (id, newText) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, text: newText } : t));
    };

    const openEditModal = (task) => {
        setTaskToEdit(task);
        setIsEditOpen(true);
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    const filteredTasks = tasks.filter(t => {
        if (filter === 'active') return !t.isCompleted;
        if (filter === 'completed') return t.isCompleted;
        return true;
    });

    const completedCount = tasks.filter(t => t.isCompleted).length;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center py-12 px-4 sm:px-6">
            <div className="w-full max-w-xl">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Task Manager</h1>
                        <p className="text-sm text-slate-500 mt-0.5">
                            {completedCount} of {tasks.length} tasks completed
                        </p>
                    </div>
                    <button
                        onClick={() => setIsAddOpen(true)}
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm shadow-indigo-200 transition-all"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                        </svg>
                        New Task
                    </button>
                </div>

                {/* Filters */}
                <div className="flex items-center justify-between bg-white border border-slate-200/80 p-1.5 rounded-xl shadow-xs mb-6">
                    <div className="flex gap-1 w-full">
                        {['all', 'active', 'completed'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`flex-1 py-2 text-xs font-semibold capitalize rounded-lg transition-all ${filter === tab
                                    ? 'bg-slate-100 text-slate-900 shadow-xs'
                                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tasks List */}
                <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden divide-y divide-slate-100">
                    {filteredTasks.length === 0 ? (
                        <div className="py-12 px-4 text-center">
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <p className="text-sm font-medium text-slate-600">No tasks found</p>
                            <p className="text-xs text-slate-400 mt-0.5">Get started by creating a new task.</p>
                        </div>
                    ) : (
                        filteredTasks.map((task) => (
                            <div
                                key={task.id}
                                className="group flex items-center justify-between p-4 hover:bg-slate-50/60 transition-colors"
                            >
                                <div className="flex items-center gap-3.5 min-w-0 pr-4">
                                    <button
                                        onClick={() => toggleComplete(task.id)}
                                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${task.isCompleted
                                            ? 'bg-indigo-600 border-indigo-600 text-white'
                                            : 'border-slate-300 bg-white hover:border-slate-400'
                                            }`}
                                    >
                                        {task.isCompleted && (
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                    <span
                                        className={`text-sm truncate transition-colors ${task.isCompleted ? 'line-through text-slate-400' : 'text-slate-700 font-medium'
                                            }`}
                                    >
                                        {task.text}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1 transition-opacity">
                                    <button
                                        onClick={() => openEditModal(task)}
                                        className="p-1.5 cursor-pointer text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                        title="Edit Task"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => deleteTask(task.id)}
                                        className="p-1.5 cursor-pointer text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                                        title="Delete Task"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>


            {state.showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 bg-slate-900 hover:bg-indigo-600 active:bg-indigo-700 text-white rounded-2xl shadow-lg transition-all z-50 flex items-center justify-center group"
                    title="Scroll to top"
                >
                    <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}

            {/* Modals */}
            <AddTodo_Modal
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onAdd={handleAddTask}
            />

            <EditTodo_Modal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                onSave={handleSaveEdit}
                task={taskToEdit}
            />
        </div>
    );
}

