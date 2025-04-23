const Input = ({title}) => {
  return (
    <div>
      <label htmlFor="title">{title}</label>
      <TextInput
        label="title"
        name="title"
        type="text"
        id="title"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
