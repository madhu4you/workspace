# CSS Layouts using Flexbox design

######Flexible Box Layout Module

The Flexible Box Layout model is made for producing layouts and user interfaces in which the flex items inside of a flex container can be arranged in any direction and can flex their sizes. Some of the flexbox properties are animatable which renders a cool effect when flex items flex their sizes.


The Flexbox family of properties are:

1. flex-direction : row
   1. row - specify that flex items are flowing on the horizontal axis. 
   2. row-reverse - same as row but the direction is reversed. 
   3. column - specify that flex items are flowing on the vertical axis. 
   4. column-reverse - same as column but the direction is reversed.
2. flex-wrap : wrap
   1. nowrap - make flex items stay on a single line 
   2. wrap - make flex items wrap to new lines according to flex item width 
   3. wrap-reverse - reverse the flow of the flex items when they wrap to new lines
3. flex-flow: row wrap
   1. see flex-direction and flex-wrap
4. order : 1
   1. integer - specify item order using positive/negative whole number
5. flex: 0 1 100%
   1. none - equates to "0 0 main-size" 
   2. auto - equates to "1 1 main-size" 
   3. see flex-grow, flex-shrink and flex-basis properties
6. flex-grow: 1
   1. number - specify 0 or 1
7. flex-shrink: 1
   1. number - specify 0 or 1
8. flex-basis: 100%
   1. length - specify a pixel value ( such as 100px ) 
   2. percentage - specify a percentage value ( such as 50% ) 
   3. main-size - keyword that gets the main size property
9. justify-content: auto
   1. auto - equates to "stretch" for flex containers.
   2. baseline - align elements along the baseline.
   3. flex-start - align flex items at the start of the flex container.
   4. flex-end - align flex items at the end of the flex container.
   5. center - center the elements.
   6. space-between - distribute space in between items.
   7. space-around - distribute space around flex items.
   8. stretch - stretch the elements to fill space.
10. align-items: auto
   1. auto - equates to "stretch" for flex containers. 
   2. flex-start - align flex items at the start of the flex container. 
   3. flex-end - align flex items at the end of the flex container. 
   4. center - center the elements. 
   5. baseline - align elements along the baseline. 
   6. stretch - stretch the elements to fill space.
11. align-self
   1. auto - equates to the value of the parent align-items property. 
   2. flex-start - align flex item at the start of the flex container 
   3. flex-end - align flex item at the end of the flex container. 
   4. center - center element in its parent container. 
   5. baseline - align item along the baseline. stretch - stretch the element to fill space. 
12. align-content 
   1. flex-start - align flex items at the start of the flex container.
   2. flex-end - align flex items at the end of the flex container.
   3. center - center the elements.
   4. space-between - distribute space in between items.
   5. space-around - distribute space around flex items.
   6. stretch - stretch the elements to fill space.
