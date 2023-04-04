import { Layout } from "antd";
import { CSSProperties } from "react";
import Crossword from "./components/Crossword";
const { Header, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout style={{ background: "gray" }}>
        <Header className="header">Математический кроссворд</Header>
        <Content className="main">
          <Crossword />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
