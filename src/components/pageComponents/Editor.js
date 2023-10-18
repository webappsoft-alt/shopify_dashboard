'use client'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

const Editor = ({
  value,
  onChange,
}) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      config={{
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
          '|',
          'imageTextAlternative',
          'imageUpload',
          'imageStyle:side',
          '|',
          'mediaEmbed',
          'insertTable',
          'tableColumn',
          'tableRow',
          'mergeTableCells',
          '|',
          'undo',
          'redo',
        ],
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  );
};

export default Editor;