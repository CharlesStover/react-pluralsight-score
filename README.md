# Pluralsight Score IQ Graph for React [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=You%20can%20integrate%20the%20@Pluralsight%20IQ%20graph%20directly%20into%20your%20React%20application.%20pic.twitter.com/a1L5J8nbMj&url=https://github.com/CharlesStover/react-pluralsight-score&via=CharlesStover&hashtags=react,reactjs,javascript,webdev,webdeveloper,webdevelopment)

A React component mimicking the Pluralsight Score IQ graph.

[![version](https://img.shields.io/npm/v/pluralsight-score.svg)](https://www.npmjs.com/package/pluralsight-score)
[![minified size](https://img.shields.io/bundlephobia/min/pluralsight-score.svg)](https://www.npmjs.com/package/pluralsight-score)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/pluralsight-score.svg)](https://www.npmjs.com/package/pluralsight-score)
[![downloads](https://img.shields.io/npm/dt/pluralsight-score.svg)](https://www.npmjs.com/package/pluralsight-score)
[![build](https://api.travis-ci.com/CharlesStover/react-pluralsight-score.svg)](https://travis-ci.com/CharlesStover/react-pluralsight-score/)

[![screenshot](https://user-images.githubusercontent.com/343837/45318006-47dc1300-b501-11e8-8204-9f88a7ea49c0.png)](https://www.npmjs.com/package/pluralsight-score)

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
