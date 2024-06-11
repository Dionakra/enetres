export type Conference = {
    year: number
    link: string
    games: Game[]
}

export type Game = {
    name: string
    image: string
    platforms: PlatformInfo[]
    genres: string[]
    developer: string
    publisher: string
    trailer: string
    releaseDate: {
        year: number
        month?: number
        day?: number
    }
}

export type PlatformInfo = {
    platform: string
    link: string
}

export enum Platform {
    STEAM,
    EPIC_GAMES_STORE,
    SWITCH,
    XBOX_SERIES,
    PS5,
    MOBILE
}