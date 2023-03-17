import { useMemo } from "react";
import moment from "moment/moment";

type UseCurrentDate = () => string;

export const useCurrentDate: UseCurrentDate = () =>
    useMemo(() => moment().format("MMMM Do, YYYY"), []);
