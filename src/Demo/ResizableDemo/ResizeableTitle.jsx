import React from "react";
import { Resizable } from "react-resizable";
import './index.css'


const ResizeableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  console.log(width)
  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={e => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>

  );
};

export const resizeComponents = {
  header: {
    cell: ResizeableTitle
  }
}
