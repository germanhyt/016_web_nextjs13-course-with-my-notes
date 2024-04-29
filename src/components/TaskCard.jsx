"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TaskCard = ({ task }) => {
  const router = useRouter();
  const [loadpage, setLoadpage] = useState(false);

  useEffect(() => {
    setLoadpage(true);
  }, []);

  return (
    <>
      {loadpage ? (
        <>
          <div
            key={task.id}
            onClick={() => {
              router.refresh();
              router.push("/tasks/edit/" + task.id);
            }}
            className="bg-black text-white px-2 py-1 rounded-lg "
          >
            <h3 className="font-bold"> Titulo: {task.title}</h3>
            <p>Descripcion: {task.description}</p>
            <p>Fecha: {new Date(task.createdAt).toLocaleDateString()}</p>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TaskCard;
