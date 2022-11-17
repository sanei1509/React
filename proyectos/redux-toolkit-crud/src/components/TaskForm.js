import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todos/todosSlice";
import { v4 as uuid } from "uuid";

export const TaskForm = () => {
  const dispatch = useDispatch();

  //FORMIK
  const BaseForm = {
    tarea: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // dispatch(addTask(values.tarea));
    // El PARAMETRO ES EL PAYLOAD CON EL QUE VAMOS A SOBRESCIIBR EL ESTADO
    values.id = uuid();
    values.state = false;
    dispatch(addTask(values));

    resetForm();
  };

  //END FORMIK THINGS

  return (
    <div>
      <h2>Agregar Tarea</h2>
      <Formik initialValues={BaseForm} onSubmit={handleSubmit}>
        <Form>
          <Field name="tarea" type="text" />
          <ErrorMessage name="tarea" />
          <button type="submit">Agregar</button>
        </Form>
      </Formik>
    </div>
  );
};
