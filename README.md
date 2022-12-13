# useHydra
A component that chains keystrokes. So instead of `C-c C-v`, `C-c-v` can be keyed in.


* `useHydra()` helps with reacting to keystrokes from the user. It can chain keystrokes.
* Keys pressed inside a set interval, `gapTolerance`, can be chained.
* A key pressed after the interval will start a new chain.
* Usage:
`const [currentKeyCombo, updateGapTolerance] = useHydra(defaultGaTolerance)`
* `currentKeyCombo` is an array containing the current keystrokes of the user.
* `updateGapTolerance`, in milliseconds, is used to chain key pressed inside of an interval. Default is 1000ms.
