import Menu from "../components/Menu";
import Layout from "./../layouts/layout";
import layout from "./../layouts/layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="hero min-h-screen bg-base-200 flex-auto">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default HomePage;
