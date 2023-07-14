interface Tecnology {
    id: number;
    name: string;
    objective?: string;
}


interface TecnologyGroup {
    title: string;
    tecnologies: Tecnology[];
}


export const TECNOLOGIES: TecnologyGroup[] = [
    {
        title: "Stack Tech",
        tecnologies: [
            { id: 1, name: 'NextJS' },
            { id: 4, name: 'Typescript' },
            { id: 2, name: 'Postgres' },
            { id: 3, name: 'Prisma' },
            { id: 5, name: 'Docker' },
        ]
    },
    {
        title: "Libraries",
        tecnologies: [
            {
                id: 1,
                name: 'React Query',
                objective: 'Improve the use experience using cache and request management',
            },
            {
                id: 2,
                name: 'React Hook Form',
                objective: 'Better form management',
            },
        ]
    },
    {
        title: "UI / UX Tools",
        tecnologies: [
            { id: 1, name: 'Sonner' },
        ]
    }
]