"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import {musicSchoolContent} from "../data/music-school-content"
function WhyChooseUs() {
  return (
    <div className="p-10"><StickyScroll content ={musicSchoolContent}/></div>
  )
}

export default WhyChooseUs