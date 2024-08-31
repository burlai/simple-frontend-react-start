import React, { useState, useTransition } from "react";

type DataArray = { id: number; name: string }[];

export const LongList: React.FC = () => {
  //   const [isPending, startTransition] = useTransition();
  const [filterInputValue, setFilterInputValue] = useState<string>("");

  const items = Array.from({ length: 25000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
  }));

  const filterItems = (dataArray: DataArray, filterBy: string) =>
    dataArray.filter((item) =>
      item.name.toLowerCase().includes(filterBy.toLowerCase())
    );

  const filteredItems = filterItems(items, filterInputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // startTransition(() => {
    setFilterInputValue(event.target.value);
    // });
  };

  return (
    <div>
      <input
        type="text"
        value={filterInputValue}
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
