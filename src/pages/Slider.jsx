import React from 'react';
import { Container } from 'react-bootstrap';
import './Slider.css';
const Slider = () => {
    return (
      <Container>
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{
            height: "100vh",
            width: "100%",
            borderRadius: "0px",
            border: "none",
          }}
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active banners"
              data-bs-interval="5000"
            >
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100"
                alt="..."
              />
              <div className="overlaying">
                <h1>Experience the Joy of Cooking with Our Expert Chefs</h1>
                <p className="fw-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pulvinar nibh vel nisi pharetra, a fringilla dui tincidunt.
                </p>
                <small>
                  "Cooking is like love, it should be entered into with abandon
                  or not at all." - Harriet Van Horne
                </small>
              </div>
            </div>
            <div className="carousel-item banners" data-bs-interval="2000">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZvb2QlMjBpbWVnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                alt="..."
              />
              <div className="overlaying">
                <h1>Experience the Joy of Cooking with Our Expert Chefs</h1>
                <p className="fw-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pulvinar nibh vel nisi pharetra, a fringilla dui tincidunt.
                </p>
                <small>
                  "Cooking is like love, it should be entered into with abandon
                  or not at all." - Harriet Van Horne
                </small>
              </div>
            </div>
            <div className="carousel-item banners">
              <img
                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGNvb2NraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                alt="..."
              />
              <div className="overlaying">
                <h1>Experience the Joy of Cooking with Our Expert Chefs.</h1>
                <p className="fw-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pulvinar nibh vel nisi pharetra, a fringilla dui tincidunt.
                </p>
                <small>
                  "Cooking is like love, it should be entered into with abandon
                  or not at all." - Harriet Van Horne
                </small>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Slider;