function DessertsList(props) {
  const list = props.data;
  const listItems = list.filter((item) => item.calories < 500);
  const itemList = listItems.map((item) => ( 
    <li>
      {item.name}: {item.calories}
    </li>
  ));
  console.log(listItems)

  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
}

export default DessertsList;
