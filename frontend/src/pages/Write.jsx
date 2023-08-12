import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value,setValue] = useState('');
  console.log(value);
  return (
    <div className="mt-5 flex gap-5">
      <div className="flex-[5]">
        <input
          className="border-2"
          type="text"
          name="title"
          placeholder="  Title"
        />
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="flex-[2]">
        <div>
          <h1>Publish</h1>
          <span>
            <b> Status:  </b> Draft
          </span>
          <span>
            <b> Visibility:  </b> Public
          </span>
        </div>
        <div>i2</div>
      </div>
    </div>
  );
};

export default Write;
