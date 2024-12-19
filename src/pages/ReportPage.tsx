import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/hooks/useAuth";
import { Button, DatePicker, notification, Space, Table } from "antd";
import { IReportData } from "../types/report.interface";
import moment from "moment";
import { useEffect, useState } from "react";
import { generateFetchDate, logOut } from "../utils/utils";

const ReportPage: React.FC = () => {

  const { RangePicker } = DatePicker;

  const { isAuth } = useAuth();
  const redirectLoginPage = useNavigate();
  const [dateRange, setDateRange] = useState<moment.Moment[]>([]);
  const [data, setData] = useState<IReportData[]>([]);
 
  useEffect(() => {
    if (data.length === 0) {
        const fetchData = generateFetchDate();
        setData(fetchData && fetchData.length > 0 ? fetchData : []);
    }
  }, [])

  const fetchData = () => {
    console.log(dateRange)
    if (dateRange === null || dateRange.length === 0) {
        notification.error({ message: 'Необходимо выбрать даты для формирования отчета' });
        return;
    }
    const fetchData = generateFetchDate(); 
    const selectedReport = fetchData.filter((item) => {
        if (dateRange.length === 0) return true;
        const startDate = dateRange[0].startOf('day').toISOString();
        const endDate = dateRange[1].endOf('day').toISOString();
        const itemDate = moment(item.date);
        return itemDate.isBetween(startDate, endDate, undefined, '[]');
    })
    setData(selectedReport);
  };
    
  const onDateRangeChange = (dates: moment.Moment[]): void => {
    setDateRange(dates);
  };

  const columns = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Кол-во входящих звонков',
      dataIndex: 'parameter1',
      key: 'parameter1',
    },
    {
      title: 'Кол-во исходящих звонков',
      dataIndex: 'parameter2',
      key: 'parameter2',
    },
    {
      title: 'Кол-во входящих заявок',
      dataIndex: 'parameter3',
      key: 'parameter3',
    },
    {
      title: 'Кол-во исходящих заявок',
      dataIndex: 'parameter4',
      key: 'parameter4',
    }
  ];

return isAuth.loggedIn ? (
    <div style={{ padding: '20px' }}>
        <h2 className="mb-2 text-s">Отчет</h2>
        <Space direction="vertical" className="mb-2">
            <RangePicker onChange={onDateRangeChange}/>
        </Space>
        <div className="flex justify-between">
                <Button type="primary" onClick={fetchData}>
                    Сформировать отчет
                </Button>
                <Button type="primary" onClick={() => logOut(redirectLoginPage)}>
                    Выйти из системы
                </Button>
            </div>
        <Table
            dataSource={data}
            columns={columns}
            style={{ marginTop: '20px' }}
        />
    </div> 
    ) : (
        <Navigate to="/login" />
    )
}

export default ReportPage;