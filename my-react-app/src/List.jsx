function List(){
    const fruits =[{id:1, name:"orange", cal:95},
                    {id:1, name:"sapota",cal:45},
                    {id:1, name:"apple",cal:105},
                    {id:1, name:"papaya",cal:159},
                    {id:1, name:"mango",cal:37},
                    {id:1, name:"guava",cal:34},
                    {id:1, name:"banana",cal:28}];
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); // alphabetical order
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); //reverse alphabetical order
       //fruits.sort((a,b) => a.cal - b.cal); //numerical sorting 
       //fruits.sort((a,b) => b.cal - a.cal);  // reverse numerical
       

       //const lowCal =fruits.filter(fruit => fruit.cal < 100)
       const highCal =  fruits.filter(fruit => fruit.cal >= 100);
    
    const  listItems = highCal.map(fruit => <li key={fruit.id}>
                                             {fruit.name}:&nbsp;
                                             <b>{fruit.cal}</b>
                                            </li>);
    return(<ul>{listItems}</ul>);
}

export default List