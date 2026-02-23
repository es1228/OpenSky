import Button from "./Button";

type SavedLocationProps = {
    name: string;
    summary: string;
    temperature: string;
    icon: string;
    onDelete: () => void;
};

export default function SavedLocation({
    name,
    summary,
    temperature,
    icon,
    onDelete,
}: SavedLocationProps) {
    return (
        <>
            <div className="flex w-full flex-col gap-2 rounded-3xl bg-neutral-400/20 p-4 backdrop-blur dark:bg-neutral-800/40">
                <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-row items-center gap-4">
                        <img
                            src={`\\src\\assets\\${icon}.svg`}
                            alt={`${icon}`}
                            className="h-10 w-10"
                        />
                        <h1 className="text-2xl md:text-4xl text-black dark:text-white">
                            {temperature}
                        </h1>
                        <div>
                            <h1 className="md:text-2xl text-black dark:text-white">
                                {name}
                            </h1>
                            <p className="text-black dark:text-white">
                                {summary}
                            </p>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <Button
                            handleClick={onDelete}
                            icon="delete"
                            text="Delete"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
