import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../store/slices/FilterSlice";
import { clearAllTodos } from "../store/slices/TodoSlice";

type FilterType = "All" | "Active" | "Inactive"

function Filter() {
    const [filter, setFilter] = useState<FilterType>("All")
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeFilter(filter))
    },[filter])

	return (
		<>
			<section className="task-filters">
				<div className="flex justify-between mb-6 flex-wrap max-[390px]:flex-col max-[390px]:items-center gap-2">
					<div className="filter-buttons flex flex-wrap gap-2">
						<button
							onClick={() => setFilter("All")}
							className={`px-3 py-2 border border-blue-500 rounded transition-colors ${
								filter === "All"
									? "bg-blue-600 text-white dark:bg-slate-700"
									: "bg-white dark:bg-gray-900 text-gray-800 dark:text-white hover:bg-blue-500 hover:text-white dark:hover:bg-gray-600"
							}`}
						>
							All
						</button>
						<button
							onClick={() => setFilter("Active")}
							className={`px-3 py-2 border border-blue-500 rounded transition-colors ${
								filter === "Active"
									? "bg-blue-600 text-white dark:bg-slate-700"
									: "bg-white dark:bg-gray-900 text-gray-800 dark:text-white hover:bg-blue-500 hover:text-white dark:hover:bg-gray-600"
							}`}
						>
							Completed
						</button>
						<button
							onClick={() => setFilter("Inactive")}
							className={`px-3 py-2 border border-blue-500 rounded transition-colors ${
								filter === "Inactive"
									? "bg-blue-600 text-white dark:bg-slate-700"
									: "bg-white dark:bg-gray-900 text-gray-800 dark:text-white hover:bg-blue-500 hover:text-white dark:hover:bg-gray-600"
							}`}
						>
							Incompleted
						</button>
					</div>
					<div className="clear-button">
						<button
							onClick={() => dispatch(clearAllTodos())}
							className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
						>
							Clear All
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default Filter;
