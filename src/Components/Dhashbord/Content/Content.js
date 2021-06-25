import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Content = ({ modalIsOpen, closeModal }) => {
     const { register,handleSubmit,formState: { errors }, } = useForm();
     const onSubmit = data => {
          const file = data.files[0];
           const formData = new FormData();
           formData.append("file", file);
           formData.append("name", data.title);
           formData.append("desc", data.description);
           fetch("http://localhost:5050/addService", {
             method: "POST",
             body: formData,
           })
             .then((res) => res.json())
             .then((data) => {
               if (data) {
                 alert("service image insert");
               }
               console.log(data);
             })
             .catch((error) => {
               console.error(error);
             });
     };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-around">
            <div className="mr-5 my-2">
              <input
                {...register("title", { required: true })}
                placeholder="service Title"
              />
              {errors.title && (
                <p className="text-danger">Title is required.</p>
              )}
            </div>
            <div className="my-2">
              <input type="file" {...register("files", { required: true })} />
              {errors.file && (
                <p className="text-danger">Image Insert is required.</p>
              )}
            </div>
          </div>
          <div>
            <textarea
              {...register("description", { required: true })}
              placeholder="service Title"
            />
            {errors.description && (
              <p className="text-danger">description is required.</p>
            )}
          </div>
          <div className="d-flex justify-content-end">
           
            <input type="submit" />
          </div>
         
        </form>
      </Modal>
    </div>
  );
};

export default Content;