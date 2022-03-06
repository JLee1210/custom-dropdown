# custom-dropdown

## A Reusable Custom Dropdown Component

### Running the Application
1. `cd` into root directory after cloning the repo then run `npm install`
2. Run `npm start`
3. Your app should be running locally on http://localhost:3000

### Basic Overview
The Reusuable components are all in the [`\components`](https://github.com/JLee1210/custom-dropdown/tree/master/src/components) folder.
`CustomDropdown.js` is the customized dropdown component where it takes in a list of data to render as the dropdown options. Since the prompt was relatively vague, I also designed the backend data to work specifically for a certain design which is an array of objects including value and label like below:
```
[
  {
    label: "Ten",
    value: 10
  },
  {
    label: "Eleven",
    value: 11
  },
  ...
]
```
However, if one wants to change the design, they can easily change it within the code. With that being said, I made sure the general `DropdownSelect` and `DropdownOption` components were strictly reusable. I was told to not use any libraries thus I did not use any css libraries like Material UI and Tailwind CSS, but coded from scratch.

![image](https://user-images.githubusercontent.com/46725713/156917395-228079b3-060d-45c7-8b0d-b978b2063aa2.png)
