export const Balance = ({ balance }: { balance: number }) => {
  return (
    <div
      className={`text-2xl font-bold ${
        Number(balance.toFixed(2)) < 0 ? "text-red-500" : "text-green-500"
      }`}
    >
      ${balance.toFixed(2)}
    </div>
  );
};
