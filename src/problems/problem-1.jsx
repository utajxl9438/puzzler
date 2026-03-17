import InformationCard from "../components/InformationCard.jsx";

function Problem1() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentMonth = new Date().getMonth();
  const currentMonthName = months[currentMonth];  
  return (
    <section className="problem-view p-2">
      <h2>Problem 1</h2>
      <p> Render a <code>{`<ul><li>...</li></ul>`}</code> list of months, with the current month in bold.</p>

      {/* Solution */}

      {/* We are rendering a list of month names as <ul><li>...</li></ul>.
          For each month, we check if it's the current month and make it bold if so. */}

      <ul>
        {months.map((month, index) => (
          // months.map(...) creates a new array by transforming each item in months.
          // 'month' is the name (like "Jan"), and 'index' is its position in the array (0 for "Jan", 1 for "Feb", etc)
          // React needs a unique 'key' for each <li> – since months are unique and fixed, using index is fine here.

          // We compare 'index' and 'currentMonth' using "==="
          // 'index' is a number (0-11), 'currentMonth' is also a number (from new Date().getMonth())
          // === checks both value and type are the same

          // In JSX, we can write HTML tags like <b>{month}</b> directly inside curly braces {}.
          // This works because inside {} (JSX expression), you can put expressions that return any renderable value—including other JSX.
          // We don't need parentheses () around <b>{month}</b> if it's a single expression and not doing a multi-line return (like in an arrow function with implicit return).
          // In standard JS (outside JSX), {} denote a block statement, and () sometimes group expressions, 
          // but in JSX curly braces are for embedding JavaScript expressions and JS expressions can return JSX elements.

          <li key={index}>
            {index === currentMonth ? <b>{month}</b> : month}
          </li>
        ))}
      </ul>

    </section>
  );
}

export default Problem1;
