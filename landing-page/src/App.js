import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Our Landing Page</h1>
          <p className="lead">Boost your product or service with a stunning page!</p>
          <a href="#features" className="btn btn-light btn-lg mt-3">
            Learn More
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Features</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="bi bi-lightning-charge-fill display-4 text-primary"></i>
              <h4 className="mt-3">Fast Performance</h4>
              <p>We ensure your page loads quickly and efficiently.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-phone display-4 text-primary"></i>
              <h4 className="mt-3">Responsive Design</h4>
              <p>Looks great on all devices, from phones to desktops.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-check-circle-fill display-4 text-primary"></i>
              <h4 className="mt-3">Easy to Customize</h4>
              <p>Simple and clean code you can edit to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-5 text-white bg-dark">
        <div className="container text-center">
          <h2 className="mb-4">Subscribe to Our Newsletter</h2>
          <form className="row justify-content-center">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary w-100">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-light">
        <p className="mb-0">© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
