const InputFormPreview = () => {
  return (
    <form className="desc-input:outline-none desc-input:px-1">
      <h1>InputFormPreview</h1>
      <fieldset className="grid grid-cols-4 gap-2">
        <span>Sample</span>
        <input className="border col-span-3" />
      </fieldset>
    </form>
  );
};

export default InputFormPreview;
