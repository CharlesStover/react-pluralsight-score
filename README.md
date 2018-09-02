# pluralsight-score
A React component mimicking the Pluralsight Score IQ graph.

[![package](https://img.shields.io/github/package-json/v/CharlesStover/react-pluralsight-score.svg)](https://travis-ci.com/CharlesStover/react-pluralsight-score/)
[![build](https://api.travis-ci.com/CharlesStover/react-pluralsight-score.svg)](https://travis-ci.com/CharlesStover/react-pluralsight-score/)
[![downloads](https://img.shields.io/npm/dt/pluralsight-score.svg)](https://www.npmjs.com/package/pluralsight-score)
[![minified size](https://img.shields.io/bundlephobia/min/pluralsight-score.svg)](https://www.npmjs.com/package/pluralsight-score)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/pluralsight-score.svg)](https://www.npmjs.com/package/pluralsight-score)

## Install
* `npm install pluralsight-score --save` or
* `yarn add pluralsight-score`

## Props
* hidden: boolean
  Gives the component a height of `0`, useful for height-based CSS transitions.
  Default: `false`

* onRef: function
  Callback for the root ref.

* percentile: number
  A number from 0 to 100 used to draw and animate the graph.
