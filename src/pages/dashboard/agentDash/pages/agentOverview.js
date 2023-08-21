/*Display an overview of agent-specific activities and tasks.
Show statistics related to the number of clients, transactions, etc. */
import "../../agentDash/agent-dash-styles/agentdash.css";
import "../../layout/Sidebar/Sidebar";
import "../../layout/Content/Content";
import React from "react";
import Sidebar from "../../layout/Sidebar/Sidebar";
import Content from "../../layout/Content/Content";

const AgentOverviewPage = () => {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    </>
  );
};

export default AgentOverviewPage;
