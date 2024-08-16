import { apiClient } from '@/lib/apiClient'
import { cn } from '@/lib/cn'

type Props = {
  className?: string
}

export const Container = async ({ className }: Props) => {
  const posts = await apiClient.posts.$get()

  console.log(posts)
  return (
    <main
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen',
        className,
      )}
    >
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
