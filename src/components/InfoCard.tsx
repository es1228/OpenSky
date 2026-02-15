type InfoCardProps = {
    title: string;
    icon: string;
    summary: string;
    other: string;
};

export default function InfoCard(props: InfoCardProps) {
    return (
        <>
            <div className="flex w-74 flex-col gap-2 rounded-3xl bg-neutral-400/20 p-4 backdrop-blur dark:bg-neutral-800/40">
                <h1 className="text-lg font-bold">{props.title}</h1>
                <div className="flex flex-row items-center gap-2">
                    <span className="material-symbols-rounded">
                        {props.icon}
                    </span>
                    <h1 className="text-3xl">{props.summary}</h1>
                </div>
                <p>{props.other}</p>
            </div>
        </>
    );
}
