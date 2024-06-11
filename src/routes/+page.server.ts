import type { Conference } from "$lib/models/Conference"
import fs from "fs"

export function load() {
    const years = fs.readdirSync('./src/lib/data/')
        .filter(file => file.endsWith(".json"))
        .map(file => parseInt(file))
        .filter(year => !Number.isNaN(year))
        .reverse()

    const fileContent = fs.readFileSync(`./src/lib/data/${years[0]}.json`, "utf-8")
    const conference: Conference = JSON.parse(fileContent)

    return {
        years,
        conference
    }

}