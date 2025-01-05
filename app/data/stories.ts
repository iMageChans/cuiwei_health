export interface Story {
    id: number
    image: string
    name: string
    title: string
    description: string
    quote: string
}

export const stories: Story[] = [
    {
        id: 1,
        image: '/stories/story-1.png',
        name: "Sophie's Journey",
        title: "Stress Management Success",
        description: "From constant anxiety to finding peace through mindful heart rate monitoring.",
        quote: "I never knew I could feel this balanced and energized!"
    },
    {
        id: 2,
        image: '/stories/story-2.png',
        name: "David's Transformation",
        title: "Sleep Quality Revolution",
        description: "Discovering the power of sleep tracking to improve daily performance and mood.",
        quote: "Better sleep changed my entire life perspective!"
    },
    {
        id: 3,
        image: '/stories/story-3.png',
        name: "Maria's Recovery",
        title: "Heart Health Champion",
        description: "Using heart rate variability monitoring to optimize workout recovery and performance.",
        quote: "Now I know exactly when to push and when to rest."
    }
] 