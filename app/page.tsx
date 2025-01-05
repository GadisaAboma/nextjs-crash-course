import Hello from "./components/hello";

export default function Home() {
  console.log("what am i doing here, Server/Client?");
  return (
    <>
      <h1 className="text-3xl">Welcome there</h1>
      <Hello />
    </>
  );
}
