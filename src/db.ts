export type CategoryType = 'Наушники' | 'Беспроводные наушники'

export interface ItemType {
    id: number;
    category: CategoryType;
    img: string;
    title: string;
    price: number;
    rate: number;
}

export const items: ItemType[] = [
    {
        id: 1,
        category: 'Наушники',
        img: 'assets/images/earpods1.png',
        title: 'Apple BYZ S852I',
        price: 2927,
        rate: 4.7
    },
    {
        id: 2,
        img: 'assets/images/earpods2.png',
        category: "Наушники",
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5
    },
    {
        id: 3,
        category: "Наушники",
        img: 'assets/images/earpods3.png',
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5
    },
    {
        id: 4,
        category: "Наушники",
        img: 'assets/images/earpods1.png',
        title: 'Apple BYZ S852I',
        price: 2927,
        rate: 4.7
    },
    {
        id: 5,
        category: "Наушники",
        img: 'assets/images/earpods2.png',
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5
    },
    {
        id: 6,
        category: "Наушники",
        img: 'assets/images/earpods3.png',
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5
    },
    {
        id: 7,
        category: 'Беспроводные наушники',
        img: 'assets/images/earpods4.png',
        title: 'Apple EarPods',
        price: 9527,
        rate: 4.7
    },
    {
        id: 8,
        category: 'Беспроводные наушники',
        img: 'assets/images/earpods5.png',
        title: 'GERLAX GH-04',
        price: 6527,
        rate: 4.7
    },
    {
        id: 9,
        category: 'Беспроводные наушники',
        img: 'assets/images/earpods6.png',
        title: 'BOROFONE BO4',
        price: 7527,
        rate: 4.7
    },
]
