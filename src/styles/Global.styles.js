import styled, { css, injectGlobal } from 'styled-components'


export default injectGlobal`
body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #181818;
    text-align:center;
}
html {
    position: relative;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
}
`