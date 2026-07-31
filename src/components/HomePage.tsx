import SavedLocation from "./SavedLocation";
import Button from "./Button";
import { iso1A2Code } from "country-coder";
import { SavedLocationType, WeatherDataResponseParameters } from "../types/types";

type HomePageProps = {
    savedLocations: SavedLocationType[] | null;
    handleDelete: (id: string) => void;
    handleAdd: () => void;
    handleClick: (lat: number, lon: number) => void;
    weatherData: WeatherDataResponseParameters | null;
    unitType: string;
};

export default function HomePage({
    savedLocations,
    handleDelete,
    handleAdd,
    handleClick,
    weatherData,
    unitType,
}: HomePageProps) {
    const items = savedLocations?.map((location) => (
        <SavedLocation
            name={location.name}
            lat={location.lat}
            lon={location.lon}
            key={location.id}
            unitType={unitType}
            onDelete={() => handleDelete(location.id)}
            onClick={() => handleClick(location.lat, location.lon)}
        />
    ));
    if (!weatherData) return;
    return (
        <>
            <div className="flex flex-col gap-5 overflow-auto">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-3xl text-black dark:text-white">
                        Saved Locations
                    </h1>
                    <Button
                        handleClick={handleAdd}
                        icon="add"
                        text={`Add ${weatherData.flags.nearestCity}, ${iso1A2Code([weatherData.longitude, weatherData.latitude])}`}
                    />
                </div>
            </div>
            {items && items.length > 0 ? (
                items
            ) : (
                <p className="text-black dark:text-white">No Saved Locations</p>
            )}
        </>
    );
}
