// https://www.sanity.io/guides/import-svg-files-in-react#5232fcc6926f
// How to use SVG in React
// There are a few ways to use an SVG in a React app:

// 1. Use it as a regular image
<img src="/path/to/image.svg" alt="SVG as an image"></img>
import mySvg from './path/to/image.svg'

// 2. Import it as a component via bundler magic (SVGR)
import { ReactComponent as IconMenu } from './icons/menu.svg'

// 3. Include it directly as JSX
export const LoadingIcon = () => {
    return (
      <svg
          viewBox="0 0 24 24"
          xmlns="<http://www.w3.org/2000/svg>"
          >
            <path strokeWidth="2" stroke="tomato" d="M10..." />
      </svg>
    )
  }

