export function Explainer({ activeDecision }) {
    return <div>{activeDecision.explainer || ''}</div>;
}
