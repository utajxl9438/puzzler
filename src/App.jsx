import { useState, useEffect, useCallback } from "react";
import LazyProblem from "./components/LazyProblem.jsx";
import ProblemNavbar from "./components/ProblemNavbar.jsx";

// Discover all problem-*.jsx files in ./problems/ – add a new file there to add a problem (no other config).
const problemModules = import.meta.glob("./problems/problem-*.jsx");

const problemIds = Object.keys(problemModules).sort((a, b) => {
  const n1 = parseInt(a.match(/\d+/)?.[0] || "0", 10);
  const n2 = parseInt(b.match(/\d+/)?.[0] || "0", 10);
  return n1 - n2;
});

const STORAGE_KEY = "cse3340-active-problem";

function getStoredProblemId() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function setStoredProblemId(id) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // ignore
  }
}

function App() {
  const [selectedId, setSelectedId] = useState(() => {
    const stored = getStoredProblemId();
    if (stored && problemIds.includes(stored)) return stored;
    return problemIds[0] ?? null;
  });

  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    if (selectedId) setStoredProblemId(selectedId);
  }, [selectedId]);

  const handleKeyDown = useCallback((e) => {
    console.log("key");
    if (e.ctrlKey && e.code === "Space") {
      e.preventDefault();
      setNavVisible((v) => !v);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleProblemChange = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    <div className="app">
      <ProblemNavbar
        problemIds={problemIds}
        selectedId={selectedId}
        onChange={handleProblemChange}
        visible={navVisible}
      />

      <main className={navVisible ? "main-content" : "main-content nav-hidden"}>
        <LazyProblem selectedId={selectedId} problemModules={problemModules} />
      </main>
    </div>
  );
}

export default App;
