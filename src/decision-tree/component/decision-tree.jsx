import { useEffect, useState } from "react";
import { Decisions } from "./decisions.jsx";
import { Explainer } from "./explainer.jsx";
import { Referer } from "./referer.jsx";

export default function DecisionTree({ config }) {
  const INITIAL_STATE = {
    id: config._id,
    decisions: config.decisions,
    title: config.title,
    type: "decision",
    next: config.decisions.map((d) => d.id),
  };

  const [decisionPath, setDecisionPath] = useState(() => {
    if (history.state && history.state.path) {
      return history.state.path;
    }
    return [];
  });
  const [activeDecision, setActiveDecision] = useState(() => {
    if (decisionPath.length) {
      const previousId = decisionPath[decisionPath.length - 1];
      return config.flatTree[previousId] || INITIAL_STATE;
    }
    return INITIAL_STATE;
  });

  /**
   * Move decision tree back when user navigates via back button
   */
  useEffect(() => {
    window.addEventListener("popstate", back);
    return () => window.removeEventListener("popstate", back);
  }, [decisionPath]);

  /**
   * Store decision path in history state
   */
  useEffect(() => {
    // const url = new URL(window.location);
    // url.searchParams.set('p', decisionPath.join(','));
    history.pushState({ path: decisionPath }, null);
  }, [decisionPath]);

  /**
   * Shows next decision
   */
  function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const nextId = Object.values(formProps)[0];
    const next = config.flatTree[nextId];
    if (next) {
      const path = [...decisionPath];
      path.push(next.id);
      setDecisionPath(path);
      setActiveDecision(next);
    }
  }

  /**
   * Move back to previous decision
   */
  function back() {
    if (!decisionPath || !decisionPath.length) {
      return;
    }

    const previousId = decisionPath[decisionPath.length - 2];
    if (previousId) {
      const newDecision = config.flatTree[previousId] || INITIAL_STATE;
      setActiveDecision(newDecision);
      const path = [...decisionPath];
      path.pop();
      setDecisionPath(path);
    } else {
      // Reset decision tree
      setActiveDecision(INITIAL_STATE);
      setDecisionPath([]);
    }
  }

  return (
    <div className="osc-decision-tree">
      <form onSubmit={submit}>
        <h1>{activeDecision.title}</h1>
        {activeDecision.type === "decision" ? (
          <Decisions activeDecision={activeDecision} />
        ) : null}
        {activeDecision.type === "explainer" ? (
          <Explainer activeDecision={activeDecision} />
        ) : null}
        {activeDecision.type === "referer" ? (
          <Referer activeDecision={activeDecision} />
        ) : null}

        <div className="button-bar">
          {decisionPath.length ? (
            <button className="back" type="button" onClick={back}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <rect fill="none" height="24" width="24" />
                <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" />
              </svg>
              terug
            </button>
          ) : <div></div>}
          {activeDecision.next.length ? (
            <button className="next" type="submit">
              volgende
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <rect fill="none" height="24" width="24" />
                <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
              </svg>
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
}
