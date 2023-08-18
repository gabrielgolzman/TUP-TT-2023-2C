const DateRead = ({ dateRead }) => {
  const year = dateRead.getFullYear();
  const month = dateRead.toLocaleString("es-AR", { month: "long" });
  const day = dateRead.toLocaleString("es-AR", { day: "2-digit" });

  return (
    <>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </>
  );
};

export default DateRead;
