import React from "react";

export const ContactUs = () => {
  return (
    <section
      className="ctc v1 alt lt-bg pd_v-60 rsp_opn-tp rsp_opn-bt"
      id="ContactV1Alt"
    >
      <div className="mn_wd rsp_pd rsp_opn-tp">
        <div className="bg-bx ulk-bg pd_h pd_v-40">
          <header className="mrg_bt-60 ta_c" id="ContactV1AltHeader">
            <h4>Contact Us</h4>

            <strong> </strong>
          </header>
          <div className="ctc-zn ta_c" id="ContactV1AltZone">
            <form
              id="Form_ContactForm1"
              method="post"
              encType="multipart/form-data"
              action="#"
            >
              <input type="hidden" name="_m_" value="ContactForm1" />
              <div id="ContactForm1" className="ctc-sys v1 ui-repeater">
                <fieldset data-item="i" data-key="">
                  <ul className="flx-grd-sml-blk-500 cls-gp-500">
                    <li className="half">
                      <div className="input-text">
                        <label htmlFor="ContactForm1_ITM0_FirstName">
                          First Name
                        </label>
                        <input
                          required
                          type="text"
                          id="ContactForm1_ITM0_FirstName"
                          className="ui-cms-input"
                          name="ContactForm1$ITM0$FirstName"
                          value=""
                        />
                        <div className="validation" data-type="valueMissing">
                          Please enter your first name.
                        </div>
                      </div>
                    </li>
                    <li className="half">
                      <div className="input-text">
                        <label htmlFor="ContactForm1_ITM0_LastName">
                          Last Name
                        </label>
                        <input
                          required
                          type="text"
                          id="ContactForm1_ITM0_LastName"
                          className="ui-cms-input"
                          name="ContactForm1$ITM0$LastName"
                          value=""
                        />
                        <div className="validation" data-type="valueMissing">
                          Please enter your last name.
                        </div>
                      </div>
                    </li>
                    <li className="half">
                      <div className="input-text">
                        <label htmlFor="ContactForm1_ITM0_Phone">Phone</label>
                        <input
                          required
                          type="tel"
                          id="ContactForm1_ITM0_Phone"
                          pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                          className="phone-mask ui-cms-input"
                          name="ContactForm1$ITM0$Phone"
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
                        <label htmlFor="ContactForm1_ITM0_EmailAddress">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          id="ContactForm1_ITM0_EmailAddress"
                          className="ui-cms-input"
                          name="ContactForm1$ITM0$EmailAddress"
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
                        <label htmlFor="ContactForm1_ITM0_LeadTypeID">
                          Are you a new client?
                        </label>
                        <select
                          required
                          id="ContactForm1_ITM0_LeadTypeID"
                          className="ui-cms-select ui-cms-input"
                          name="ContactForm1$ITM0$LeadTypeID"
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
                          data-use="assets/dycmgkz8j91.24.2208191902389.svg#arrow_down"
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
                        <label htmlFor="ContactForm1_ITM0_Message">
                          How can we help you?
                        </label>
                        <textarea
                          required
                          id="ContactForm1_ITM0_Message"
                          className="ui-cms-input"
                          name="ContactForm1$ITM0$Message"
                        ></textarea>
                        <div className="validation" data-type="valueMissing">
                          Please enter a message.
                        </div>
                      </div>
                    </li>
                  </ul>
                </fieldset>
                <input
                  id="ContactForm1_ITM0_StreetAddress"
                  type="hidden"
                  className="ui-cms-input"
                  name="ContactForm1$ITM0$StreetAddress"
                  value=""
                  data-ga-target="address"
                  data-item="i"
                  data-key=""
                />
                <input
                  id="ContactForm1_ITM0_City"
                  type="hidden"
                  className="ui-cms-input"
                  name="ContactForm1$ITM0$City"
                  value=""
                  data-ga-target="city"
                  data-item="i"
                  data-key=""
                />
                <input
                  id="ContactForm1_ITM0_State"
                  type="hidden"
                  className="ui-cms-input"
                  name="ContactForm1$ITM0$State"
                  value=""
                  data-ga-target="state"
                  data-item="i"
                  data-key=""
                />
                <input
                  id="ContactForm1_ITM0_ZipCode"
                  type="hidden"
                  className="ui-cms-input"
                  name="ContactForm1$ITM0$ZipCode"
                  value=""
                  data-ga-target="zipcode"
                  data-item="i"
                  data-key=""
                />
                <input
                  id="ContactForm1_ITM0_FFD6"
                  type="hidden"
                  className="ui-cms-input"
                  name="ContactForm1$ITM0$FFD6"
                  value="1669875700722"
                  data-item="i"
                  data-key=""
                />
                <div className="mrg_tp-60" data-item="i" data-key="">
                  <button
                    className="btn v1"
                    aria-labelledby="ContactForm"
                    type="submit"
                    id="ContactForm1_ITM0_ctl13"
                    name="ContactForm1$ITM0$ctl13"
                    data-commandname="Update"
                  >
                    <span> Submit Form </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
