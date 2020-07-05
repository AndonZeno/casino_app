import React from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck } from "react-bootstrap"

import prev from "../../images/prev.png"
import next from "../../images/next.png"

const CardBox = () => {
  return (
    <div className="container">
      <CardDeck style={{ position: "relative" }}>
        <img
          src={prev}
          alt="Previous"
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            left: "-50px",
            top: "50%",
            cursor: "pointer"
          }}
        />

        <CardComponent
          playButton={true}
          newItem={true}
          tagColor={"#262626"}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          fontColor={"white"}
          imageHeight={"75%"}
          height={"250px"}
        />
        <CardComponent
          playButton={true}
          tagColor={"#262626"}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          fontColor={"white"}
          imageHeight={"75%"}
          height={"250px"}
        />

        {/* {wrap every 2 on sm} */}
        <div class="w-100 d-none d-sm-block d-md-none"></div>

        <CardComponent
          playButton={true}
          tagColor={"#262626"}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          fontColor={"white"}
          imageHeight={"75%"}
          height={"250px"}
        />
        {/* {wrap every 3 on md} */}
        <div class="w-100 d-none d-md-block d-lg-none"></div>
        {/* {wrap every 3 on lg} */}
        <div class="w-100 d-none d-lg-block d-xl-none"></div>

        <CardComponent
          playButton={true}
          tagColor={"#FFDB45"}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          fontColor={"white"}
          imageHeight={"75%"}
          height={"250px"}
        />
        {/* {wrap every 2 on sm} */}
        <div class="w-100 d-none d-sm-block d-md-none"></div>

        <CardComponent
          newItem={true}
          playButton={true}
          tagColor={"#262626"}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          fontColor={"white"}
          imageHeight={"75%"}
          height={"250px"}
        />

        <CardComponent
          playButton={true}
          tagColor={"#262626"}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          fontColor={"white"}
          imageHeight={"75%"}
          height={"250px"}
        />
        <img
          src={next}
          alt="next"
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            right: "-50px",
            top: "50%",
            cursor: "pointer"
          }}
        />
      </CardDeck>
    </div>
  )
}

export default CardBox