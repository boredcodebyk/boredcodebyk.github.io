// place files you want to import through the `$lib` alias in this folder.

interface Proj {
    name: string,
    description: string,
    year: YearRange,
    link: string,
}

interface YearRange {
    from: number
    to: number
}

const projects : Proj[] = []

export { projects};