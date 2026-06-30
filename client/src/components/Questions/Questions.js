/* import './Questions.css';

const Question = ({ question, options, value, onChange}) => {
    return (
        <div className="question">
            <label>{question}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="">-- Select an option --</option>
                {options.map((opt => (
                    <option key={opt} value={opt}>{opt}</option>
                )))}
            </select>
        </div>
    );
};

export default Question;     */      