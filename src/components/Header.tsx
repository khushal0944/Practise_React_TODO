import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../store/slices/ThemeSlice";

type ThemeType = "light" | "dark";

function Header() {
    const theme: ThemeType = useSelector((state: any) => state.themeReducer.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        const html = document.querySelector("html");
        html?.classList.remove("light", "dark");
        html?.classList.add(theme);
    }, [theme])

	return (
		<header className="p-4 flex justify-between items-center">
			<a href="/" className="text-3xl font-bold text-gray-950 dark:text-gray-200 p-2">
				ToDo
			</a>
			<div className="theme-toggle">
				<button
					onClick={() => dispatch(switchTheme())}
					className="bg-[var(--primary-color)] cursor-pointer hover:bg-blue-600 text-white p-2 rounded transition-colors"
				>
					Theme
				</button>
			</div>
		</header>
	);
}

export default Header;
