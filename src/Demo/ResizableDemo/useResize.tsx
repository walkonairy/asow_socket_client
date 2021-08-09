import {useEffect, useRef, useState} from "react";

export default function useResize(propsColumns: any[]) {
  const [columns, setColumns] = useState<any[]>([]);
  const modelStatusRef = useRef<any[]>([]);

  useEffect(() => {
    let columns = propsColumns;

    columns = columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column: any) => ({
        width: column.width,
        onResize: handleResize(index),
      }),
    }));
    setColumns(columns);
  }, []);

  useEffect(() => {
    modelStatusRef.current = columns;
  }, [columns]);

  const handleResize = (index: number) => (e: any, {size}: any) => {
    const nextColumns = [...modelStatusRef.current];
    nextColumns[index] = {
      ...nextColumns[index],
      width: size.width,
    };
    setColumns(nextColumns);
  };

  return [columns];
}

