export interface ISheet {
    bars: IStaff[]
}

export interface IStaff {
    bpm: number
    beat: number
    treble: IBar
    bass: IBar
}

export interface IBar {
    notes: INote[]
}

export interface INote {
    type: string
    accidental: boolean
}

export interface IBeat {
    
}