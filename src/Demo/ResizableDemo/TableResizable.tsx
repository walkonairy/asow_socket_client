import React, {useState} from "react";
import {Table} from "antd";
import {resizeComponents} from "./ResizeableTitle";
import useResize from "./useResize";
import './index.css';

const TableResizable: React.FC = () => {

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 300,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 50,
      render: (text: string, record: any) => {
        return handleColumnWidth(text, 1)
      }
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

  const [resizableColumns] = useResize(columns);

  const data = Array.from({length: 30}, ((v, k) => ({id: k, name: `小${k}`, age: k})))

  function handleColumnWidth(text: any, index: number) {
    console.log(columns)
    let columnWidth = columns[index].width;
    if (columnWidth && columnWidth < 100 && index !== 0) {
      columnWidth = 100;
    }
    return (<span className={'ellipsisText'} style={{width: columnWidth}}>{text}</span>)
  }

  return (
    <div style={{padding: 60}}>
      <Table
        components={resizeComponents}
        bordered={true}
        rowKey={'id'}
        columns={resizableColumns}
        dataSource={data}
      />
    </div>
  )
}
export default TableResizable;
