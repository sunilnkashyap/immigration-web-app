import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { HeadingText, SubHeadingText, Paragraph } from "../../Typography";
import { Link } from "react-router-dom";
import { PracticeAreasAside } from "./PracticeAreasAside";

export const AsylumContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <section
      className="two-clm-lyt lt-bg pd_v rsp_opn-tp rsp_opn-bt"
      id="TwoColumnLayoutAlt"
    >
      <div className="mn_wd rsp_pd flx-ato-rsp-mgd f_sb f_rev rsp_opn-tp">
        <div className="hlf-big cnt-zn" id="ContentZone">
          <div className="cnt-stl" id="MainContent" data-content="true">
            <h1>Anaheim Asylum Attorney</h1>
            <h2>
              Stay Safely in the United States with Law Offices of Fady Eskandar
            </h2>
            <p className="MsoNormal">
              Many people come to the United States seeking protection because
              they have suffered persecution or feel that they will suffer
              persecution. Asylum is a form of protection available to
              qualifying individuals and families who are already in the United
              States or seeking admission at a port of entry.
            </p>
            <p className="MsoNormal">
              Law Offices of Fady Eskandar can help you and your family apply
              for asylum at the border or upon entering the United States. Our
              Anaheim asylum lawyer is located near the border cities of San
              Diego, California, and Tijuana, Mexico, and he can help you
              regardless of your country of origin or current immigration
              status.
            </p>
            <hr />
            <p className="MsoNormal" style={{ textAlign: "center" }}>
              <strong>
                For assistance with your asylum application from an attorney who
                has been through the immigration process, please call our firm
                at{" "}
              </strong>
              <a href="tel:(714) 909-2127" id="MainContent_1">
                <strong>(714) 909-2127</strong>
              </a>
              <strong>.</strong>
            </p>
            <hr />
            <h3>Who Qualifies for Asylum?</h3>
            <p className="MsoNormal">
              Asylum is a form of protection available to people who cannot
              return to their countries because they fear serious harm.
              <strong>
                If they return home, they can face persecution due to:
              </strong>
            </p>
            <ul>
              <li>Race</li>
              <li>Religion</li>
              <li>Nationality</li>
              <li>Political opinion</li>
              <li>Membership in a particular social group</li>
            </ul>
            <p className="MsoNormal">
              Recognized social groups include the LGBTQ community, women facing
              domestic violence, forced marriage, or female genital mutilation;
              and victims of human trafficking or other crimes.
            </p>
            <h3>What Is the Difference Between Asylum and Refugee Status?</h3>
            <p className="MsoNormal">
              You can only apply for asylum if you are already in the United
              States or seeking admission at a point of entry. Meanwhile, you
              can only seek a referral for refugee status from outside the
              United States.
            </p>
            <p className="MsoNormal">
              Both asylum and refugee status are
              <a href="https://www.immigrationattorneyhelp.com/practice-areas/humanitarian-relief/">
                humanitarian relief programs
              </a>
              designed to protect and assist individuals in need of shelter or
              aid from disasters, oppression, and other urgent circumstances.
            </p>
            <p className="MsoNormal">
              Beneficiaries of both programs must also meet the legal definition
              of a refugee which you can find in
              <a
                rel="noreferrer"
                href="https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title8-section1101&amp;num=0&amp;edition=prelim"
                target="_blank"
              >
                section 101(a)(42) of the Immigration and Nationality Act
              </a>
              .
            </p>
            <h3>How to Apply for Asylum</h3>
            <p className="MsoNormal">
              To apply for asylum, file a
              <a
                href="https://www.uscis.gov/i-589"
                rel="noreferrer"
                target="_blank"
              >
                Form I-589, Application for Asylum and for Withholding of
                Removal
              </a>
              within one (1) year of your arrival to the United States. If you
              have a spouse and/or unmarried child(ren) under 21 years of age in
              the country with you, include them on your application.&nbsp;
            </p>
            <p className="MsoNormal">
              Please note that asylum only gives you the right to stay in the
              United States, and you will need to apply for employment
              authorization separately. You can also apply to bring your family
              to the United States from other countries if you are granted
              asylum.
            </p>
            <p className="MsoNormal">
              <a href="https://www.immigrationattorneyhelp.com/our-firm/">
                <strong>Our Anaheim asylum attorney</strong>
              </a>
              <strong>
                can help you with your application and the entire immigration
                process.&nbsp;
              </strong>
            </p>
            <p className="MsoNormal">
              From double-checking your paperwork to representing you during
              your asylum interview to helping you get a green card one (1) year
              after being granted asylum, Law Offices of Fady Eskandar will be
              by your side every step of the way.
            </p>
            <h3>Get Help from a Lawyer Who Understands&nbsp;</h3>
            <p className="MsoNormal">
              <a href="https://www.immigrationattorneyhelp.com/our-firm/fady-eskandar/">
                Attorney Fady Eskandar
              </a>
              of Law Offices of Fady Eskandar is an immigrant himself, so he
              understands the pains of the immigration process. Our firm also
              understands that the immigration process may be especially
              difficult for you due to the circumstances in your home country.
            </p>
            <p className="MsoNormal">
              As such, we offer honest, compassionate representation, and
              provide flexible payment plans to help you achieve your
              immigration goals. When you choose our firm, you can expect clear
              communication and commitment.
            </p>
            <p className="MsoNormal">
              You can start speaking to an attorney before you arrive in the
              United States, and you are eligible to apply for asylum within 1
              year of your arrival, so do not hesitate to contact us.
            </p>
            <hr />
            <p className="MsoNormal" style={{ textAlign: "center" }}>
              <strong>Call us at </strong>
              <a href="tel:(714) 909-2127" id="MainContent_3">
                <strong>(714) 909-2127</strong>
              </a>
              <strong> or&nbsp;</strong>
              <a href="https://www.immigrationattorneyhelp.com/contact/">
                <strong>send us a message online</strong>
              </a>
              <strong> to schedule your consultation today.</strong>
            </p>
            <hr />
            <p>&nbsp;</p>
          </div>
        </div>
        <PracticeAreasAside />
      </div>
    </section>
  );
};
