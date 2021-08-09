import React from "react";
import { Resizable } from "react-resizable";
import './index.css'


const ResizeableTitle = ({ onResize, width, ...restProps }) => {

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
