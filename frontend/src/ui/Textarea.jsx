function Textarea({ label, optional = false, onChange }) {
  return (
    <div className="mb-3">
      <label
        className="mb-1 block text-sm text-extragray sm:text-base"
        htmlFor="login"
      >
        {label}
        {!optional && <sup className=" text-red">*</sup>}
      </label>
      <textarea
        className="h-[110px] w-full rounded border border-[#E2E9F2] bg-[#F8FAFD] px-2 pl-3 text-[16px] outline-none"
        value={'1'}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Textarea;
