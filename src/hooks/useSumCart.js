import { useEffect, useState } from "react";

export function useSumCart(items) {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const sumItems = items.reduce((curr, next) => {
      return curr + Number(next.price);
    }, 0);
    setSum(sumItems);
  }, [items]);
  return sum;
}