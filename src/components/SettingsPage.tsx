import { ChangeEvent } from "react";

type SettingsPageProps = {
    handleUnitChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleThemeChange: (e: ChangeEvent<HTMLInputElement>) => void;
    unitType: string;
    theme: string;
};

export default function SettingsPage({
    handleUnitChange,
    handleThemeChange,
    unitType,
    theme,
}: SettingsPageProps) {
    return (
        <>
            <div className="flex flex-col gap-5 overflow-auto">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl text-black dark:text-white">
                        Theme
                    </h1>
                    <fieldset className="rounded-3xl bg-neutral-400/20 p-4 dark:bg-neutral-800/40">
                        <div className="text-black dark:text-white">
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="radio"
                                    name="theme"
                                    id="light"
                                    value={"light"}
                                    onChange={handleThemeChange}
                                    checked={theme === "light"}
                                />
                                <label htmlFor="light">Light</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="radio"
                                    name="theme"
                                    id="dark"
                                    value={"dark"}
                                    onChange={handleThemeChange}
                                    checked={theme === "dark"}
                                />
                                <label htmlFor="dark">Dark</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="radio"
                                    name="theme"
                                    id="system"
                                    value={"system"}
                                    onChange={handleThemeChange}
                                    checked={theme === "system"}
                                />
                                <label htmlFor="system">System</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl text-black dark:text-white">
                        Units
                    </h1>
                    <fieldset className="rounded-3xl bg-neutral-400/20 p-4 dark:bg-neutral-800/40">
                        <div className="text-black dark:text-white">
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="radio"
                                    name="units"
                                    id="ca"
                                    value={"ca"}
                                    onChange={handleUnitChange}
                                    checked={unitType === "ca"}
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
                                    checked={unitType === "uk"}
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
                                    checked={unitType === "us"}
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
                                    checked={unitType === "si"}
                                />
                                <label htmlFor="si">SI</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="radio"
                                    name="units"
                                    id="auto"
                                    value={"auto"}
                                    onChange={handleUnitChange}
                                    checked={unitType === "auto"}
                                />
                                <label htmlFor="auto">Auto</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    );
}
