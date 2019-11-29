var numberOfData = 9;
for (var i = numberOfData; i > 0; i--) {
  var form = $("#input1").prepend(`<div class="row">
<div class="col">
<div class="form-group">
<label for="x${i}">x${i}</label>
<input
type="text"
class="form-control"
id="x${i}"
name="x${i}"
/>
</div>
</div>
<div class="col">
<div class="form-group">
<label for="y${i}">y${i}</label>
<input
type="text"
class="form-control"
id="y${i}"
name="y${i}"
/>
</div>
</div>
</div>`);
}



var ctx = document.getElementById("scatterChart");
var scatterChart = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Data",
        showLine: true
      }
      // {
      //     label: "second",
      //     showLine: true,
      //     data: [
      //         {
      //             y: 5,
      //             x: 0
      //         }
      //     ]
      // }
    ]
  },
  options: {
    // annotation: {
    //     drawTime: "afterDraw",
    //     events: ["dblclick"],
    //     annotations: [
    //         {
    //             type: "line",
    //             mode: "horizontal",
    //             scaleID: "y-axis-1",
    //             value: 4,
    //             borderColor: "rgba(255, 0, 0, 0.5)",
    //             borderWidth: 4,
    //             label: {
    //                 enabled: false,
    //                 content: "Test label"
    //             }
    //         }
    //     ]
    // },
    scales: {
      xAxes: [
        {
          type: "linear",
          position: "bottom"
        }
      ]
    }
  }
});

function submit(e, id) {
  e.preventDefault();
  var data = [];
  for (var i = 1; i < numberOfData + 1; i++) {
    var x = $(`#x${i}`).val();
    var y = $(`#y${i}`).val();
    data.push({ x, y });
  }
  scatterChart.data.datasets[id - 1].data = data;
  // scatterChart.data.datasets.forEach(dataset => {
  //   console.log(dataset);
  //   dataset.data.push(data);
  // });
  scatterChart.update();
  // console.log(data);
}
$("#input1").submit(e => submit(e, 1));
// $("#input2").submit((e) => submit(e, 2));