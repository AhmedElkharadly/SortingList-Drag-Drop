import React, { useEffect, useRef, useState } from "react";
import ListContainer from "../ListContainer/ListContainer";
import Header from "../Header/Header";
import { list } from "../Data/data";
import "./DragableList.css";

function DragableItems() {
  const [items, setItems] = useState(list);

  //save reference for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  //const handle drag sorting
  const handleSort = () => {
    //duplicate items
    let ItemsSort = [...items];

    //remove and save the dragged item content
    const draggedItemContent = ItemsSort.splice(dragItem.current, 1)[0];

    //switch the position
    ItemsSort.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setItems(ItemsSort);
    console.log(ItemsSort);
  };

  //Sorting Items By Order
  //Assending
  const sortingItemsAscending = () => {
    const ascendingItems = [...items];
    ascendingItems.sort((a, b) => a.order - b.order);
    setItems(ascendingItems);
  };

  // Dessending
  const sortingItemsDescending = () => {
    const descendingItems = [...items];
    descendingItems.sort((a, b) => b.order - a.order);
    setItems(descendingItems);
  };

  return (
    <div className="container">
      <Header
        ascendingbuttonClick={() => sortingItemsAscending}
        descendingbuttonClick={() => sortingItemsDescending}
      />
      <div className="list-container">
        {items?.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <ListContainer order={item.order} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragableItems;
