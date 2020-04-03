// Import the Elix components we want to use.
import DateComboBox from "../node_modules/elix/define/DateComboBox";

// Instantiate an Elix component.
const dateComboBox = new DateComboBox();

// TypeScript knows that a DateComboBox's `date` property is strongly typed as a
// JavaScript Date.
dateComboBox.date = new Date("1 Jan 2021");

// We can add the components to the page like any other HTML elements.
// We can also put components in the page via markup; see index.html.
document.body.appendChild(dateComboBox);
