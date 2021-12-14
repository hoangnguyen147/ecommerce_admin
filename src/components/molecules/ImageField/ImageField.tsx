import React from 'react';
import './styles.css';

interface IProps {
  name: string;
  value: string;
  onChange: any;
  url: string;
}

export const ImageField = ({ value, onChange, name, url, ...props }: IProps) => {
  return (
    <div className="wrapper">
      <input id={name} name={name} onChange={onChange} type="file" hidden={true} accept="image/*" />
      <div>
        <label htmlFor={name}>
          <div className="preview-img">
            {value ? <img alt="preview-image" width="100%" height="100%" src={url} /> : <div className="preview-label">+</div>}
          </div>
        </label>
      </div>
    </div>
  );
};
