import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.css";
import { FaAngellist } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Hihi from "../../components/Hihi";
const Timeline = props => {
  const contentStyles = {
    background:
      "linear-gradient(to right top, #dfdff8, #b4b2ef, #8c85e4, #6459d5, #3629c4)",
    color: "white"
  };

  return (
    <div className="wrapper1">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyles}
          contentArrowStyle={{ borderRight: "19px solid  rgb(33, 150, 243)" }}
          date="1/2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <FaAngellist
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.history.push("/haha");
              }}
            />
          }
        >
          <a href="/haha">
            <h2 className="vertical-timeline-element-title">
              Một lần là tình nguyện viên
            </h2>
            <h4 className="vertical-timeline-element-subtitle">
              <FiMapPin />
              Văn Chấn, Yên Bái
            </h4>
          </a>

          <p>
            Chuyến đi tình nguyện xa đầu tiên và có lẽ là cuối cùng ...
            {/* <img src={require("./image/1.jpg")} height="200" width="400" /> */}
            <Hihi></Hihi>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyles}
          date="2-2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaAngellist />}
        >
          <h2 className="vertical-timeline-element-title">Tết</h2>
          <h4 className="vertical-timeline-element-subtitle">
            <FiMapPin />
            Tiên lãng, Hải Phòng
          </h4>
          <p>Tết luôn có nhiều thứ thật đặc biệt ...</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyles}
          date="3/2019-6/2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h2 className="vertical-timeline-element-title">Kỳ cuối năm 2</h2>
          <h4 className="vertical-timeline-element-subtitle">
            <FiMapPin />
            Trường Đại học Công nghệ, ĐHQGHN
          </h4>
          <p>Một kỳ hơi thất bát</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="7/2019"
          contentStyle={contentStyles}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h2 className="vertical-timeline-element-title">
            Hè tới - xách balo và đi thôi
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            <FiMapPin />
            Ninh Bình, Thanh Hóa
          </h4>
          <p>Đi thăm nhà mấy đứa bạn cũ</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="8/2019-12/2019"
          contentStyle={contentStyles}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h2 className="vertical-timeline-element-title">Kỳ 1 năm 3</h2>
          <h4 className="vertical-timeline-element-subtitle">
            <FiMapPin />
            Trường Đại học Công nghệ, ĐHQGHN
          </h4>
          <p>làm được gì đâu nhỉ ?</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="12/2019"
          contentStyle={contentStyles}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h2 className="vertical-timeline-element-title">
            Tham gia thi Procon :D
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            <FiMapPin />
            Đà Nẵng
          </h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Hiện tại"
          contentStyle={contentStyles}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h2 className="vertical-timeline-element-title">Quá rảnh rỗi :))</h2>
          <h4 className="vertical-timeline-element-subtitle">
            <FiMapPin />
            Hà Nội
          </h4>
          <p>Được gái tán :v</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
