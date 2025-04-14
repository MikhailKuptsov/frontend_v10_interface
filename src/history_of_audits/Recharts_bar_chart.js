//Recharts_Bar_char
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

const data = [
  { task: 'менеджмент', was: 2, became: 2 },
  { task: 'Подготовка производства', was: 1.75, became: 0.89 },
  { task: 'ОТиБ', was: 0.19, became: 1.3 },
  { task: 'Качество', was: 0.19, became: 1.3 },
  { task: 'Цепочка поставок', was: 0.19, became: 1.3 },
  { task: 'Техническое развитие', was: 0.19, became: 1.3 },
];

const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const fontSize = 20;
    const textAnchor = 'start'; // Выравнивание текста слева от точки
  
    return (
      <text
        x={x + width + 5} // Расположение текста снаружи столбца справа
        y={y + height / 2} // Вертикальное центрирование
        fill="#000" // Черный цвет текста
        textAnchor={textAnchor}
        dominantBaseline="middle"
        fontSize={fontSize}
      >
        {value}
      </text>
    );
  };

const Recharts_Bar_char = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{
          top: 5,
          right: 50,
          left: 50,
          bottom: 5,
        }}
        style={{fontSize:"16px"}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" domain={[0, 3]} tick={false} />
        <YAxis type="category" dataKey="task" />
        <Tooltip />
        <Legend />
        <Bar dataKey="became" 
        // ширина столбца
        barSize={30} fill="grey" name="Оценка аудита">
          <LabelList dataKey="became" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="was" 
        // ширина столбца
        barSize={30} fill="#1c3572" name="Самооценка завода">
          <LabelList dataKey="was" content={renderCustomizedLabel} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Recharts_Bar_char;