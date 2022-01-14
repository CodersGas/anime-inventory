import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ErrorElement } from "./error-element";

export default function ImageDropzone({updateFile}) {
  const [previewFile, setPreviewFile] = useState(undefined);

  const {
    getRootProps,
    getInputProps,
    open,
    fileRejections
  } = useDropzone({
    maxFiles: 1,
    maxSize: 1024 * 1024 * 5, // 5MB
    accept: "image/*",
    onDrop: acceptedFiles => {
      updateFile(acceptedFiles[0]);
      setPreviewFile(URL.createObjectURL(acceptedFiles[0]));
    },
    noClick: true
  });

  const FilePreview = () => <img src={previewFile} />;

  const rejectedFiles = fileRejections.map(({ file, errors }) => {
    return (
      <>
        {
          errors[0].code === "file-too-large" &&
          <ErrorElement
            text={"File size should be less than 5MB"}
          />
        }
      </>
    )
  });

  return (
    <>
      <section className="text-center" >
        {
          !previewFile &&
          <div {...getRootProps({ className: 'dropzone h-48 mb-2 text-center flex items-center justify-center border-dashed border-2 border-indigo-600 dark:border-slate-100 dark:text-white cursor-disabled' })}>
            <p>Selected Image will be visible here</p>
          </div>
        }
        <div className="flex justify-center flex-col items-center" >
          <FilePreview />
          <div {...getRootProps()} >
            <input {...getInputProps()} />
            <button
              type="button"
              onClick={open}
              className="mr-4 py-2 px-4 mt-4 w-48
                rounded-full border-0
                text-sm font-semibold
                bg-violet-50 text-violet-700
                hover:bg-violet-100"
            >
              {!previewFile ? "Add Image" : "Change"}
            </button>
          </div>
        </div>
        <div className="mt-2" >
          {rejectedFiles}
        </div>
      </section>
    </>
  );
}