export const getGlobalCss = (styleConsts) => {
  // eslint-disable-next-line max-len
  const fontFamily = `${styleConsts.FONT_STACK && styleConsts.FONT_STACK.length ? `${styleConsts.FONT_STACK}, ` : ''}${styleConsts.BASE_FONT_STACK}`;
  return `
html {
  box-sizing: border-box;
  line-height: 1.15; // 1
  -webkit-text-size-adjust: 100%; // 2
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: ${fontFamily}
}

img {
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  -ms-interpolation-mode: bicubic;
}

textarea {
  height: auto;
  min-height: 50px;
}

select {
  box-sizing: border-box;
  width: 100%;
}

.map_canvas,
.mqa-display {
  img,
    embed,
    object {
    max-width: none !important;
  }
}

button {
  padding: 0;
  appearance: none;
  border: 0;
  background: transparent;
  line-height: 1;
}

pre {
  overflow: auto;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
}

.is-visible {
  display: block !important;
}

.is-hidden {
  display: none !important;
}`;
};
