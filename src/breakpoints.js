import { fromEvent, merge, of } from 'rxjs'
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators'

export const SMALL = 'small'
export const LARGE = 'large'

export const breakPoints = {
  [SMALL]: {
    min: 0,
    max: 320,
  },
  [LARGE]: {
    min: 321,
    max: Number.POSITIVE_INFINITY,
  }
}


export const getBreakPointFromScreenSize = () =>
  Object
    .entries(breakPoints)
    .reduce((currentBreakpoint, potentialBreakPoint) => {
      const sizeInPixels = document.body.clientWidth
      const [breakPoint, sizes] = potentialBreakPoint;
      const {min, max} = sizes;
      if (min <= sizeInPixels && max >= sizeInPixels) {
        return breakPoint
      }
      return currentBreakpoint
    }, SMALL)


export const breakpointChangeStream =
  merge(
    fromEvent(window, 'resize'),
    of(null),
  )
    .pipe(debounceTime(100))
    .pipe(map(getBreakPointFromScreenSize))
    .pipe(distinctUntilChanged())
