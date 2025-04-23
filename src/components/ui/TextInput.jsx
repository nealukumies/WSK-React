const TextInput = (props) => {
  return (
    <div className="flex w-4/5 flex-col">
      <label htmlFor="title">{props.title}</label>
      <input className="my-2.5 rounded border-1 p-2.5" type="text" {...props} />
    </div>
  );
};
