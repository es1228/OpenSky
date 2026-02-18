import { ChangeEvent } from "react";

type SettingsPageProps = {
    handleUnitChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SettingsPage({ handleUnitChange }: SettingsPageProps) {
    return (
        <>
            <div className="flex flex-col gap-5 overflow-auto">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl">Theme</h1>
                    <fieldset
                        className="rounded-3xl bg-neutral-50/30 p-4 dark:bg-neutral-800/40"
                    >
                        <div>
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="radio"
                                    name="theme"
                                    id="light"
                                    value={"light"}
                                />
                                <label htmlFor="light">Light</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="radio"
                                    name="theme"
                                    id="dark"
                                    value={"dark"}
                                />
                                <label htmlFor="dark">Dark</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="radio"
                                    name="theme"
                                    id="system"
                                    value={"system"}
                                    defaultChecked={true}
                                />
                                <label htmlFor="system">System</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl">Units</h1>
                    <fieldset className="rounded-3xl bg-neutral-50/30 p-4 dark:bg-neutral-800/40">
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="radio"
                                name="units"
                                id="ca"
                                value={"ca"}
                                onChange={handleUnitChange}
                            />
                            <label htmlFor="ca">CA (SI + km/h)</label>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="radio"
                                name="units"
                                id="ul"
                                value={"uk"}
                                onChange={handleUnitChange}
                            />
                            <label htmlFor="uk">UK (SI + mph)</label>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="radio"
                                name="units"
                                id="us"
                                value={"us"}
                                onChange={handleUnitChange}
                            />
                            <label htmlFor="us">US (Imperial)</label>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="radio"
                                name="units"
                                id="si"
                                value={"si"}
                                onChange={handleUnitChange}
                            />
                            <label htmlFor="si">SI</label>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="radio"
                                name="units"
                                id="auto"
                                value={"auto"}
                                defaultChecked={true}
                            />
                            <label htmlFor="auto">Auto</label>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    );
}