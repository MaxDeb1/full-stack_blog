type Props = {
    cat: string
    setCat: (value: React.SetStateAction<string>) => void
}

const Categories = ({cat, setCat}: Props) => {
  const categories = ["art", "science", "technologie", "cinema", "design", "food"];
  return (
    <div className="item">
      <h1>Category</h1>
      {categories.map((category) => (
        <div className="cat">
          <input
            type="radio"
            checked={cat === category}
            name="cat"
            value={category}
            id={category}
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
};

export default Categories;
