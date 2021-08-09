import React, {useEffect, useRef, useState} from "react";
import {Table} from "antd";
import {resizeComponents} from "./ResizeableTitle";

const TableResizable: React.FC = () => {

  const [columns, setColumns] = useState<any[]>([]);
  const modelStatusRef = useRef<any>(null);

  useEffect(() => {
    let columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        width: 300,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        width: 300,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        width: 400,
      },
      {
        title: 'Extra',
        dataIndex: 'extra',
        // width: 400,
      },
    ]

    columns = columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column: any) => ({
        width: column.width,
        onResize: handleResize1(index),
      }),
    }));
    setColumns(columns);
  }, []);

  useEffect(() => {
    // 每次 更新 把值 复制给 modelStatusRef
    modelStatusRef.current = columns;
  }, [columns]); // 依赖的值 等modelStatus 改变了 才出发里面的值

  const handleResize1 = (index: any) => (e: any, {size}: any) => {
    const nextColumns = [...modelStatusRef.current];
    nextColumns[index] = {
      ...nextColumns[index],
      width: size.width,
    };
    setColumns(nextColumns);
  };

  const data = Array.from({length: 30}, ((v, k) => ({id: k, name: `小${k}`, age: k})))


  return (
    <div style={{padding: 60}}>
      <Table
        components={resizeComponents}
        bordered={true}
        rowKey={'id'}
        // scroll={{x: clientWidth}}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}
export default TableResizable;
