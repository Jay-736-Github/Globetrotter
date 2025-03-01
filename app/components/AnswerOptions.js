"use client";

export default function AnswerOptions({ options, onSelect, selected }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Choose the Destination:</h2>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option.city)}
            className={`border p-2 rounded ${
              selected === option.city
                ? "bg-gray-300"
                : "bg-white hover:bg-gray-100"
            }`}
            disabled={!!selected}
          >
            {option.city}
          </button>
        ))}
      </div>
    </div>
  );
}
