import ReactDOM from "react-dom/client";

function Welcome(props){
    return <h1>Selamat datang {props.nama} </h1>;
}

function Home(){
    return <button>Login</button>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Welcome nama="Muzayyin"/>
    </>
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(
    <>
        <Home />
    </>
);
