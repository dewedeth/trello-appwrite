"use client"

import { useBoardStore } from "@/store/BoardStore";

const types = [
  {
    id: "todo",
    name: "Todo",
    description: "A new task to be completed",
    color: "bg-red-500",
  },
  {
    id: "inprogress",
    name: "In Progress",
    description: "A task that is currently being worked on",
    color: "bg-yellow-500",
  },
  {
    id: "done",
    name: "Done",
    description: "A task that has been completed",
    color: "bg-green-500",
  },
];
function TaskTypeRadioGroup() {
  const [setNewTaskType, newTaskType] = useBoardStore((state) => [
    state.setNewTaskType,
    state.newTaskType,
  ])
  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-md">

      </div>
    </div>
  )
}

export default TaskTypeRadioGroup;
