
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
    "h1",
    null,
    "Hello From ReactJS using Core React"
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading1);



const root2 = ReactDOM.createRoot(document.getElementById("root2"));

// const heading2 = <h1>Hello From ReactJS But Using JSX.</h1>;
// root2.render(heading2);

const TitleCompo = ()=>{
    return (
        <div>
            <h1>I'm A Title Component.</h1>
        </div>
    )
}
console.log({TitleCompo});
console.log(TitleCompo);


const head = <h1>I'm a head react element created with JSX</h1>;

const Main = ()=>(
    <div>
        {head}
        {/* {TitleCompo}  It will not get rendered, it will be treated as some variable*/}
        {TitleCompo}
        {<TitleCompo/>}
        {<TitleCompo></TitleCompo>}
        {TitleCompo()}
    </div>
)

// root2.render(<TitleCompo/>);
root2.render(<Main></Main>);

/**
 That's correct. In React, when you want to include a functional component as a child within JSX, you need to use the JSX syntax `<Component />` to represent the actual component. 

Directly using the function without the JSX syntax, like `{TitleCompo}`, will be treated as a JavaScript expression, and functions are not valid React children.

So, the key takeaway is to always use the correct JSX syntax when including functional components as children in React. Use `<Component />` to represent the component and ensure it gets properly rendered.
 */