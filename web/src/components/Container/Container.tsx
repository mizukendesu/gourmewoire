import { cn } from '@/lib/cn'

type Props = {
  className?: string
}

export const Container = ({ className }: Props) => {
  return (
    <main
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen',
        className,
      )}
    ></main>
  )
}
