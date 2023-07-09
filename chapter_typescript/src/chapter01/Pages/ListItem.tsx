import { useEffect, useState } from "react";

interface CountryCodes {
    // 인덱스 시그니처
    [key: string]: string;
}

export default function ListItem() {
    const [countryData, setCountryData] = useState<CountryCodes[]>([]);

    useEffect(() => {
        setCountryData([
            ...countryData,
            {
                id: "test@test.com", // variable
                pw: "test.com", // variable
                Korea: "kr", // constant
            },
        ]);
    }, []);

    return (
        <select>
            {countryData &&
                countryData.map((it) => {
                    return <option>{it.Korea}</option>;
                })}
        </select>
    );
}
