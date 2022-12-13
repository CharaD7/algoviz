const algorithms = [
    {
        id: 1,
        name: 'Binary Search',
        categories: ['Search', 'Divide and Conqer'],
        description:
            'Binary search is used to search a sorted dataset. Idea is to repeatedly divide in half the portion of the list that could contain the item, until we narrow it down to one possible item.',
        timeComplexity: 'O(log2N)',
        links: [
            {
                label: 'Test',
                url: 'test url',
            },
        ],
    },
    {
        id: 2,
        name: 'Breadth First Search (BFS)',
        categories: ['Search'],
        description:
            'Breadth–first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a "search key") and explores the neighbor nodes first before moving to the next-level neighbors.',
        timeComplexity: 'O(N)',
        links: [
            {
                label: 'Test',
                url: 'test url',
            },
        ],
    },
    {
        id: 3,
        name: 'Depth–first search (DFS)',
        categories: ['Search'],
        description:
            'Depth–first search (DFS) is an algorithm for traversing or searching tree or graph data structures. One starts at the root (selecting some arbitrary node as the root for a graph) and explore as far as possible along each branch before backtracking.',
        timeComplexity: 'O(N)',
        links: [
            {
                label: 'Test',
                url: 'test url',
            },
        ],
    },
    {
        id: 4,
        name: 'Dynamic Programming',
        categories: [],
        description:
            'Dynamic programming (DP) is a method for solving a complex problem by breaking it down into simpler subproblems. We solve the subproblems, remember their results and using them we make our way to solve the complex problem, quickly.',
        timeComplexity: null,
        links: [
            {
                label: 'Test',
                url: 'test url',
            },
        ],
    },
];

export default algorithms;
