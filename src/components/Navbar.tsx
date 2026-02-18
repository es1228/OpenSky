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
                        <span className="material-symbols-rounded">home</span>
                        <p className="text-xs md:text-lg">Home</p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Currently")}
                    >
                        <span className="material-symbols-rounded">
                            schedule
                        </span>
                        <p className="text-xs md:text-lg">Currently</p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Hourly")}
                    >
                        <span className="material-symbols-rounded">
                            calendar_clock
                        </span>
                        <p className="text-xs md:text-lg">Hourly</p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Daily")}
                    >
                        <span className="material-symbols-rounded">
                            calendar_view_week
                        </span>
                        <p className="text-xs md:text-lg">Daily</p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Radar")}
                    >
                        <span className="material-symbols-rounded">radar</span>
                        <p className="text-xs md:text-lg">Radar</p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:mt-auto md:flex-row"
                        onClick={() => handlePageChange("Settings")}
                    >
                        <span className="material-symbols-rounded">
                            settings
                        </span>
                        <p className="text-xs md:text-lg">Settings</p>
                    </li>
                </ul>
            </nav>
        </>
    );
}