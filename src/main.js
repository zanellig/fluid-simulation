import "./style.css";

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

const RECTANGLE_DIMENSIONS = {
  w: 20,
  h: 20,
};
const H_RECTANGLES = CANVAS_WIDTH / RECTANGLE_DIMENSIONS.w;
const V_RECTANGLES = CANVAS_HEIGHT / RECTANGLE_DIMENSIONS.h;

const app = document.querySelector("#app");
app.innerHTML = `
  <canvas height="${CANVAS_HEIGHT}" width="${CANVAS_WIDTH}">
  </canvas>
`;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let grid = [];

function drawRectangles() {
  let xOffset = 0;
  let yOffset = 0;
  for (let x = 0; x < H_RECTANGLES; x++) {
    let line = [];
    xOffset = x * RECTANGLE_DIMENSIONS.w;
    for (let y = 0; y < V_RECTANGLES; y++) {
      yOffset = y * RECTANGLE_DIMENSIONS.h;
      let isPainted = false;
      if ((x + y) % 2 === 0) {
        isPainted = true;
        ctx.fillStyle = "#fff";
      } else {
        isPainted = false;
        ctx.fillStyle = "#000";
      }
      // Updates the state
      line.push({
        x: xOffset,
        y: yOffset,
        isPainted,
      });
      // Draws the rectangle
      ctx.fillRect(
        xOffset,
        yOffset,
        RECTANGLE_DIMENSIONS.w,
        RECTANGLE_DIMENSIONS.h
      );
    }
    grid.push(line);
  }
}

drawRectangles();

console.log(grid);

/*
  [
    [{x: Number, y: Number, isPainted: Boolean}]
  ]
*/

/*

  WIDTH = 5
  HEIGH = 5
  <canvas>
  [
    [<Empty></Empty>, <Empty></Empty>, <Empty></Empty>, <Empty></Empty>, <Empty></Empty> ],
    [<Empty></Empty>, <Empty></Empty>, <Empty></Empty>, <Empty></Empty>, <Empty></Empty> ],
    [<Empty></Empty>, <Empty></Empty>, <Empty></Empty>, <Empty></Empty>, <Empty></Empty> ],
    [<Empty></Empty>, <Empty></Empty>, <Empty></Empty>, <Empty></Empty>, <Empty></Empty> ],
    [<Empty></Empty>, <Empty></Empty>, <Empty></Empty>, <Empty></Empty>, <Empty></Empty> ],
  ]
  </canvas>
*/
