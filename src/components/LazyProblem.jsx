import { Suspense, lazy } from "react";

function LazyProblem({ selectedId, problemModules }) {
  if (!selectedId) {
    return (
      <section>
        <p>
          Add <code>problem-N.jsx</code> files in <code>src/problems/</code> to
          see them here.
        </p>
      </section>
    );
  }

  const LazyComponent = lazy(problemModules[selectedId]);

  return (
    <Suspense
      fallback={
        <section>
          <p>Loading problem…</p>
        </section>
      }
    >
      <LazyComponent />
    </Suspense>
  );
}

export default LazyProblem;
