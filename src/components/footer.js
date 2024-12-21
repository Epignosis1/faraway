export default function Footer({ itemName }) {
  const itemCount = itemName.length;
  const itemPacked = itemName.filter((item) => item.packed).length;

  const percentage = Math.round((itemPacked / itemCount) * 100);

  return (
    <div className="footer">
      {percentage === 100 ? (
        <p>You got everything ready to go</p>
      ) : (
        <p>
          🧳 You have {itemCount} items on your list, and you already packed{" "}
          {itemPacked}({percentage}%)
        </p>
      )}
    </div>
  );
}
