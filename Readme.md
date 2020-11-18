[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/new-england-senators?style=flat-square)](/LICENSE.txt)
## New England Senators

Interactive component: sort New England's US Senators by state, political party, gender.

## Project Screen Shots

![screen shot of project](/screenshots/new-england-senators-screenshot1.jpg)

![screen shot of project](/screenshots/new-england-senators-screenshot2.jpg)

![screen shot of project](/screenshots/new-england-senators-screenshot3.jpg)

![screen shot of project](/screenshots/new-england-senators-screenshot4.jpg)

## Installation and Setup Instructions

This is a static component. All you need is a web browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

For geography, New England is a region in the Northeast United States. It is comprised of the states Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, and Vermont. 

I wanted to build a component that allows users to sort the US Senators representing New England States by state, political party, and gender. There are only 12 Senators involved but the concept could be expanded to a larger group, for example, all US Senators.

The primary challenge in creating this component was ensuring that the component displayed only the intersection of the selected groups, and not all members of the groups that were selected. For example, if a user checked the boxes for Massachusetts, female, and Democratic, displaying all Senators from Massachusetts, all female Senators, and all Democratic Senators would be wrong. I needed to display only Senators who met all three requirements. Conversely, if a user did not select any groups within a category, I needed to make sure all Senators in that category were available.

To accomplish this, I have the component create an object for each Senator. Then, I use a series of loops and if/else statements to create arrays for each group (for example, female Senators, Democratic Senators, Senators from Vermont, etc.). These arrays contain an ID for each Senator.

Next, each time a checkbox is checked or unchecked, I loop through the checkboxes and add the checked groups arrays to their larger category arrays. For example, if "Vermont" and "Maine" are checked, I add the "Senators from Vermont" and "Senators from Maine" group arrays to the "States" category array. As I mentioned above, if no checkboxes in a category (for example, gender) are checked, I add all possible groups (female Senators, male Senators) to that categories (gender) array.

At this point, we have three category arrays: state, party, gender, with each containing ids for the Senators. For example:

`const state = ['joe', 'mary', 'lisa', 'george'];`

`const party = ['joe', 'lisa', 'phillip'];`

`const state = ['lisa', 'george', 'sylvia'];`

I filter the arrays to find the common id or ids. I then display those Senators.

## Acknowledgments

* Senate data from [The United States Senate](https://www.senate.gov).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Fonts from [Google Fonts](https://fonts.google.com).
* Shields from [Shields](https://shields.io).


