export interface SWContextValue {
    page: string,
    changePage: (page: string) => void
}

export type Luke = {
    name: string,
    gender: string,
    birth_year: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    [key: string]: string | number;
}