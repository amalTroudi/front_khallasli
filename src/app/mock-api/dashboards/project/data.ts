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
            id: '2bfa2be5-7688-48d5-b5ac-dc0d9ac97f14',
            // avatar: '',
            name: 'Amal Troudi',
            email: 'amaltroudi561@gmail.com',
            // phone: '',
            // title: '',
        }
    ],
};
