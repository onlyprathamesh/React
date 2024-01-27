import React from "react";

export default function About() {
  return (
    <>
      <div id="accordion">
        <div class="card">
          <div class="card-header">
            <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
              Collapsible Group Item #1
            </a>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            data-bs-parent="#accordion"
          >
            <div class="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              accusamus voluptas ratione, sit quas perspiciatis illo architecto
              excepturi quam nostrum placeat fuga esse officia ipsam optio quod
              sed laudantium necessitatibus distinctio inventore? At, eveniet
              repudiandae.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseTwo"
            >
              Collapsible Group Item #2
            </a>
          </div>
          <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis blanditiis natus cumque itaque tempore culpa unde
              aperiam omnis? Reiciendis, beatae cum! In aliquam est recusandae
              praesentium, pariatur voluptatibus earum ratione temporibus unde
              quia vero rerum qui molestias aspernatur iure. Expedita assumenda,
              facere veritatis quidem dignissimos itaque ea odit corporis
              consectetur voluptatum quae. Aliquid et totam nisi!
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseThree"
            >
              Collapsible Group Item #3
            </a>
          </div>
          <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eius sequi quasi fugiat labore doloremque veritatis quas excepturi
              consequuntur. Nam ab incidunt nobis qui, fugiat laudantium ad odit
              laboriosam repellendus necessitatibus autem et! Laborum sequi
              delectus numquam autem ut illo accusantium explicabo consequatur
              error.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
