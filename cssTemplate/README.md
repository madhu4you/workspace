# CSS Layouts using Flexbox design

######Flexible Box Layout Module

The Flexible Box Layout model is made for producing layouts and user interfaces in which the flex items inside of a flex container can be arranged in any direction and can flex their sizes. Some of the flexbox properties are animatable which renders a cool effect when flex items flex their sizes.


The Flexbox family of properties are:

1. flex-direction : row
    ```
    Value
    a. row - specify that flex items are flowing on the horizontal axis. 
    b. row-reverse - same as row but the direction is reversed. 
    c. column - specify that flex items are flowing on the vertical axis. 
    d. column-reverse - same as column but the direction is reversed.
    ```
2. flex-wrap : wrap
    ```
    Value
    a. nowrap - make flex items stay on a single line 
    b. wrap - make flex items wrap to new lines according to flex item width 
    c. wrap-reverse - reverse the flow of the flex items when they wrap to new lines
    ```
3. flex-flow: row wrap
    ```
    Value
    see flex-direction and flex-wrap
    ```
4. order : 1
    ```
    Value
    integer - specify item order using positive/negative whole number
    ```
5. flex: 0 1 100%
    ```
    Value
    a. none - equates to "0 0 main-size" 
    b. auto - equates to "1 1 main-size" 
    see flex-grow, flex-shrink and flex-basis properties
    ```
6. flex-grow: 1
    ```
    Value
    number - specify 0 or 1
    ```
7. flex-shrink: 1
    ```
    Value
    number - specify 0 or 1
    ```
8. flex-basis: 100%
    ```
    Value
    a. length - specify a pixel value ( such as 100px ) 
    b. percentage - specify a percentage value ( such as 50% ) 
    c. main-size - keyword that gets the main size property
    ```
9. justify-content: auto
    ```
    Value
    a. auto - equates to "stretch" for flex containers.
    b. baseline - align elements along the baseline.
    c. flex-start - align flex items at the start of the flex container.
    e. flex-end - align flex items at the end of the flex container.
    f. center - center the elements.
    g. space-between - distribute space in between items.
    h. space-around - distribute space around flex items.
    i. stretch - stretch the elements to fill space.
    ```
10. align-items: auto
    ```
    Value
    a. auto - equates to "stretch" for flex containers. 
    b. flex-start - align flex items at the start of the flex container. 
    c. flex-end - align flex items at the end of the flex container. 
    e. center - center the elements. 
    f. baseline - align elements along the baseline. 
    g. stretch - stretch the elements to fill space.
    ```
11. align-self
    ```
    Value
    a. auto - equates to the value of the parent align-items property. 
    b. flex-start - align flex item at the start of the flex container 
    c. flex-end - align flex item at the end of the flex container. 
    d. center - center element in its parent container. 
    e. baseline - align item along the baseline. stretch - stretch the element to fill space. 
    ```
12. align-content 
    ```
    Value
    a. flex-start - align flex items at the start of the flex container.
    b. flex-end - align flex items at the end of the flex container.
    c. center - center the elements.
    d. space-between - distribute space in between items.
    e. space-around - distribute space around flex items.
    f. stretch - stretch the elements to fill space.
    ```

