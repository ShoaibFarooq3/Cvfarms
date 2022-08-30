import React from "react";
import "../Assets/ProjectTracker.scss";
export const TrackerBar = (props) => {
  return (
    <>
     {props.Status=="Raising" ?
     <div className="Theme_Everberries">
        <ul class="progress-tracker progress-tracker--text progress-tracker--center">
          <li class="progress-step is-active">
            <div class="progress-marker"></div>
            <div class="progress-text">
              <h5 class="progress-title">Raising</h5>
            </div>
          </li>

          <li class="progress-step">
            <div class="progress-marker"></div>
            <div class="progress-text">
              <h5 class="progress-title">Pre Construction</h5>
            </div>
          </li>

          <li class="progress-step" aria-current="step">
            <div class="progress-marker"></div>
            <div class="progress-text">
              <h5 class="progress-title">Construction</h5>
            </div>
          </li>

          <li class="progress-step">
            <div class="progress-marker"></div>
            <div class="progress-text">
              <h5 class="progress-title">Build Out Complete</h5>
            </div>
          </li>

          <li class="progress-step">
            <div class="progress-marker"></div>
            <div class="progress-text">
              <h5 class="progress-title">Growing</h5>
            </div>
          </li>
        </ul>{" "}
      </div>
      :
     props.Status=="Pre Construction" ?
      <div className="Theme_Everberries">
      <ul class="progress-tracker progress-tracker--text progress-tracker--center">
        <li class="progress-step is-complete">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Raising</h5>
          </div>
        </li>

        <li class="progress-step is-active">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Pre Construction</h5>
          </div>
        </li>

        <li class="progress-step" aria-current="step">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Construction</h5>
          </div>
        </li>

        <li class="progress-step">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Build Out Complete</h5>
          </div>
        </li>

        <li class="progress-step">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Growing</h5>
          </div>
        </li>
      </ul>{" "}
    </div>
    :
    props.Status=="Construction" ?
    <div className="Theme_Everberries">
      <ul class="progress-tracker progress-tracker--text progress-tracker--center">
        <li class="progress-step is-complete">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Raising</h5>
          </div>
        </li>

        <li class="progress-step is-complete">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Pre Construction</h5>
          </div>
        </li>

        <li class="progress-step is-active" aria-current="step">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Construction</h5>
          </div>
        </li>

        <li class="progress-step">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Build Out Complete</h5>
          </div>
        </li>

        <li class="progress-step">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Growing</h5>
          </div>
        </li>
      </ul>{" "}
    </div>
    :
    props.Status=="Build Out Complete" ?
    <div className="Theme_Everberries">
      <ul class="progress-tracker progress-tracker--text progress-tracker--center">
        <li class="progress-step is-complete">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Raising</h5>
          </div>
        </li>

        <li class="progress-step is-complete">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Pre Construction</h5>
          </div>
        </li>

        <li class="progress-step is-complete" aria-current="step">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Construction</h5>
          </div>
        </li>

        <li class="progress-step is-active">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Build Out Complete</h5>
          </div>
        </li>

        <li class="progress-step">
          <div class="progress-marker"></div>
          <div class="progress-text">
            <h5 class="progress-title">Growing</h5>
          </div>
        </li>
      </ul>{" "}
    </div>:
    props.Status=="Growing" ?
    <div className="Theme_Everberries">
    <ul class="progress-tracker progress-tracker--text progress-tracker--center">
      <li class="progress-step is-complete">
        <div class="progress-marker"></div>
        <div class="progress-text">
          <h5 class="progress-title">Raising</h5>
        </div>
      </li>

      <li class="progress-step is-complete">
        <div class="progress-marker"></div>
        <div class="progress-text">
          <h5 class="progress-title">Pre Construction</h5>
        </div>
      </li>

      <li class="progress-step is-complete" aria-current="step">
        <div class="progress-marker"></div>
        <div class="progress-text">
          <h5 class="progress-title">Construction</h5>
        </div>
      </li>

      <li class="progress-step is-complete">
        <div class="progress-marker"></div>
        <div class="progress-text">
          <h5 class="progress-title">Build Out Complete</h5>
        </div>
      </li>

      <li class="progress-step is-active">
        <div class="progress-marker"></div>
        <div class="progress-text">
          <h5 class="progress-title">Growing</h5>
        </div>
      </li>
    </ul>{" "}
  </div>
  :
  <></>
    
      }
    </>
  );
};
