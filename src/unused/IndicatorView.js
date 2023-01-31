import "./IndicatorView.css";

const indicators = [
  {
    id: "1",
    name: "Dummy Indicator 1",
  },
  {
    id: "2",
    name: "Dummy Indicator 2",
  },
];

const getList = (groupArr) => {
  return groupArr.map((el, index) => {
    return (
      <li key={index}>
        <Link to={`${el.id}`} className="item">
          {el.name}
        </Link>
      </li>
    );
  });
};

const IndicatorView = () => {
  return (
    <div>
      <h1>Indicators</h1>
      <ul>{getList}</ul>
    </div>
  );
};

export default IndicatorView;
