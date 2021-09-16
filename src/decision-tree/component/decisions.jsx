export function Decisions({ activeDecision }) {
  return (
  <ul>
     {activeDecision.decisions.map((decision) => (
     <li key={decision.id}>
        <label for={decision.id}>
        <input type="radio" id={decision.id} name="decision-tree" value={decision.id} />
        {decision.title}
        </label>
     </li>
     ))}
  </ul>
  );
  }
