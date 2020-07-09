import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronCircleRight } from "react-icons/fa";
import { CardComponent } from "../../../styles";

export default function Card({ color, intl }) {
    const card = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: card.current,
                toggleActions: "restart none restart none",
            },
        });
        tl.fromTo(
            card.current,
            1,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1 },
            0.6
        );
    }, []);
    return (
        <CardComponent ref={card} color={color}>
            <h3 className="packages__offert--advanced-header packages__offert--card-header">
                Advanced
            </h3>
            <div className="packages__offert--card-price">
                <h6>
                    <sup>&euro;</sup> 59{" "}
                    <sub>
                        {intl.formatMessage({ id: "websitesPackagesPeriod" })}*
                    </sub>
                </h6>
            </div>
            <ul className="packages__offert--card-list packages__offert--advanced-list">
                <li>
                    <FaChevronCircleRight
                        style={{
                            marginRight: "1rem",
                            color,
                        }}
                        className="packages__offert--advanced-list-icon"
                    />{" "}
                    {intl.formatMessage({ id: "websitesPackagesAdvanced1" })}
                </li>
                <li>
                    <FaChevronCircleRight
                        style={{
                            marginRight: "1rem",
                            color,
                        }}
                        className="packages__offert--advanced-list-icon"
                    />{" "}
                    {intl.formatMessage({ id: "websitesPackagesAdvanced2" })}
                </li>
                <li>
                    <FaChevronCircleRight
                        style={{
                            marginRight: "1rem",
                            color,
                        }}
                        className="packages__offert--advanced-list-icon"
                    />{" "}
                    {intl.formatMessage({ id: "websitesPackagesAdvanced3" })}
                </li>
                <li>
                    <FaChevronCircleRight
                        style={{
                            marginRight: "1rem",
                            color,
                        }}
                        className="packages__offert--advanced-list-icon"
                    />{" "}
                    {intl.formatMessage({ id: "websitesPackagesAdvanced4" })}
                </li>
                <li>
                    <FaChevronCircleRight
                        style={{
                            marginRight: "1rem",
                            color,
                        }}
                        className="packages__offert--advanced-list-icon"
                    />{" "}
                    {intl.formatMessage({ id: "websitesPackagesAdvanced5" })}
                </li>
                <li>
                    <FaChevronCircleRight
                        style={{
                            marginRight: "1rem",
                            color,
                        }}
                        className="packages__offert--advanced-list-icon"
                    />{" "}
                    {intl.formatMessage({ id: "websitesPackagesAdvanced6" })}
                </li>
                <li>
                    <FaChevronCircleRight
                        style={{
                            marginRight: "1rem",
                            color,
                        }}
                        className="packages__offert--advanced-list-icon"
                    />{" "}
                    {intl.formatMessage({ id: "websitesPackagesAdvanced7" })}
                </li>
                <li>
                    <FaChevronCircleRight
                        style={{
                            marginRight: "1rem",
                            color,
                        }}
                        className="packages__offert--advanced-list-icon"
                    />{" "}
                    {intl.formatMessage({ id: "websitesPackagesAdvanced8" })}
                </li>
                <li>
                    <FaChevronCircleRight
                        style={{
                            marginRight: "1rem",
                            color,
                        }}
                        className="packages__offert--advanced-list-icon"
                    />{" "}
                    {intl.formatMessage({ id: "websitesPackagesAdvanced9" })}
                </li>
                <li>
                    <FaChevronCircleRight
                        style={{
                            marginRight: "1rem",
                            color,
                        }}
                        className="packages__offert--advanced-list-icon"
                    />{" "}
                    {intl.formatMessage({ id: "websitesPackagesAdvanced10" })}
                </li>
            </ul>
            <Link
                to="/contact"
                className="packages__offert--card-btn packages__offert--starter-btn"
            >
                {intl.formatMessage({ id: "websitesPackagesButton" })}
            </Link>
            <p className="packages__offert--card-sub">
                *{intl.formatMessage({ id: "websitesPackagesContract" })}
            </p>
        </CardComponent>
    );
}
