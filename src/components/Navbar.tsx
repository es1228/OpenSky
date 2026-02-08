export default function Navbar() {
    return (
        <>
            <nav className="fixed right-0 bottom-0 left-0 m-4 mx-auto flex w-[90vw] flex-1 flex-col rounded-3xl bg-neutral-50/30 p-4 backdrop-blur md:top-16 md:m-4 md:w-48 dark:bg-neutral-950/30">
                <ul className="flex flex-1 flex-row justify-center gap-4 md:flex-col">
                    <li className="flex flex-col md:flex-row gap-2 items-center">
                        <span className="material-symbols-rounded">home</span>
                        <p className="text-xs md:text-lg">Home</p>
                    </li>
                    <li className="flex flex-col md:flex-row gap-2 items-center">
                        <span className="material-symbols-rounded">schedule</span>
                        <p className="text-xs md:text-lg">Currently</p>
                    </li>
                    <li className="flex flex-col md:flex-row gap-2 items-center">
                        <span className="material-symbols-rounded">calendar_clock</span>
                        <p className="text-xs md:text-lg">Hourly</p>
                    </li>
                    <li className="flex flex-col md:flex-row gap-2 items-center">
                        <span className="material-symbols-rounded">calendar_view_week</span>
                        <p className="text-xs md:text-lg">Daily</p>
                    </li>
                    <li className="flex flex-col md:flex-row gap-2 items-center">
                        <span className="material-symbols-rounded">radar</span>
                        <p className="text-xs md:text-lg">Radar</p>
                    </li>
                    <li className="flex flex-col md:flex-row gap-2 items-center md:mt-auto">
                        <span className="material-symbols-rounded">settings</span>
                        <p className="text-xs md:text-lg">Settings</p>
                    </li>
                </ul>
            </nav>
        </>
    );
}
