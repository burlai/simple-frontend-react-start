import React, { useState, useTransition } from "react";

export const LongList: React.FC = () => {
  //   const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState<string>("");

  const items = Array.from({ length: 25000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
  }));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // startTransition(() => {
    setFilter(event.target.value);
    // });
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleInputChange}
        placeholder="Filter items..."
      />
      {/* {isPending && <p>Loading filtered results...</p>} */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
