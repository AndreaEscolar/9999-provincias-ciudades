import { useState } from "react"
import arbol from "../data/arbol.json"
import type { AutonomousCommunity } from "../types/location"

export default function ProvinceTownSelector () {

    const [selectedProvince, setSelectedProvince] = useState<string>("")

    const data = arbol as AutonomousCommunity[]
    const provinces = data.flatMap((community) => community.provinces)
    // console.log(data)
    // console.log(provinces)

    function handleProvinceChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedProvince(event.target.value)
    }
    return (
        <section>
            <label htmlFor="province">Provincia</label>
            <select id="province" value={selectedProvince} onChange={handleProvinceChange}>
                <option value=""> Escoge una provincia</option>

                {provinces.map((province) =>
                    <option key={province.code} value={province.label}>
                        {province.label}
                    </option>
                )}
            </select>
        </section>
    )
} 