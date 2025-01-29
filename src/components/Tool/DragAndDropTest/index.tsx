"use client";

import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "../SortableItem";

// Define types for the initial components and sections
type Component = { id: string; content: React.ReactNode };
type Section = "Header" | "Body" | "Footer"; // You can add more sections as needed

const initialComponents: Component[] = [
  { id: "1", content: <p>Title</p> },
  { id: "2", content: <p>Image</p> },
  { id: "3", content: <p>Button</p> },
];

const sections: Section[] = ["Header", "Body", "Footer"];

interface ToolboxItemProps {
  id: string;
  children: React.ReactNode;
}

const ToolboxItem: React.FC<ToolboxItemProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="p-2 bg-white text-black rounded shadow mb-2 cursor-move"
    >
      {children}
    </div>
  );
};

interface DroppableSectionProps {
  id: string;
  children: React.ReactNode;
}

const DroppableSection: React.FC<DroppableSectionProps> = ({ id, children }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="p-4 border-gray-300 min-h-[100px] border rounded mb-2"
    >
      <h4 className="font-bold mb-2">{id}</h4>
      {children}
    </div>
  );
};

const DragAndDropApp: React.FC = () => {
  const [canvasSections, setCanvasSections] = useState<
    Record<Section, Component[]>
  >(() => {
    return sections.reduce((acc, section) => {
      acc[section] = [];
      return acc;
    }, {} as Record<Section, Component[]>);
  });
  const [toolbox] = useState<Component[]>(initialComponents);
  const [activeItem, setActiveItem] = useState<Component | null>(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const item = toolbox.find((item) => item.id === active.id);
    if (item) setActiveItem(item);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveItem(null);
      return;
    }

    const section = over.id as Section;
    const draggedItem = toolbox.find((item) => item.id === active.id);

    if (draggedItem) {
      setCanvasSections((prev) => ({
        ...prev,
        [section]: [
          ...(prev[section] || []), // Ensure it's an array even if prev[section] is undefined
          { ...draggedItem, id: `${draggedItem.id}-${Date.now()}` },
        ],
      }));
    }

    setActiveItem(null);
  };

  const handleDelete = (section: Section, itemId: string) => {
    setCanvasSections((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== itemId),
    }));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-4 mt-15">
        <div className="toolbox p-4 bg-gray-100 w-1/3 text-black max-h-max">
          <h3 className="mb-4 font-bold">Toolbox</h3>
          {toolbox.map((item) => (
            <ToolboxItem key={item.id} id={item.id}>
              {item.content}
            </ToolboxItem>
          ))}
        </div>

        <div className="canvas flex-1 p-4 border-dashed border-2 min-h-[300px]">
          <h3 className="mb-4 font-bold">Canvas</h3>
          {sections.map((section) => (
            <DroppableSection key={section} id={section}>
              <SortableContext
                items={canvasSections[section].map((item) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                {canvasSections[section].map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-2 bg-white rounded shadow mb-2">
                    <SortableItem id={item.id}>{item.content}</SortableItem>
                    <button
                      onClick={() => handleDelete(section, item.id)}
                      className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </SortableContext>
            </DroppableSection>
          ))}
        </div>
      </div>

      <DragOverlay>
        {activeItem && (
          <div className="p-2 bg-white text-black rounded shadow">
            {activeItem.content}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default DragAndDropApp;
