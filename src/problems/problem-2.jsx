import { useState } from "react";
function Problem2() {
  // You need to:
  // 1. Render a <select> dropdown that lets the user pick a month. Set its value to the 'selectedMonth' state.
  // 2. When a user selects a month, update the state using setSelectedMonth(e.target.value).
  // 3. Display all the months in a <ul><li>...</li></ul> list.
  // 4. Bold (<b>) the month in the list that matches the selected month.
  //    For example: if "Jun" is selected, <li><b>Jun</b></li> should appear.
  // You can use map to iterate over the months array for both <option> elements and <li> elements.
  // To make a dropdown option with value 'month', use: <option value={month}>{month}</option>
  // Remember to check if (month === selectedMonth) when rendering your <li> so you know which one to bold.

  const [selectedMonth, setSelectedMonth] = useState(null);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <section className="problem-view p-2">
      <h2>Problem 2</h2>
      <p> Have a dropdown with the months of the year. Based on what is selected, bold the current month.</p>

      {/* Solution */}
      {selectedMonth && <p className="text-lg my-5">Selected month: {selectedMonth}</p>}
      <select className="py-5 text-lg" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
        {months.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
      <hr/>
      <ul className="mt-5 text-lg">
        {months.map((month, index) => (
          <li key={index}>
            {month === selectedMonth ? <b>{month}</b> : month}
          </li>
        ))}
      </ul>

    </section>
  );
}

export default Problem2;
