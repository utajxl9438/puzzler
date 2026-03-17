import "../components/informationcard.css";
import { useState } from "react";
function Problem3() {
  const months = 12;
  const [desiredPeak, setDesiredPeak] = useState(3);
  const bellCenter = 6;  // fixed center for math (July)
  const stdDev = 2;      // bell spread

  // Thresholds
  const unavailableThreshold = 0.25; // below this, month is unavailable
  const peakThreshold = 0.75;        // above this, month is peak

  // Gaussian function
  function gaussian(x, mean, stdDev) {
    return Math.exp(-0.5 * ((x - mean) / stdDev) ** 2);
  }

  // Step 1: Generate bell curve centered at bellCenter
  let bellCurve = Array.from({ length: months }, (_, i) =>
    gaussian(i, bellCenter, stdDev)
  );

  // Step 2: Normalize to [0,1]
  const maxValue = Math.max(...bellCurve);
  bellCurve = bellCurve.map(v => v / maxValue);

  // Step 3: Rotate the bell curve so the peak is at desiredPeak
  function rotateArray(arr, shift) {
    const n = arr.length;
    const s = ((shift % n) + n) % n; // ensure positive modulo
    return arr.slice(n - s).concat(arr.slice(0, n - s));
  }

  const shiftAmount = (desiredPeak - bellCenter + months) % months;
  bellCurve = rotateArray(bellCurve, shiftAmount);

  // Step 4: Assign labels with thresholds and side-of-peak
  const monthStatus = bellCurve.map((value, i) => {
    if (value < unavailableThreshold) return "unavailable"; // too low
    if (value >= peakThreshold) return "peak";             // high enough for peak

    // Middle values: early or late based on distance to peak
    const clockwiseDist = (i - desiredPeak + months) % months;
    if (clockwiseDist <= months / 2) return "late"; // right of peak
    return "early";                                 // left of peak
  });

  console.log(bellCurve.map(v => v.toFixed(2)));
  console.log(monthStatus);

  return (
    <section className="problem-view">
      <div className="m-4">
        <label htmlFor="peak-month-slider" style={{ fontWeight: 600, marginRight: "1rem" }}>
          Desired Peak Month (0=Jan, 11=Dec):
        </label>
        <input
          id="peak-month-slider"
          type="range"
          min="0"
          max={months - 1}
          value={desiredPeak}
          onChange={(e) => setDesiredPeak(Number(e.target.value))}
          style={{ verticalAlign: "middle", marginRight: "1rem" }}
        />
        <span style={{ fontWeight: 500 }}>
          {desiredPeak}
        </span>
      </div>
      <ul className="m-5 text-lg">
        {monthStatus.map((value, index) => (
          <li className={value} key={index}> 
            {index}: {value}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Problem3;
