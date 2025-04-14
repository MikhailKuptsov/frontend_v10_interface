import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

  export default function HorizontalBarChart(){
    const data = [
      { month: 'менежмент', selfaudit: 50, audit_score: 75 },
      { month: 'подготовка к производству', selfaudit: 30, audit_score: 45 },
      { month: 'SF-m ручные операции', selfaudit: 80, audit_score: 90 },
      { month: 'SF-e оборудование', selfaudit: 60, audit_score: 85 },
    ];
  
    return (
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="month" />
            <Tooltip />
            <Legend />
            <Bar dataKey="selfaudit"  fill="#8884d8" barSize={20} />
            <Bar dataKey="audit_score" fill="#82ca9d" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  