import React from "react";

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="hidden md:block relative w-40 h-8">
      <select
        onChange={func}
        defaultValue="0"
        name="format"
        id="format"
        className="w-full appearance-none px-3 py-2 pr-8 rounded-md bg-base-200 text-sm text-white border border-base-300 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] transition duration-200"
      >
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>

      {/* Custom Arrow */}
      <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-white">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
