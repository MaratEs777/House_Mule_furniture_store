import { useState } from "react";
import categoriObj from "../../utils/categoriObj"; // объект с категориями (utils)

function Categories(props) {
  const [categoriesName, setCategoriesName] = useState(categoriObj);

  return (
    <div className="categories">
      {categoriesName.categories.map((el) => (
        <div key={el.key} onClick={() => props.chooseCategori(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}

export default Categories;
