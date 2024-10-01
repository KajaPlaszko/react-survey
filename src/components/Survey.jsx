import { useState } from "react";
import AnswersItem from "./AnswersItem";
import { Form } from "./Form";

function Survey() {
  const [answers, setAnswers] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 

  const handleFormSubmit = (newAnswer) => {
    if (editIndex !== null) {
      const updatedAnswers = answers.map((answer, index) =>
        index === editIndex ? newAnswer : answer
      );
      setAnswers(updatedAnswers);
      setEditIndex(null); 
    } else {
      setAnswers([...answers, newAnswer]);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <main className="survey">
      <section className="survey__list">
        <h2>Answers list</h2>
        <ul>
          {answers.map((answer, index) => (
            <AnswersItem
              key={index}
              answerItem={answer}
              onEdit={() => handleEdit(index)}
            />
          ))}
        </ul>
      </section>
      <section className="survey__form">
        <Form onSubmit={handleFormSubmit} initialData={editIndex !== null ? answers[editIndex] : null} />
      </section>
    </main>
  );
}

export default Survey;