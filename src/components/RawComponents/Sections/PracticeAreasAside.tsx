import React from "react";
import { Link, useLocation } from "react-router-dom";

export const PracticeAreasAside = () => {
  const location = useLocation();

  const getSelectedClass = (matchPath: string) => {
    const locationArr = location.pathname.split("/");
    return locationArr[locationArr.length - 1] == matchPath ? " selected" : "";
  };

  return (
    <div className="hlf-md sd-zn" id="SideZone">
      <aside
        className="sd-nv v1 el-tab-box lt-bg"
        id="SideNavV1"
        aria-label="Navigation menu for Practice Areas"
        data-closing="true"
        data-slider="true"
      >
        <div className="bg-bx ulk-bg pd_v-40 pd_h-30 rsp_pd">
          <nav role="menu">
            <div className="rlt mrg_bt-20">
              <h4 className="fnt_t-2 fnt_tc-2">
                <u>Practice Areas</u>
              </h4>
            </div>
            <ul role="menu">
              <li className="lvl-1 bdr_b pd_v-10">
                <Link
                  to="/practice-areas/asylum"
                  className={`fnt_t-5 clr-swp flx f_m ato  ${getSelectedClass(
                    "asylum"
                  )}`}
                >
                  <span>Asylum</span>
                </Link>
              </li>
              <li className="lvl-1 bdr_b pd_v-10">
                <Link
                  to="/practice-areas/family-based-immigration"
                  className={`fnt_t-5 clr-swp flx f_m ato  ${getSelectedClass(
                    "family-based-immigration"
                  )}`}
                >
                  <span>Family Based Immigration</span>
                </Link>
              </li>
              <li className="lvl-1 bdr_b pd_v-10">
                <Link
                  to="/practice-areas/humanitarian-relief"
                  className={`fnt_t-5 clr-swp flx f_m ato  ${getSelectedClass(
                    "humanitarian-relief"
                  )}`}
                >
                  <span>Humanitarian Relief</span>
                </Link>
              </li>
              <li className="lvl-1 bdr_b pd_v-10">
                <Link
                  to="/practice-areas/citizenship-naturalization"
                  className={`fnt_t-5 clr-swp flx f_m ato  ${getSelectedClass(
                    "citizenship-naturalization"
                  )}`}
                >
                  <span>Citizenship &amp; Naturalization</span>
                </Link>
              </li>
              <li className="lvl-1 bdr_b pd_v-10">
                <Link
                  to="/practice-areas/investment-immigration"
                  className={`fnt_t-5 clr-swp flx f_m ato  ${getSelectedClass(
                    "investment-immigration"
                  )}`}
                >
                  <span>Investment Immigration</span>
                </Link>
              </li>
              <li className="lvl-1 bdr_b pd_v-10">
                <Link
                  to="/practice-areas/employment-based-immigration"
                  className={`fnt_t-5 clr-swp flx f_m ato  ${getSelectedClass(
                    "employment-based-immigration"
                  )}`}
                >
                  <span>Employment Based Immigration</span>
                </Link>
              </li>
              <li className="lvl-1 bdr_b pd_v-10">
                <Link
                  to="/practice-areas/deportation-defense"
                  className={`fnt_t-5 clr-swp flx f_m ato  ${getSelectedClass(
                    "deportation-defense"
                  )}`}
                >
                  <span>Deportation Defense</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <aside
        className="sd-ctc v1 lt-bg"
        id="SideContactV1"
        style={{ marginTop: "0" }}
      >
        <div className="bg-bx ulk-bg pd_v-40 pd_h-30 rsp_pd">
          <header className="mrg_bt-40" id="SideContactV1Header">
            <h4>Contact Us Today</h4>

            <strong> </strong>
          </header>
          <div className="ctc-zn" id="SideContactV1Zone">
            <form
              id="Form_ContactForm"
              method="post"
              encType="multipart/form-data"
              action="#"
            >
              <input type="hidden" name="_m_" value="ContactForm" />
              <div id="ContactForm" className="ctc-sys v1 ui-repeater">
                <fieldset data-item="i" data-key="">
                  <ul className="flx-grd-sml-blk-500 cls-gp-500">
                    <li className="half">
                      <div className="input-text">
                        <label>First Name</label>
                        <input
                          required
                          type="text"
                          id="ContactForm_ITM0_FirstName"
                          className="ui-cms-input"
                          name="ContactForm$ITM0$FirstName"
                          value=""
                        />
                        <div className="validation" data-type="valueMissing">
                          Please enter your first name.
                        </div>
                      </div>
                    </li>
                    <li className="half">
                      <div className="input-text">
                        <label>Last Name</label>
                        <input
                          required
                          type="text"
                          id="ContactForm_ITM0_LastName"
                          className="ui-cms-input"
                          name="ContactForm$ITM0$LastName"
                          value=""
                        />
                        <div className="validation" data-type="valueMissing">
                          Please enter your last name.
                        </div>
                      </div>
                    </li>
                    <li className="half">
                      <div className="input-text">
                        <label>Phone</label>
                        <input
                          required
                          type="tel"
                          id="ContactForm_ITM0_Phone"
                          pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                          className="phone-mask ui-cms-input"
                          name="ContactForm$ITM0$Phone"
                          value=""
                        />
                        <div className="validation" data-type="valueMissing">
                          Please enter your phone number.
                        </div>
                        <div className="validation" data-type="typeMismatch">
                          This isn't a valid phone number.
                        </div>
                      </div>
                    </li>
                    <li className="half">
                      <div className="input-text">
                        <label>Email</label>
                        <input
                          required
                          type="email"
                          id="ContactForm_ITM0_EmailAddress"
                          className="ui-cms-input"
                          name="ContactForm$ITM0$EmailAddress"
                          value=""
                        />
                        <div className="validation" data-type="valueMissing">
                          Please enter your email address.
                        </div>
                        <div className="validation" data-type="typeMismatch">
                          This isn't a valid email address.
                        </div>
                      </div>
                    </li>
                    <li className="sel full">
                      <div className="input-text">
                        <label>Are you a new client?</label>
                        <select
                          required
                          id="ContactForm_ITM0_LeadTypeID"
                          className="ui-cms-select ui-cms-input"
                          name="ContactForm$ITM0$LeadTypeID"
                        >
                          <option value=""></option>
                          <option value="1">
                            Yes, I am a potential new client
                          </option>
                          <option value="11">
                            No, I'm a current existing client
                          </option>
                          <option value="13">I'm neither.</option>
                        </select>
                        <svg
                          viewBox="0 0 24 24"
                          role="presentation"
                          data-use="/cms/svg/site/dycmgkz8j91.24.2208191902389.svg#arrow_down"
                        >
                          <path d="M24 6.905L12.009 18.931L0 6.905L1.837 5.068L11.992 15.223L22.163 5.068Z"></path>
                        </svg>
                        <div className="validation" data-type="valueMissing">
                          Please make a selection.
                        </div>
                      </div>
                    </li>

                    <li className="msg full">
                      <div className="input-text">
                        <label>How can we help you?</label>
                        <textarea
                          required
                          id="ContactForm_ITM0_Message"
                          className="ui-cms-input"
                          name="ContactForm$ITM0$Message"
                        ></textarea>
                        <div className="validation" data-type="valueMissing">
                          Please enter a message.
                        </div>
                      </div>
                    </li>
                  </ul>
                </fieldset>
                <input
                  id="ContactForm_ITM0_StreetAddress"
                  type="hidden"
                  className="ui-cms-input"
                  name="ContactForm$ITM0$StreetAddress"
                  value=""
                  data-ga-target="address"
                  data-item="i"
                  data-key=""
                />
                <input
                  id="ContactForm_ITM0_City"
                  type="hidden"
                  className="ui-cms-input"
                  name="ContactForm$ITM0$City"
                  value=""
                  data-ga-target="city"
                  data-item="i"
                  data-key=""
                />
                <input
                  id="ContactForm_ITM0_State"
                  type="hidden"
                  className="ui-cms-input"
                  name="ContactForm$ITM0$State"
                  value=""
                  data-ga-target="state"
                  data-item="i"
                  data-key=""
                />
                <input
                  id="ContactForm_ITM0_ZipCode"
                  type="hidden"
                  className="ui-cms-input"
                  name="ContactForm$ITM0$ZipCode"
                  value=""
                  data-ga-target="zipcode"
                  data-item="i"
                  data-key=""
                />
                <input
                  id="ContactForm_ITM0_FFD6"
                  type="hidden"
                  className="ui-cms-input"
                  name="ContactForm$ITM0$FFD6"
                  value="1670994559420"
                  data-item="i"
                  data-key=""
                />
                <div className="mrg_tp-60" data-item="i" data-key="">
                  <button
                    className="btn v1"
                    aria-labelledby="ContactForm"
                    type="submit"
                    id="ContactForm_ITM0_ctl13"
                    name="ContactForm$ITM0$ctl13"
                    data-commandname="Update"
                  >
                    <span> Submit Form </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
};
