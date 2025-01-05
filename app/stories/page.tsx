import StoryCard from '../components/StoryCard'
import StoryHeroSlider from '../components/StoryHeroSlider'
import { stories } from '../data/stories'

export default function Stories() {
  return (
    <main className="min-h-screen pt-20">
      <StoryHeroSlider />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map(story => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </div>
    </main>
  )
}