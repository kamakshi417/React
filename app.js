const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hellow World From React");
        if(document.getElementById("root")){
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    }