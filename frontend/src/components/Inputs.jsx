const Inputs = ({ label, type, name, value, handlerFunction }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        id={label}
        value={value}
        onChange={handlerFunction}
        required
      />
    </>
  );
};

export { Inputs };
