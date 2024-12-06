interface BalanceProps {
  balance: number;
  className?: string;
}

export const Balance = ({ balance, className }: BalanceProps) => {
  return (
    <div
      className={`font-bold ${className} ${
        Number(balance.toFixed(2)) < 0 ? "text-red-500" : "text-green-500"
      }`}
    >
      ${balance.toFixed(2)}
    </div>
  );
};
