Interactive list of US Senators representing New England states. Users can filter the Senators by state, political party, gender, or any combination of the categories. Filtering is "deductive. Initially, all Senators are displayed.
 
Filtering is accomplished with "vanilla" JavaScript. When users check a checkbox, the script gathers all elements of a certain class, finds their unique ID's, and stores them in an array. The arrays are then combined (using the spread operator) into a larger "category" array (for example, political party). These larger arrays are then compared to each other to discover what elements intersect and which Senators should be displayed.
 
There is a safeguard in case users don't select anything from a particular category. Basically, if they select nothing in a category, the script interprets it as selecting everything in a category. Additionally, an alert displays if the users select combinations that return no results.
 
The list has minimal styling. All sizing is relative and there are some media queries. You would probably want to add more styling for a production model.