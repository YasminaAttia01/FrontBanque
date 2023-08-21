import "./Content.css";
import ContentTop from "../../agentDash/components/ContentTop/ContentTop";
import ContentMain from "../../agentDash/components/ContentMain/ContentMain";

const Content = () => {
  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain />
    </div>
  );
};

export default Content;
