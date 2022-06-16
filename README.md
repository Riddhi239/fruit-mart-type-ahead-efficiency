## Practice Challenge - Fruit Mart App: Improve Typeahead Efficiency 

### What is Typeahead?

Typeahead is a feature of computers and software (and some typewriters) that enables users to continue typing regardless of program or computer operation—the user may type in whatever speed is desired, and if the receiving software is busy at the time it will be called to handle this later. 

Often this means that keystrokes entered will not be displayed on the screen immediately. 

### Context

Fruit Mart is an online app that allows its customers to purchase fruits online. 

The app has typeahead feature enabled in the app, which allows easy search for the fruits for purchasing them online

### Problem

Recently, the Fruit Mart owners have received feedback that performance of the app has dipped.

Upon analyzing the causes for dip in performance, it has been identified that the typeahead feature is one of the main causes for latency

The typeahead feature executes with every key stroke and executes search at every stroke, which therefore hits the performance

The grocery owners want to now improve the efficiency of the app while implementing typeahead feature.

To resolve the concern, a delay of few milliseconds can be induced to delay the search. 

The search will be carried out for the set of characters inputted in those milliseconds, rather than implementing search at every key stroke


### Instructions

1. The code has search functionality implemented with DOM manipulation carried out using DOM event handling code
2. Transform the code using RxJS Observables and Operators
3. Use CDN https://unpkg.com/@reactivex/rxjs@version/dist/global/Rx.umd.js to install RxJS for browser enabled execution
