import { Page } from "../App";

type NavbarProps = {
    handlePageChange: (p: Page) => void;
};

export default function Navbar({ handlePageChange }: NavbarProps) {
    return (
        <>
            <nav className="flex flex-col rounded-3xl bg-neutral-400/20 p-4 backdrop-blur md:pr-18 dark:bg-neutral-800/40">
                <ul className="flex flex-1 flex-row justify-center gap-4 md:flex-col">
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Home")}
                    >
                        <span className="material-symbols-rounded text-black dark:text-white">
                            home
                        </span>
                        <p className="text-xs text-black md:text-lg dark:text-white">
                            Home
                        </p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Currently")}
                    >
                        <span className="material-symbols-rounded text-black dark:text-white">
                            schedule
                        </span>
                        <p className="text-xs text-black md:text-lg dark:text-white">
                            Currently
                        </p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Hourly")}
                    >
                        <span className="material-symbols-rounded text-black dark:text-white">
                            calendar_clock
                        </span>
                        <p className="text-xs text-black md:text-lg dark:text-white">
                            Hourly
                        </p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Daily")}
                    >
                        <span className="material-symbols-rounded text-black dark:text-white">
                            calendar_view_week
                        </span>
                        <p className="text-xs text-black md:text-lg dark:text-white">
                            Daily
                        </p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Radar")}
                    >
                        <span className="material-symbols-rounded text-black dark:text-white">
                            radar
                        </span>
                        <p className="text-xs text-black md:text-lg dark:text-white">
                            Radar
                        </p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:mt-auto md:flex-row"
                        onClick={() => handlePageChange("Settings")}
                    >
                        <span className="material-symbols-rounded text-black dark:text-white">
                            settings
                        </span>
                        <p className="text-xs text-black md:text-lg dark:text-white">
                            Settings
                        </p>
                    </li>
                </ul>
            </nav>
        </>
    );
}
