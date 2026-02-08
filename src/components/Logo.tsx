export default function Logo() {
    return (
        <>
            <div className="flex flex-row items-center gap-4">
                <span className="material-symbols-rounded">cloud</span>
                <h1 className="hidden text-3xl text-black md:block dark:text-white">
                    OpenSky
                </h1>
            </div>
        </>
    );
}
