export default async function Todos() {
  const res = await fetch("http://localhost:3000/api/todos");
  const data = await res.json();
  type todo = {
    id: string;
    title: string;
    isCompleted: boolean;
  };
  return (
    <>
      <div className="max-w-2xl mx-auto px-10">
        <h1 className="uppercase text-3xl text-green-400 text-center font-bold">
          this is todos home page
        </h1>
        {data.map((item: todo) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </div>
    </>
  );
}
