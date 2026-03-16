import arbol from "../data/arbol.json"
import type { AutonomousCommunity } from "../types/location"

export default function ProvinceTownSelector () {

    const data = arbol as AutonomousCommunity[]
    const provinces = data.flatMap((community) => community.provinces)
    // console.log(data)
    console.log(provinces)

    return (
        <section>
            <label htmlFor="province">Provincia</label>
            <select id="province">
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