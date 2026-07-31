import { Page } from "../types/types";

type NavbarProps = {
    handlePageChange: (p: Page) => void;
    pageType: Page;
};

export default function Navbar({ handlePageChange, pageType }: NavbarProps) {
    return (
        <>
            <nav className="flex flex-col items-center rounded-3xl bg-neutral-400/20 p-4 backdrop-blur md:pr-18 dark:bg-neutral-800/40">
                <ul className="flex flex-1 flex-row justify-center items-center md:items-baseline gap-4 md:flex-col">
                    <li
                        className="flex flex-col-reverse items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Home")}
                    >
                        {pageType === "Home" && (
                            <span className="h-1 w-6 rounded-3xl bg-blue-500 md:h-6 md:w-1"></span>
                        )}
                        <div className="flex flex-col items-center gap-2 md:flex-row">
                            <span className="material-symbols-rounded text-black dark:text-white">
                                home
                            </span>
                            <p className="text-xs text-black md:text-lg dark:text-white">
                                Home
                            </p>
                        </div>
                    </li>
                    <li
                        className="flex flex-col-reverse items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Currently")}
                    >
                        {pageType === "Currently" && (
                            <span className="h-1 w-6 rounded-3xl bg-blue-500 md:h-6 md:w-1"></span>
                        )}
                        <div className="flex flex-col items-center gap-2 md:flex-row">
                            <span className="material-symbols-rounded text-black dark:text-white">
                                schedule
                            </span>
                            <p className="text-xs text-black md:text-lg dark:text-white">
                                Currently
                            </p>
                        </div>
                    </li>
                    <li
                        className="flex flex-col-reverse items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Hourly")}
                    >
                        {pageType === "Hourly" && (
                            <span className="h-1 w-6 rounded-3xl bg-blue-500 md:h-6 md:w-1"></span>
                        )}
                        <div className="flex flex-col items-center gap-2 md:flex-row">
                            <span className="material-symbols-rounded text-black dark:text-white">
                                calendar_clock
                            </span>
                            <p className="text-xs text-black md:text-lg dark:text-white">
                                Hourly
                            </p>
                        </div>
                    </li>
                    <li
                        className="flex flex-col-reverse items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Daily")}
                    >
                        {pageType === "Daily" && (
                            <span className="h-1 w-6 rounded-3xl bg-blue-500 md:h-6 md:w-1"></span>
                        )}
                        <div className="flex flex-col items-center gap-2 md:flex-row">
                            <span className="material-symbols-rounded text-black dark:text-white">
                                calendar_view_week
                            </span>
                            <p className="text-xs text-black md:text-lg dark:text-white">
                                Daily
                            </p>
                        </div>
                    </li>
                    <li
                        className="flex flex-col-reverse items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Radar")}
                    >
                        {pageType === "Radar" && (
                            <span className="h-1 w-6 rounded-3xl bg-blue-500 md:h-6 md:w-1"></span>
                        )}
                        <div className="flex flex-col items-center gap-2 md:flex-row">
                            <span className="material-symbols-rounded text-black dark:text-white">
                                radar
                            </span>
                            <p className="text-xs text-black md:text-lg dark:text-white">
                                Radar
                            </p>
                        </div>
                    </li>
                    <li
                        className="flex flex-col-reverse items-center gap-2 md:mt-auto md:flex-row"
                        onClick={() => handlePageChange("Settings")}
                    >
                        {pageType === "Settings" && (
                            <span className="h-1 w-6 rounded-3xl bg-blue-500 md:h-6 md:w-1"></span>
                        )}
                        <div className="flex flex-col items-center gap-2 md:flex-row">
                            <span className="material-symbols-rounded text-black dark:text-white">
                                settings
                            </span>
                            <p className="text-xs text-black md:text-lg dark:text-white">
                                Settings
                            </p>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}
