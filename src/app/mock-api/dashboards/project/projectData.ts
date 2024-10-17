/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const project = {
    githubIssues: {
        overview: {
            'this-week': {
                'new-issues': 214,
                'closed-issues': 75,
                fixed: 3,
                'wont-fix': 4,
                're-opened': 8,
                'needs-triage': 6,
            },
            'last-week': {
                'new-issues': 197,
                'closed-issues': 72,
                fixed: 6,
                'wont-fix': 11,
                're-opened': 6,
                'needs-triage': 5,
            },
        },
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: {
            'this-week': [
                {
                    name: 'New issues',
                    type: 'line',
                    data: [42, 28, 43, 34, 20, 25, 22],
                },
                {
                    name: 'Closed issues',
                    type: 'column',
                    data: [11, 10, 8, 11, 8, 10, 17],
                },
            ],
            'last-week': [
                {
                    name: 'New issues',
                    type: 'line',
                    data: [37, 32, 39, 27, 18, 24, 20],
                },
                {
                    name: 'Closed issues',
                    type: 'column',
                    data: [9, 8, 10, 12, 7, 11, 15],
                },
            ],
        },
    },
    taskDistribution: {
        // overview: {
        //     'this-week': {
        //         new: 594,
        //         completed: 287,
        //     },
        //     'last-week': {
        //         new: 526,
        //         completed: 260,
        //     },
        // },
        labels: ['Status 1', 'Status 2', 'Status 3'],
        series: {
            'this-week': [11, 2, 8],
            'last-week': [12, 6, 14],
        },
    },
    schedule: {
        today: [
            {
                title: 'Group Meeting',
                time: '10:30',
                location: 'Meeting room 1',
            },
            {
                title: 'Public Beta Release',
                time: '14:00',
            },
        ],
        tomorrow: [
            {
                title: 'Marketing Meeting',
                time: '09:30',
                location: 'Meeting room 1',
            },
            {
                title: 'Public Announcement',
                time: '11:00',
            },
            {
                title: 'Meeting with Managers',
                time: '15:00',
                location: 'Meeting room 2',
            },
        ],
    },
    budgetDistribution: {
        categories: ['Concept', 'Design', 'Development', 'Extras', 'Marketing'],
        series: [
            {
                name: 'Budget',
                data: [12, 20, 28, 15, 25],
            },
        ],
    },
    weeklyExpenses: {
        amount: 17663,
        labels: [
            now.minus({ days: 47 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 40 }).toFormat('dd MMM'),
            now.minus({ days: 39 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 32 }).toFormat('dd MMM'),
            now.minus({ days: 31 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 24 }).toFormat('dd MMM'),
            now.minus({ days: 23 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 16 }).toFormat('dd MMM'),
            now.minus({ days: 15 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 8 }).toFormat('dd MMM'),
            now.minus({ days: 7 }).toFormat('dd MMM') +
                ' - ' +
                now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Expenses',
                data: [4412, 4345, 4541, 4677, 4322, 4123],
            },
        ],
    },
    monthlyExpenses: {
        amount: 54663,
        labels: [
            now.minus({ days: 31 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 24 }).toFormat('dd MMM'),
            now.minus({ days: 23 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 16 }).toFormat('dd MMM'),
            now.minus({ days: 15 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 8 }).toFormat('dd MMM'),
            now.minus({ days: 7 }).toFormat('dd MMM') +
                ' - ' +
                now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Expenses',
                data: [15521, 15519, 15522, 15521],
            },
        ],
    },
    yearlyExpenses: {
        amount: 648813,
        labels: [
            now.minus({ days: 79 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 72 }).toFormat('dd MMM'),
            now.minus({ days: 71 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 64 }).toFormat('dd MMM'),
            now.minus({ days: 63 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 56 }).toFormat('dd MMM'),
            now.minus({ days: 55 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 48 }).toFormat('dd MMM'),
            now.minus({ days: 47 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 40 }).toFormat('dd MMM'),
            now.minus({ days: 39 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 32 }).toFormat('dd MMM'),
            now.minus({ days: 31 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 24 }).toFormat('dd MMM'),
            now.minus({ days: 23 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 16 }).toFormat('dd MMM'),
            now.minus({ days: 15 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 8 }).toFormat('dd MMM'),
            now.minus({ days: 7 }).toFormat('dd MMM') +
                ' - ' +
                now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Expenses',
                data: [
                    45891, 45801, 45834, 45843, 45800, 45900, 45814, 45856,
                    45910, 45849,
                ],
            },
        ],
    },
    budgetDetails: {
        columns: [
            'type',
            'total',
            'expensesAmount',
            'expensesPercentage',
            'remainingAmount',
            'remainingPercentage',
        ],
        rows: [
            {
                id: 1,
                type: 'Concept',
                total: 14880,
                expensesAmount: 14000,
                expensesPercentage: 94.08,
                remainingAmount: 880,
                remainingPercentage: 5.92,
            },
            {
                id: 2,
                type: 'Design',
                total: 21080,
                expensesAmount: 17240.34,
                expensesPercentage: 81.78,
                remainingAmount: 3839.66,
                remainingPercentage: 18.22,
            },
            {
                id: 3,
                type: 'Development',
                total: 34720,
                expensesAmount: 3518,
                expensesPercentage: 10.13,
                remainingAmount: 31202,
                remainingPercentage: 89.87,
            },
            {
                id: 4,
                type: 'Extras',
                total: 18600,
                expensesAmount: 0,
                expensesPercentage: 0,
                remainingAmount: 18600,
                remainingPercentage: 100,
            },
            {
                id: 5,
                type: 'Marketing',
                total: 34720,
                expensesAmount: 19859.84,
                expensesPercentage: 57.2,
                remainingAmount: 14860.16,
                remainingPercentage: 42.8,
            },
        ],
    },
    teamMembers: [
        {
            id: 2,
            name: null,
            email: 'khalil@gmail.com',
            accessToken: null,
            roles: null,
            role: null,
            createdAt: '2024-09-25T14:58:10.789Z',
            updatedAt: '2024-09-25T14:58:10.789Z',
        },
        {
            id: 3,
            name: 'amal',
            email: 'amal@gmail.com',
            accessToken: null,
            roles: null,
            role: null,
            createdAt: '2024-09-25T15:14:31.358Z',
            updatedAt: '2024-09-25T15:14:31.358Z',
        },
        {
            id: 5,
            name: 'mouadh',
            email: 'mouadh@gmail.com',
            accessToken: null,
            roles: null,
            role: null,
            createdAt: '2024-09-26T02:00:25.348Z',
            updatedAt: '2024-10-04T14:11:42.246Z',
        },
        {
            id: 7,
            name: 'amal',
            email: 'amal@gmail.com',
            accessToken: null,
            roles: null,
            role: null,
            createdAt: '2024-10-04T16:04:16.924Z',
            updatedAt: '2024-10-04T16:04:16.924Z',
        },
        {
            id: 8,
            name: 'troudi',
            email: 'troudi@gmail.com',
            accessToken: null,
            roles: ['admin'],
            role: null,
            createdAt: '2024-10-04T16:05:59.353Z',
            updatedAt: '2024-10-04T16:05:59.353Z',
        },
        {
            id: 9,
            name: 'Test User',
            email: 'test@example.com',
            accessToken: null,
            roles: ['user', 'admin'],
            role: null,
            createdAt: '2024-10-04T17:59:24.774Z',
            updatedAt: '2024-10-04T17:59:24.774Z',
        },
        {
            id: 10,
            name: 'Test User',
            email: 'test@example.com',
            accessToken: null,
            roles: ['user', 'admin'],
            role: null,
            createdAt: '2024-10-04T18:00:20.923Z',
            updatedAt: '2024-10-04T18:00:20.923Z',
        },
        {
            id: 11,
            name: 'Test User',
            email: 'test@example.com',
            accessToken: null,
            roles: ['user', 'admin'],
            role: null,
            createdAt: '2024-10-04T18:22:27.021Z',
            updatedAt: '2024-10-04T18:22:27.021Z',
        },
        {
            id: 12,
            name: 'monji',
            email: 'mouadh@gmail.com',
            accessToken: null,
            roles: null,
            role: null,
            createdAt: '2024-10-10T15:46:56.447Z',
            updatedAt: '2024-10-10T15:46:56.447Z',
        },
        {
            id: 4,
            name: 'admin',
            email: 'admin@gmail.com',
            accessToken: null,
            roles: null,
            role: 'admin',
            createdAt: '2024-09-25T15:30:06.142Z',
            updatedAt: '2024-09-25T15:30:06.142Z',
        },
    ],
    pdv: [
        {
            id: 7,
            id_pdv: 'azertyuiop',
            id_commercial: 'testets',
            pos: 'pos pos',
            code_comptable: '123456789',
            ville: 'nabeul',
            dt: '2023-04-12',
            id_categorie: 'hdsiufhzof',
            region: 'nabeul',
            etat: 'active',
        },
    ],
    leads: [
        {
            id: 2,
            id_lead: '3240d042-da5b-4698-ac23-46567d19800e',
            status: 0,
            raison: 'En attente de doc',
            dt_rdv: '2023-05-02',
            id_user: '4be25b4e-d0be-4732-bc21-5febdb8e7784',
            id_report: '2ee828db-19e2-41ee-8be3-14ac0718883e',
        },
        {
            id: 3,
            id_lead: '6a74c592-52c8-414f-8634-be560b4026e1',
            status: 0,
            raison: 'Ne répond pas',
            dt_rdv: '2023-05-02',
            id_user: '7e6355ed-dfc7-45e2-a133-86d8dc57c78c',
            id_report: '2ee828db-19e2-41ee-8be3-14ac0718883e',
        },
        {
            id: 4,
            id_lead: '6fed3aa1-a910-4b15-8f8b-d99a86137b3a',
            status: 0,
            raison: 'A recontacter',
            dt_rdv: '2023-05-17',
            id_user: '7e6355ed-dfc7-45e2-a133-86d8dc57c78c',
            id_report: '2ee828db-19e2-41ee-8be3-14ac0718883e',
        },
    ],
    categories: [
        {
            id: 1,
            id_categorie: 'aa232a06-2b1e-48c9-b830-62f46d4e45a3',
            label: 'BRONZE',
        },
        {
            id: 2,
            id_categorie: 'ba232a06-2b1e-48c9-b830-62f46d4e45a3',
            label: 'SILVER',
        },
        {
            id: 3,
            id_categorie: 'ca232a06-2b1e-48c9-b830-62f46d4e45a3',
            label: 'GOLD',
        },
        {
            id: 4,
            id_categorie: 'e1f0970a-8dac-4df3-90b2-f1535ba148c7',
            label: 'GROS',
        },
    ],
    organization: [
        {
            id: 1,
            id_organisation: 'a02beb68-6f4a-48f6-b954-c0bab38ea0be',
            libelle: 'STEG',
        },
        {
            id: 2,
            id_organisation: '5af79bfc-d3e1-4af1-a247-e723d5d2378d',
            libelle: 'AUTOROUTE',
        },
        {
            id: 3,
            id_organisation: '97665123-3ace-40f1-826b-29f7189bc19f',
            libelle: 'RADAR',
        },
        {
            id: 4,
            id_organisation: 'a5da3e1a-3c87-4740-8241-5bc0d1f4ceca',
            libelle: 'CNSS',
        },
        {
            id: 5,
            id_organisation: '911b2289-662b-4c4e-a387-e36ea48df7c9',
            libelle: 'TELECOM',
        },
        {
            id: 6,
            id_organisation: 'cad9433d-83ca-4496-a336-20e3c43e141c',
            libelle: 'SONEDE',
        },
        {
            id: 7,
            id_organisation: '597ac5ba-e742-4beb-9036-bc6b2ac7b04b',
            libelle: 'TOPNET',
        },
    ],
};
