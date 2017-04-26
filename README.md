# Q&A Bot service for Frequently Asked Questions

If you would like to add a web chat bot to an already existing website, you can add these snippets to the files or parts of your code where they would fit or run best.

![Web Chat iFrame](/images/WebChat.gif)


# HTML
We made 3 div containers: one for the Title Bar, one for the iFrame with the TuringBot Chat, and one div that contains these two divs. 

The iFrame styling was also slightly modified: height changed to a fixed 500px, width changed to 100% the size of the container, and we subtracted 40px from the top margin to hide the original TuringBot title bar inside of the parent container.
Then the HTML code was added to the footer of the website. 

# JavaScript 
For JavaScript, we used jQuery functions. 

The first function toggles the sliding animation whenever the user clicks the title bar.

The second function just hides the chat by default until the user clicks it, making it slide into view. 

# CSS
Finally, we have the CSS for styling. 

```parent_div``` handles positioning and styling outside of the iFrame. 

```titlebar_div``` has a cursor: pointer; attribute so that the user knows the box in the corner is clickable.

```chat_div``` needed a background-color attribute because the iFrame has no background and it made it hard to read. We also take into account the height of the iFrame and the margin top subtraction we did in the HTML section.
