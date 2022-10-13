import React from 'react'
//React Element

//with jsx
//const title = <h1>Hello React js</h1>

//const title = React.createElement("h1", null, 'React')

//React component
const Title = () => <h1>Hello React component</h1>
const List = () => {
    let a = 10
    return (
        <React.Fragment><ul>
            <li>list 1 {a + 1}</li>
            <li>list 2</li>
            <li>list 3</li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id, accusamus deleniti debitis esse eaque iste sunt laudantium deserunt nostrum quis magnam quasi illum animi vitae nobis omnis! Dolores, omnis?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic adipisci ut, atque omnis laudantium alias distinctio, dolorem, doloribus ad quod dignissimos? Quos sapiente necessitatibus voluptates, iusto ut corporis tempora itaque repudiandae blanditiis, aspernatur voluptatem odit sequi exercitationem commodi ea esse expedita? Accusamus temporibus fugiat vero facilis quasi asperiores ipsam, impedit porro doloremque doloribus veniam quod ullam dolore laudantium fugit, ducimus eaque magni hic. Atque suscipit assumenda minima sequi omnis veritatis, consectetur doloremque rerum numquam blanditiis, alias vel neque praesentium corporis, esse debitis! Sint, accusamus. Quas veritatis voluptatibus assumenda corporis impedit minus! Eligendi quod minus dolor at nisi cumque veritatis.
        </p>
        </React.Fragment>
    )
}
function App() {
    return (
        <div className="App">
            <Title /> <List />
        </div>
    )
}

export default App
