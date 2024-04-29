import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

const loadTasks = async () => {
  // const response = await fetch("http://localhost:3000/api/tasks");
  // const data = await response.json();
  // console.log(data);
  // return data;

  const tasks = await prisma.task.findMany();
  console.log(tasks);
  return tasks;
};

// export const revalidate = 60;
export const dynamic = "force-dynamic";

const TasksPage = async () => {
  const tasks = await loadTasks();
  console.log("tasks", tasks);

  return (
    <div className="container mx-auto my-10">
      <h3>Tareas:</h3>
      <div className="my-20 grid grid-cols-3 col-span-2 gap-2 ">
        {tasks?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
