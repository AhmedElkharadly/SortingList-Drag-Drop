import React, { useEffect, useRef, useState } from "react";
import ListContainer from "../ListContainer/ListContainer";
import Header from "../Header/Header";
import { list } from "../Data/data";
import "./DragableList.css";

function DragableItems() {
  const [items, setItems] = useState(list);

  useEffect(() => {
    console.log(items);
  }, [items]);

  //save reference for dragItem and dragOverItem
  const dragItem = useRef();
  const dragOverItem = useRef();

  //const handle drag sorting
  const handleSort = () => {
    //duplicate items
    let sortedItems = [...items];

    //remove and save the dragged item content
    const draggedItemContent = sortedItems.splice(dragItem.current, 1)[0];

    //switch the position
    sortedItems.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setItems(sortedItems);
    console.log(sortedItems);
  };

  //Sorting Items By Order
  const sortingItemsAssending = () => {
    const sortingItems = [...items];
    sortingItems.sort((a, b) => a.order - b.order);
    setItems(sortingItems);
  };
  const sortingItemsDessending = () => {
    const sortingItems = [...items];
    sortingItems.sort((a, b) => b.order - a.order);
    setItems(sortingItems);
  };

  return (
    <div className="container">
      <Header
        assendingbuttonClick={() => sortingItemsAssending}
        dessendingbuttonClick={() => sortingItemsDessending}
      />
      <div className="list-container">
        {items.map((item, index) => (
          <div
            key={index}
            className="list-item"
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
