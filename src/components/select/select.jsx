function Select({ onSelect, value }) {
  return (
    <select value={value} onChange={(e) => onSelect(e.target.value)}>
      <option value="all">all</option>
      <option value="done">done</option>
      <option value="undone">undone</option>
    </select>
  );
}

export default Select;
