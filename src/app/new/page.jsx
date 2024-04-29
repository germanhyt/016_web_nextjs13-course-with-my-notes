"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loadpage, setLoadpage] = useState(false);

  useEffect(() => {
    setLoadpage(true);
  }, []);

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [params]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const tarea = {
      title: form.title.value,
      description: form.description.value,
    };
    console.log(tarea);
    console.log(params);

    if (params.id) {
      const response = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(tarea),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      router.refresh();
      router.push("/tasks");
    } else {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tarea),
      });

      const data = await response.json();
      console.log(data);

      router.refresh();
      router.push("/tasks");
    }
  };

  return (
    <>
      {loadpage ? (
        <>
          <div className="h-screen flex justify-center items-center rounded-lg">
            <form
              className="bg-slate-800 p-10 flex flex-col gap-2 w-full max-w-md rounded-lg shadow-lg"
              onSubmit={onSubmit}
            >
              {params.id ? (
                <h1 className="mx-auto py-2text-2xl text-white">
                  Editar tarea
                </h1>
              ) : (
                <h1 className="mx-auto py-2text-2xl text-white">Nueva tarea</h1>
              )}
              <input
                className="border border-gray-400 p-2 w-full rounded-md text-black"
                type="text"
                name="title"
                id="title"
                placeholder="Título de la tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <textarea
                className="border border-gray-400 p-2 w-full rounded-md text-black"
                rows={3}
                type="text"
                id="description"
                name="description"
                placeholder="Descripción de la tarea"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <button className="bg-blue-500 hover:ng-700 text-white rounded-md">
                {params.id ? "Editar tarea" : "Crear tarea"}
              </button>
              {params.id && (
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white rounded-md"
                  onClick={async () => {
                    const response = await fetch(`/api/tasks/${params.id}`, {
                      method: "DELETE",
                    });
                    const data = await response.json();
                    console.log(data);

                    router.refresh();
                    router.push("/");
                  }}
                >
                  Eliminar tarea
                </button>
              )}
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default NewPage;
