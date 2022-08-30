import "../Assets/MovableDiv.css";
import gsap from "gsap";
import $ from "jquery";

export const MovableDiv = () => {
  var $circle = $("#circle"),
    $wrapper = $("#wrapper");

  function moveCircle(e) {
    var element = document.getElementById('box');
    var position = element.getBoundingClientRect();
    var x = position.left;
    var y = position.top;
    gsap.to($circle, 0.3, {
      css: {
        left: e.pageX,
        top: e.pageY-((90 / 100) * e.pageY)
      }
    });
  }
 
  var flag = false;
  $($wrapper).mouseover(function () {
    flag = true;
    gsap.to($circle, 0.4, { scale: 1, autoAlpha: 1 });
    $($wrapper).on("mousemove", moveCircle);
  });
  $($wrapper).mouseout(function () {
    flag = false;
    gsap.to($circle, 0.4, { scale: 1, autoAlpha: 1 });
    // gsap.to($circle, 0.3, {
    //     css: {
    //       left: 286,
    //       top: 25
    //     }
    //   });
  });

  return (
    <div id="box" >
      <div id="wrapper" className="">
        <h1>
          <span>
            Our food problem has an energy solution.
            <br />
            Vertically integrate food and energy.
            <br />{" "}
          </span>
        </h1>
      </div>
      <div className="circle" id="circle"></div>
    </div>
  );
};
