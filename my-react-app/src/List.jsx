import PropTypes from "prop-types";

function List(props) {
  // fruits.sort((a,b)=>a.name.localeCompare(b.name));//alpha

  // const lowCalFruits = fruits.filter(fruit => fruit.calories<100); filter
  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));
  return (
    <div>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </div>
  );
}
List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "category",
  items: [],
};
export default List;
