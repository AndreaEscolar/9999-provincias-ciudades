export interface Town {
    parent_code: string
    code: string
    label: string
}

export interface Province {
    parent_code: string
    code: string
    label: string
    towns: Town[]
}

export interface AutonomousCommunity {
    parent_code: string
    code: string
    label: string
    provinces: Province[]
}

export interface SubmittedResult {
    province: string
    town: string
}