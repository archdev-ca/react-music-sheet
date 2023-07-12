export interface ISheet {
    bars: IStaff[]
}

export interface IStaff {
    treble: IBar
    bass: IBar
}

export interface IBar {
    notes: INote[]
    bpm: number
    beat: number
}

export interface INote {
    type: string
    accidental: boolean
}

export interface IBeat {
    
}