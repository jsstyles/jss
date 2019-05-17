import stylis from 'stylis'
import parse from '../../src/parse'

const css = `
  color: rgb(77, 77, 77);
  cursor: auto;
  widows: 2;
  quotes: initial;
  orphans: 2;
  tab-size: 8;
  direction: initial;
  font-size: 15px;
  word-wrap: normal;
  font-style: normal;
  visibility: visible;
  word-break: normal;
  text-align: initial;
  box-sizing: border-box;
  font-weight: normal;
  white-space: normal;
  line-height: normal;
  font-family: proxima-nova, "Helvetica Neue", Arial, Helvetica, sans-serif;
  empty-cells: show;
  text-indent: 0px;
  text-shadow: none;
  font-stretch: normal;
  caption-side: top;
  word-spacing: normal;
  text-transform: none;
  letter-spacing: normal;
  text-rendering: optimizeLegibility;
  border-collapse: separate;
  text-align-last: auto;
  list-style-type: disc;
  list-style-image: none;
  list-style-position: outside;
  text-decoration-color: initial;
  font-variant: normal normal;
  border-spacing: 0px;
`

stylis.set({
  global: false,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
})

suite('Parse', () => {
  benchmark('parse()', () => {
    parse(css)
  })

  benchmark('stylis()', () => {
    stylis('#id', css)
  })
})
