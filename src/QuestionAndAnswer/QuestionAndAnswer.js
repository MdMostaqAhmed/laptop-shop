import React from "react";
import "./QuestionAndAnswer.css";

const QuestionAndAnswer = () => {
  return (
    <div className="question-answer">
      <p>
        <strong>What is Context API? How it works?</strong>
      </p>
      <p>
        <strong>Context API:</strong> In React Context API is a excellent tricks
        for a React app to make global variables and it can be passed around.
        Many times we need "prop drilling" for share data. Context API is the
        alternative of "prop drilling"; . We can move props from grandparent to
        child to parent, and so on. Context API is also s an easier, lighter
        approach to state management using React. This excellent feature added
        in version 16.3 of React. Context API allows one to share state across
        the entire app easily and effectively.
      </p>
      <p>
        <strong>How it works:</strong>
        Context API always returns a consumer and a provider. Here provider is
        used as component. Component's name suggests provide the state to its
        children. It holds the "store" and become a parent of all the components
        for which component may need this store.
      </p>{" "}
      <br /> <br />
      <p>
        <strong>What is the meaning of Semantic Tag?</strong>
      </p>
      <p>
        <strong>Semantic Tag</strong> : Semantic refers clear representaion. In
        coding, semantic tag indicates clearity and readibility of coding.
        Semantic elements indicate what they actually are, rather than how they
        may appear in the browser by default. Semantic refers the meaning tof
        web page rather than just presentation. For example, &nbsp;&lt;p&gt; tag
        indicates that the enclosed text is a paragraph. This is both semantic
        and presentational because people know what paragraphs are, and browsers
        know how to display them. On the other hand &nbsp;&lt;b&gt; tag and
        &lt;i&gt; tag are not semantic. They define only how the text should
        look (bold or italic), and don't provide any additional meaning.
      </p>
    </div>
  );
};

export default QuestionAndAnswer;
