import { Explainer } from "./explainer.jsx";

export function Referer({ activeDecision }) {

  return (
    <div>
      <Explainer activeDecision={activeDecision} />
      <p>
        <a href={activeDecision.url} target="_blank">{activeDecision.url}</a>
      </p>
    </div>
  );
}
