function List(){
    const fruits =["orange","sapota","apple","papaya","mango","guava","banana"]
    fruits.sort();
    const listItems = fruits.map(fruit =>  <li>{fruit}</li>);
    return(<ul>{listItems}</ul>);
}

export default List