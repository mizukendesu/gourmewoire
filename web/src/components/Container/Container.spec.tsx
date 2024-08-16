import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Container } from './Container'

describe('components/Container', () => {
  it('クラッシュせずにレンダリングされる', () => {
    const { container } = render(<Container />)
    expect(container).toBeInTheDocument()
  })

  it('classNameプロップが適用される', () => {
    const className = 'custom-class'
    const { container } = render(<Container className={className} />)
    expect(container.firstChild).toHaveClass(className)
  })
})
