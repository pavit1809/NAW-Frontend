import * as React from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

export function SlickPrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick, customStyles } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        background: "#fff",
        width: "40px",
        height: "40px",
        left: "-65px",
        borderRadius: "50%",
        color: "#3670F8",
        ...customStyles,
      }}
      onClick={onClick}
      className={className}
    >
      <ArrowBack
        style={{
          position: "absolute",
          left: "20%",
          top: "20%",
        }}
      />
    </div>
  );
}

export function SlickNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick, customStyles } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        background: "#fff",
        width: "40px",
        height: "40px",
        right: "-45px",
        borderRadius: "50%",
        color: "#3670F8",
        ...customStyles,
      }}
      onClick={onClick}
      className={className}
    >
      <ArrowForward
        style={{
          position: "absolute",
          left: "20%",
          top: "20%",
        }}
      />
    </div>
  );
}