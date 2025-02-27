import Counter from "./Counter";
import Clock from "./Clock";

const App = () => {
  return (
    <div>
      <Counter initialValue={0} increment={1} />
      <Clock />
    </div>
  );
};

export default App;
