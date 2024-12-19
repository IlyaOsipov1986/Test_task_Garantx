import { NavigateFunction } from "react-router-dom";
import { IReportData } from "../types/report.interface";
import moment from "moment";

export function logOut(redirectLoginPage: NavigateFunction) {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        localStorage.removeItem('data');
        redirectLoginPage('/login', {replace: true });
    }
}

export function generateFetchDate() {
    const newData: IReportData[] = [];
    for (let i = 1; i <= 100; i++) {
      newData.push({
        key: i,
        date: moment().subtract(i, 'days').format('YYYY-MM-DD'),
        parameter1: Math.floor(Math.random() * 100),
        parameter2: Math.floor(Math.random() * 100),
        parameter3: Math.floor(Math.random() * 100),
        parameter4: Math.floor(Math.random() * 100)
      });
    }
    return newData;
}