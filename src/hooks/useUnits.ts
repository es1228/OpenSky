import { useEffect, useState } from "react";

const useUnits = () => {
    const [unitType, setUnitType] = useState<string>(
        localStorage.getItem("unitType") || "auto",
    );
    const [units, setUnits] = useState<string[]>([
        "mm/h",
        "cm",
        "°C",
        "m/s",
        "hPa",
        "km",
    ]);
    const handleUnitChange = (value: string) => setUnitType(value);

    useEffect(() => {
        const onUnitChange = () => {
            if (unitType === "ca")
                setUnits(["mm/h", "cm", "°C", "km/h", "hPa", "km"]);
            else if (unitType === "si")
                setUnits(["mm/h", "cm", "°C", "m/s", "hPa", "km"]);
            else if (unitType === "uk")
                setUnits(["mm/h", "cm", "°C", "mph", "hPa", "km"]);
            else setUnits(["in/h", "in", "°F", "mph", "mbar", "mi"]);
            localStorage.setItem("unitType", unitType);
        };
        onUnitChange();
    }, [unitType]);

    return { units, setUnits, unitType, handleUnitChange };
};
export default useUnits;
