export function loadLists() {
    return [
        {
            title: 'To Do',
            id: '1',
            creatable: true,
            cards: [
                {
                    id: '1',
                    content: 'Documentar padrões mobile',
                    labels: ['#5CC4FF'],
                },
                {
                    id: '2',
                    content: 'Ajustes fluxo de compra',
                    labels: ['#5CC4FF'],
                },
                {
                    id: '3',
                    content: 'Banners da home',
                    labels: ['#5CC4FF'],
                },
                {
                    id: '4',
                    content: 'Template de e-mail marketing"',
                    labels: ['#5CC4FF'],
                },

            ]
        },
        {
            title: 'In Progress',
            id: '2',
            creatable: true,
            cards: [
                {
                    id: '5',
                    content: 'Wireframe das telas',
                    labels: ['#945AD1'],
                }
            ]
        },
        {
            title: 'Done',
            id: '3',
            creatable: false,
            done: true,
            cards: [
                {
                    id: '6',
                    content: 'Implementação do blog',
                    labels: ['#59D090'],
                },
                {
                    id: '7',
                    content: 'Análise de métricas',
                    labels: ['#59D090'],
                },
                {
                    id: '8',
                    content: 'UX Review',
                    labels: ['#59D090'],
                }
            ]
        },

    ];
}