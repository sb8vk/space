/* SAAHITHI SPACE - CORTEX DATABASE */

const SYSTEM_DATA = {
    // NEW: Dynamic Descriptions for each Tab
    config: {
        frontburner: "what's capturing my attention.",
        backburner: "simmering prototypes.",
        portfolio: "experiments, case studies, and lessons learned.",
        questions: "notes and musings to remember."
    },
    
    // CONTENT ARRAYS
    frontburner: [
        { 
            id: 'f1',
            date: 'Jan 2026', 
            title: 'MLSecOps for AI Supply Chains', 
            excerpt: 'How do you verify that your ML model hasn\'t been poisoned? Learning about artifact signing, SLSA frameworks, and what Chainguard is building.', 
            body: 'Working',
            tags: ['security', 'ML', 'supply-chain'],
            image: '' 
        },
            ],
    backburner: [
        { 
            id: 'b1',
            date: 'Nov 2025', 
            title: '"Flow" OS', 
            excerpt: 'Designing a personal dashboard that prioritizes Flow states over To-do lists.', 
            body: 'I am prototyping a "Flow OS" that groups tasks by cognitive load rather than urgency.',
            tags: ['productivity', 'prototype'],
            image: '' 
        }
    ],
    portfolio: [
        { 
            id: 'c1',
            date: 'Nov 2025', 
            title: 'Semantic Open Source Software', 
            excerpt: '', 
            body: '',
            tags: ['product', 'workshop', 'portfolio'],
            image: '' 
        }
    ],
    questions: [
        { 
            id: 'q1',
            date: 'Jan 2026', 
            title: 'Icebreaker Questions', 
            excerpt: 'How do we track the evolution of intuition and leadership maturity?', 
            body: '• This or that: Travel the world for free but never stay anywhere longer than two days, or live in one dream location forever?\n•This or that: Always be 5% too hot or 5% too cold?\n•Would you rather travel to space for a week or explore the deepest parts of the ocean?\n•This or that: Be able to talk to animals or speak every human language fluently?\n•Would you rather live in a world where it’s always summer or always winter? \n•This or that: Only eat sweet foods forever or only eat savory foods forever?\n•Would you rather always have free tickets to concerts or to sporting events?\n•This or that: Be a master of every board game or a master of every video game?\n•Would you rather have the ability to time travel or teleport instantly anywhere?',
            tags: ['icebreakers', 'question of the day'],
            image: '' 
        },
{ 
            id: 'q2',
            date: 'Jan 2026', 
            title: 'Mantras', 
            excerpt: 'How do we track the evolution of intuition and leadership maturity?', 
            body: '',
            tags: ['philosophy'],
            image: '' 
        }

    ]
};