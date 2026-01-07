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
            excerpt: 'How do you verify that your ML model hasn\'t been compromised? Learning about artifact signing, SLSA frameworks, and what Chainguard is building for open-source security.', 
            body: 'What I\'m mapping:\n• SLSA for ML - trying to apply software build security to model training pipelines\n• Chainguard\'s approach - immutable container images for models, but this only solves deployment, not training\n\nWhat I\'m learning: Software supply chain security works because we have clear build artifacts and reproducible builds. ML breaks this since the training is non-deterministic, data is often proprietary, and "the artifact" keeps changing (fine-tuning, quantization, distillation).',
            tags: ['security', 'ML', 'supply-chain', 'enterprise-AI'],
            image: '' 
        },
{
    "id": "f2",
    "date": "Dec 2025",
    "title": "LLM-as-a-Judge: Detecting Alignment Drift",
    "excerpt": "Built an evaluation engine that catches when agents say one thing but do another. Turns integrity into a measurable 0-1 score.",
    "body": "The Problem:\nStandard evals are easily gamed. Agents (people or AI) claim one goal but optimize for another under pressure. Surveys lie. Benchmarks get saturated. I wanted to detect this gap between stated values and actual behavior.\n\nWhat I Built:\nA Python engine that stress-tests agents with resource constraints and grades their responses against logic gates.\n\nHow It Works:\n• Behavioral simulation: Present binary dilemmas (\"Sacrifice revenue or security?\")\n• Vector analysis: Map stated values to embeddings, compare to actual choices via cosine similarity\n• Constrained evaluation: Use a \"judge\" agent to verify answers against physical/economic constraints (\"Can't spend money you don't have\")\n\nThe Tech:\n• Python (Streamlit frontend, NumPy for vector math)\n• GPT-4 Turbo for reasoning\n• Modular architecture: Separate simulation agent from evaluation agent to prevent reasoning leakage\n\nWhy This Matters:\n• Shows how to grade unstructured text inputs by injecting negative constraints into prompts\n• Converts soft qualitative problems (integrity, alignment) into hard quantifiable metrics (0.0-1.0 score)\n• Shipped working prototype in <4 hours from problem identification to deployment\n\nThe Outcome:\nAlignment isn't about what you say. It's about what you choose when both options suck. The system forces that choice, then measures the gap.",
    "tags": ["AI-evals", "LLM", "rapid-prototype", "product"],
    "image": ""
}

        
            ],
    backburner: [
{ 
            id: 'b1',
            date: 'Jan 2026', 
            title: 'Attention Budgeting > Time Budgeting', 
            excerpt: 'Building a task manager that tracks cognitive load instead of hours. Early prototype suggests I\'m terrible at estimating my own mental bandwidth.', 
            body: 'The hypothesis: Time management is a solved problem (calendars work). Attention management is not (to-do lists fail).\n\nWhat I built: A daily planner that forces me to assign each task a \"cognitive weight\" (1-5) and caps my daily total at 20 points. 5-point tasks = deep work requiring flow state. 1-point tasks = admin busywork.\n\nAfter 30 days, I learned:\n• I consistently overestimate my attention budget by ~40%.\n• Context switching costs ~2 attention points, not ~0.5 like I assumed\n\nWhat surprised me: Knowing a task\'s cognitive weight requires having done it before, and it\'s difficult to accurately estimate future weights.I\'m experimenting with AI-assisted weight estimation based on task description, but it hallucinates confidently.\n\nOn pause: This works as a prototype, but not ready to scale. Still need to rethink the model for interrupt-driven work.',
            tags: ['productivity', 'rapid-prototype', 'personal-tools'],
            image: '' 
        }
    ],
    portfolio: [
        { 
            id: 'c1',
            date: 'January 2025', 
            title: 'Semantic Open Source Software', 
            excerpt: 'Led GTM strategy for an open-source platform to build AI agents', 
            body: 'SEMOSS started as an open-source data analytics tool built by a small but mighty team of engineers. \nWhat I Did:\n\nRepositioned the value prop from: "Open-source analytics with a semantic layer" to "The only analytics platform where business users can ask questions in plain English without bothering IT"\n\nFound our fit: Agencies and companies with small data teams and non-technical executives who wanted self-service BI\n\nCreated a system to enable future sales:\n• Created 40+ demo scenarios tailored to industry verticals (federal healthcare, financial services, defense & intelligence communities)\n• Developed a "6-minute pitch" format that product engineers could deliver to non-technical audiences.',
            tags: ['product-strategy', 'GTM', 'AI', 'enterprise-sales', 'positioning'],
            image: '' 
        },
        { 
            id: 'c2',
            date: 'July 2025', 
            title: 'AI Onboarding Suite', 
            excerpt: 'Built a RAG chatbot + workflow tool to reduce new hire onboarding time', 
            body: 'The Ask:\n"Build something AI. Make onboarding faster."\n\nThe Application:\n\nComponent 1: RAG Chatbot\n• Ingested 500+ documents (policies, procedures, FAQs, org charts)\n• Enforced permission boundaries (contractors couldn\'t see FTE-only info)\n• Added citation trails (every answer linked to source doc + last updated date)\n\nComponent 2: Workflow Kanban\n• Auto-generated onboarding task lists based on role/clearance level/location\n• Manager visibility (see where new hires are stuck, intervene proactively)\n• Timeline view (see onboarding milestones for next 90 days)\n\nChallenges:\nFederal environment = need to use locally hosted LLMs, deploy on-premises, pass ATO (Authority to Operate) security review\n• Work within strict data handling rules.\n\nOutcome: 30-person pilot with 100% adoption.\n\nLessons: Compliance is a design constraint. Retrieval accuracy matters less than trust. Users can forgive wrong answers if the chatbot cited sources appropriately. It\'s easy to lose trust in the tool when the model confidently hallucinates. For adoption, the chatbot was cool but the kanban board drove adoption.',
            tags: ['RAG', 'enterprise-AI', 'product-management'],
            image: '' 
        }
    ],
    thoughts: [
        { 
            id: 'q1',
            date: 'August 2025', 
            title: 'The Inference Compute Question', 
            excerpt: 'OpenAI\'s o1 spends more time thinking and gets better results. If that pattern holds, what does it mean for who can actually afford to compete?',
	    body: 'OpenAI released o1 last year and it uses more compute at inference time to think through problems step by step. The results on hard reasoning tasks were notably better than GPT-4, even though the model itself might be smaller. Which leaves me wondering: are we pricing AI wrong?\n\nIf you can get better results by letting a model think for 10 seconds instead of responding instantly, then the cost structure changes. Training a frontier model costs hundreds of millions of dollars. But inference compute scales linearly then anyone can rent more GPUs. So if inference-time compute is the path to better reasoning, does that mean the advantage of massive training runs starts to erode?\n\nI have to wonder what this means for enterprise adoption. Right now, companies optimize for cost per query. But if a model that thinks for 10 seconds gives you the right answer versus a model that responds instantly but needs human correction, which is actually cheaper? The per-query cost might be higher, but the total cost of getting to a correct answer could be lower.\n\nThen consider the on-device question. You can\'t run a trillion-parameter model on a phone, but you could give a smaller model more inference cycles. If reasoning depth matters more than parameter count, does that change what\'s possible locally? The o1 results are promising but it\'s one data point. Maybe this only works for a narrow set of reasoning tasks. Or maybe we\'re at the start of a shift where thinking time becomes the new frontier. Either way, it feels like the assumptions we\'re using to evaluate AI capabilities might need to be revisited.',
            tags: ['inference-compute', 'economics', 'reasoning'],
            image: '' 
        },
{ 
    "id": "q2",
    "date": "December 2025", 
    "title": "What Drives AI Feature Adoption?", 
    "excerpt": "I've launched AI products. The technically impressive ones don't always win.",
    "body": "My team built a RAG system with high accuracy and low latency. Usage tapered after the first few weeks. Meanwhile, a much simpler application that auto-generates meeting summaries had 100% adoption.\n\nThe pattern I keep noticing: features that inform users get tried and abandoned. Features that complete a workflow get adopted. The RAG system answered questions accurately, but users still had to figure out what to do with the answer. The meeting summary tool did what they were already doing, but faster. No next step required.\n\nIn another vein, multimodal models that can analyze images are technically remarkable, but how often do you actually need to ask your phone \"what is this?\" Compare that to something mundane like auto-organizing your photos by event rather than by date—less impressive, but I would use it more frequently.\n\nI have to wonder if this is why on-device AI might matter more moving forward. While privacy is a concern, I'm not convinced users actually care that much in practice. Many users upload more sensitive data to ChatGPT than they would share with their partners. The real advantage might be features that are instant, work offline, and can be deeply personalized because they learn from your actual behavior without sending data anywhere.\n\nWhich leaves me asking: what happens when AI commoditizes and every device has it? The differentiation would be whose features fit into someone's daily routine without them thinking about it.",
    "tags": ["AI-adoption", "product-thinking", "user-behavior"],
    "image": "" 
}

    ]
};


