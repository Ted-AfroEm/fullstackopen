const Total = ({ parts }) => {
  const total = parts.reduce(
    (sum, currentPart) => sum + currentPart.exercises,
    0
  );
  return <strong>Total of {total} exercises</strong>;
};

export default Total;
