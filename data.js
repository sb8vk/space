/* SAAHITHI SPACE - CORTEX DATABASE */

const SYSTEM_DATA = {
    // NEW: Dynamic Descriptions for each Tab
    config: {
        frontburner: "what's capturing my attention.",
        backburner: "simmering prototypes.",
        portfolio: "experiments, case studies, and lessons learned.",
        thoughts: "notes and musings to remember."
    },
    
    // CONTENT ARRAYS
    frontburner: [
        { 
            id: 'f1',
            date: 'Jan 2026', 
            title: 'MLSecOps for AI Supply Chains', 
            excerpt: 'How do you verify that your ML model hasn\'t been poisoned? Learning about artifact signing, SLSA frameworks, and what Chainguard is building.', 
            body: 'What I\'m mapping:\n• SLSA for ML (Google\'s framework) - trying to apply software build security to model training pipelines\n• Sigstore for models - cryptographic signing, but adoption is <5% because most ML teams don\'t think like security teams\n• Chainguard\'s approach - immutable container images for models, but this only solves deployment, not training\n\nWhat I\'m learning: Software supply chain security works because we have clear build artifacts and reproducible builds. ML breaks this since the training is non-deterministic, data is often proprietary, and "the artifact" keeps changing (fine-tuning, quantization, distillation).',
            tags: ['security', 'ML', 'supply-chain', 'enterprise-AI'],
            image: '' 
        },
        { 
            id: 'f2',
            date: 'Jan 2026', 
            title: 'Attention Budgeting > Time Budgeting', 
            excerpt: 'Building a task manager that tracks cognitive load instead of hours. Early prototype suggests I\'m terrible at estimating my own mental bandwidth.', 
            body: 'The hypothesis: Time management is a solved problem (calendars work). Attention management is not (to-do lists fail).\n\nWhat I built: A daily planner that forces me to assign each task a \"cognitive weight\" (1-5) and caps my daily total at 20 points. 5-point tasks = deep work requiring flow state. 1-point tasks = admin busywork.\n\nAfter 30 days, I learned:\n• I consistently overestimate my attention budget by ~40%.\n• Context switching costs ~2 attention points, not ~0.5 like I assumed\n\nThe hard part: Knowing a task\'s cognitive weight requires having done it before, and it\'s difficult to accurately estimate future weights.I\'m experimenting with AI-assisted weight estimation based on task description, but it hallucinates confidently.\n\nWhy I paused: This works as a prototype, but not ready to scale. Need to rethink the model for interrupt-driven work.',
            tags: ['productivity', 'prototype', 'personal-tools'],
            image: '' 
        }
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
    thoughts: [
        { 
            id: 'q1',
            date: 'Jan 2026', 
            title: 'Personal OS', 
            excerpt: 'Can you rewrite your kernel level OS?',
	    body: 'Maybe, but need extreme self-awareness \+ pain \+ forcing function to rewire old perceptions.',
            tags: ['philosophy'],
            image: '' 
        },
	{ 
            id: 'q2',
            date: 'Jan 2026', 
            title: 'Misalignment', 
            excerpt: 'Will you trust the inner alignment detector over external validation?', 
            body: 'When forced to choose by company demands or by mission, I\'ll trust my detector.',
            tags: ['philosophy'],
            image: '' 
        },
	{ 
            id: 'q3',
            date: 'Jan 2026', 
            title: 'Vulnerability', 
            excerpt: 'Can you choose vulnerability over safety?', 
            body: 'It\'s easy to default to safety. Partnerships, leadership, and sustained vision require vulnerability and authentic connection to purpose.',
            tags: ['philosophy'],
            image: '' 
        }

    ]
};