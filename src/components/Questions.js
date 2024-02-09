const Questions = () => {
  return (
    <div className="container my-5 py-4" id="questions">
      <h2 className="text-center">Frequently Asked Questions</h2>
      <div className="accordion-flush mt-5 mx-lg-5">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {/* item 1 */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-one"
              >
                Where Exactly Are You Located
              </button>
            </h2>
            <div
              id="question-one"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                nesciunt suscipit voluptatum perspiciatis nulla sint fugiat
                voluptas ipsum quis eos corrupti. it amet consectetur suscipit
                voluptatum perspiciatis nulla sint fugiat voluptas ipsum quis
                eos corrupti. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. nesciunt suscipit voluptatum perspiciatis
                nulla sint fugiat voluptas ipsum quis eos corrupti. it amet
                consectetur suscipit voluptatum perspiciatis nulla sint fugiat
                voluptas ipsum quis eos corrupti. it amet consectetur suscipit
                voluptatum perspiciatis nulla sint fugiat voluptas ipsum quis
                eos corrupti. it amet consectetur
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-two"
              >
                How Much Does It Cost To Attend?
              </button>
            </h2>
            <div
              id="question-two"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                nesciunt suscipit voluptatum perspiciatis nulla sint fugiat
                voluptas ipsum quis eos corrupti. it amet consectetur suscipit
                voluptatum perspiciatis nulla sint fugiat voluptas ipsum quis
                eos corrupti. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. nesciunt suscipit voluptatum perspiciatis
                nulla sint fugiat voluptas ipsum quis eos corrupti. it amet
                consectetur suscipit voluptatum perspiciatis nulla sint fugiat
                voluptas ipsum quis eos corrupti. it amet consectetur suscipit
                voluptatum perspiciatis nulla sint fugiat voluptas ipsum quis
                eos corrupti. it amet consectetur
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-three"
              >
                What Do I Need To Know?
              </button>
            </h2>
            <div
              id="question-three"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                nesciunt suscipit voluptatum perspiciatis nulla sint fugiat
                voluptas ipsum quis eos corrupti. it amet consectetur suscipit
                voluptatum perspiciatis nulla sint fugiat voluptas ipsum quis
                eos corrupti. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. nesciunt suscipit voluptatum perspiciatis
                nulla sint fugiat voluptas ipsum quis eos corrupti. it amet
                consectetur suscipit voluptatum perspiciatis nulla sint fugiat
                voluptas ipsum quis eos corrupti. it amet consectetur suscipit
                voluptatum perspiciatis nulla sint fugiat voluptas ipsum quis
                eos corrupti. it amet consectetur
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-four"
              >
                How Do I Sign Up?
              </button>
            </h2>
            <div
              id="question-four"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                nesciunt suscipit voluptatum perspiciatis nulla sint fugiat
                voluptas ipsum quis eos corrupti. it amet consectetur suscipit
                voluptatum perspiciatis nulla sint fugiat voluptas ipsum quis
                eos corrupti. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. nesciunt suscipit voluptatum perspiciatis
                nulla sint fugiat voluptas ipsum quis eos corrupti. it amet
                consectetur suscipit voluptatum perspiciatis nulla sint fugiat
                voluptas ipsum quis eos corrupti. it amet consectetur suscipit
                voluptatum perspiciatis nulla sint fugiat voluptas ipsum quis
                eos corrupti. it amet consectetur
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
