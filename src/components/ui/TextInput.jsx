const TextInput = ({label, id, ...props}) => {
  return (
    <div className="mb-4 flex w-full flex-col">
      <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        className="rounded border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        {...props}
      />
    </div>
  );
};

export default TextInput;
