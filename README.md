

# useHydra
A component that chains keystrokes. So instead of `C-c C-v`, `C-c-v` can be keyed in.


* `useHydra()` helps with reacting to keystrokes from the user. It can chain keystrokes.
* Keys pressed inside a set interval, `gapTolerance`, can be chained.
* A key pressed after the interval will start a new chain.
* Usage:
`const [currentKeyCombo, updateGapTolerance] = useHydra(defaultGaTolerance)`
* `currentKeyCombo` is an array containing the current keystrokes of the user.
* `updateGapTolerance`, in milliseconds, is used to chain key pressed inside of an interval. Default is 1000ms.

# See It In Action

https://user-images.githubusercontent.com/86018533/207340080-5b090a37-a175-4951-a40f-854aeb528630.mp4

## [Preview Website](2brownc.github.io/useHydra/)