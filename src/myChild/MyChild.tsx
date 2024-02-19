import { useContext } from 'react';
import { ThemeContext } from '../useContextExample/UsecontextExample';

export default function MyChild() {
  const theme = useContext(ThemeContext);

  return (
    <>


    <h1> This the child component</h1>
<h2>The current theme is {theme}</h2>

</>
  )
}
