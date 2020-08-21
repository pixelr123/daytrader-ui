import React from "react";
import { Wrapper } from "../../components/StyledComp";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-fluid">
      <Wrapper>
        <div className="row">
          <div className="col">
            <div className="home__heading text-bold mt-3">Overview</div>
            <div className="mt-1">
              <p>
                The Geronimo <sup>TM</sup> performance benchmark sample provides a
                suite of Apache developed workloads for characterizing performance
                of the Geronimo J2EE Application Server. The workloads consist of
                an end to end web application and a full set of primitives. The
                applications are a collection of Java classes, Java Servlets, Java
                Server Pages, Web Services, and Enterprise Java Beans built to
                open J2EE APIs. Together these provide versatile and portable test
                cases designed to measure aspects of scalability and performance.
            </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img
              src={require("../../assets/image/tradeOverview.png")}
              alt="Trading Overview"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text-center text-capitalize text-bold">
              DayTrader J2EE Components
          </div>
            <div className="text-center text-capitalize text-bold">
              Model-View-Controller Architecture
          </div>
            <div></div>
          </div>
          <div className="row">
            <div className="col">
              <div className="text-capitalize text-bold">DayTrader</div>
              <p>
                DayTrader is the Geronimo end-to-end benchmark and performance
                sample application. The new DayTrader benchmark has been
                re-designed and developed to cover Geronimo's significantly
                expanding programming model. This provides a real world workload
                driving Geronimo's implementation of J2EE 1.4 and Web Services
                including key Geronimo performance components and features.
            </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mt-2">
              <p>
                DayTrader's new design spans J2EE 1.4 including the new EJB 2.1
                component architecture, Message Driven beans, transactions
                (1-phase, 2-phase commit) and Web Services (SOAP, WSDL).
            </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text-capitalize text-bold mt-2">Primitives</div>
            <p className="">
              The <Link to="/primitives">Primitives</Link> provide a set of
              workloads to individually test various components of the Geronimo
              Application Server. The primitives leverage the DayTrader
              application infrastructure to test specific Geronimo J2EE
              components such as the servlet engine, JSP support, EJB Entitiy,
              Session and Message Driven beans, HTTP Session support and more.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div style={{ marginBottom: 72 }}>
              <p>
                Additional overview information is included in the
                <Link to="/faq"> FAQ</Link>
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
