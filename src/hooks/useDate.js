import { useState } from "react";

export const useDate = (rowDate) => {
    const [date, setDate] = useState({});
    if (rowDate) {
        let day = rowDate.split(".").splice(0, 2)[0];
        let month = rowDate.split(".").splice(0, 2)[1];

        if (month[0] === "0") {
            month = month.slice(1);
        }

        setDate({
            day: day,
            month: month,
        });

        return date;
    } else return false;
};
