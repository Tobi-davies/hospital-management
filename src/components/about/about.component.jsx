import React from "react";
import BG from "../../assets/images/markus-winkler-AB4P_fPXirY-unsplash.jpg";

const About = () => {
  return (
    <div className="about">
      ABOUT PAGE
      <img src={BG} alt="hhh" />
      <p>
        While learning React, you probably have heard people talk about redux
        and you got curious to find out what the fuss is about. Chances are
        you've gone through tons of tutorials and articles but you only end up
        copy-pasting lines of code without understanding what is going on. Note:
        As at the time of writing this article, I am a learner and I am open to
        correction(s) on misrepresentation(s) of concepts discussed in this
        article or any future article. Thank you for understanding. Table of
        content Introduction What Is Redux? Why Redux In React? React App Setup
        Redux Proper Redux Basic Structure Actions Reducers Store Coding proper
        Summary Introduction What Is Redux? That is the first major question
        that needs an answer. Who is in a better position to answer other than
        Redux. As stated in their website, Redux is "A Predictable State
        Container for JS Apps". To put it in another way, It is a state
        management service that works for any JavaScript application and it
        maintains consistency in its state management patterns, thus
        predictable. Why Redux In React? In a typical React application, data is
        passed top-down (parent to child) via props. For simple applications,
        this may not be a major issue but when it comes to a fairly large
        application, passing state through numerous components will cause
        unnecessary re-rendering of components which affects performance. There
        are already several ways to maintain and pass down states in React
        without passing through several components. So why bother with Redux? As
        a beginner, a reason I can think of is that, Redux is not tied to React
        so its strength can be utilized in other JavaScript libraries and
        frameworks. With this introduction, let's get started. React App Setup
      </p>
    </div>
  );
};

export default About;
