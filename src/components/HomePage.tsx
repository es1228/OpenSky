import SavedLocation from "./SavedLocation";
import Button from "./Button";
import { SavedLocationType, WeatherDataResponseParameters, WeatherPageProps } from "../App";
import { iso1A2Code } from "country-coder";

type HomePageProps = {
    savedLocations: SavedLocationType[] | null;
    handleDelete: (id: string) => void;
    handleAdd: () => void;
    weatherData: WeatherDataResponseParameters | null;
};

export default function HomePage({ savedLocations, handleDelete, handleAdd, weatherData }: HomePageProps) {
    const items = savedLocations?.map((location) => (
        <SavedLocation
            name={location.name}
            summary={location.summary}
            temperature={location.temperature}
            icon={location.icon}
            key={location.id}
            onDelete={() => handleDelete(location.id)}
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
                    <Button handleClick={handleAdd} icon="add" text={`Add ${weatherData.flags.nearestCity}, ${iso1A2Code([weatherData.longitude, weatherData.latitude])}`} />
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
