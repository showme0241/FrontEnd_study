import useData from "./chapter04/useData";

function App() {
    const { isData } = useData();
    console.log(isData);

    return (
        <div className="App">
            {isData.map((it) => {
                return <p>{it.id}</p>;
            })}
        </div>
    );
}

export default App;
