export function Decisions({ activeDecision }) {
    return (
        <ul>
            {activeDecision.decisions.map((decision) => (
                <li key={decision.id}>
                    <label>
                        <input type="radio" name="decision-tree" value={decision.id} />{" "}
                        {decision.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}
