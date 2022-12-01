import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [accessibilityMenu, setAccessibilityMenu] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);
  const toggleAccessibilityMenu = () => {
    setAccessibilityMenu(accessibilityMenu ? false : true);
  };

  const handleMainMenu = () => {
    setMainMenu(mainMenu ? false : true);
  };
  return (
    <header id="HeaderZone" className={mainMenu ? "mnu-opn" : ""}>
      <nav
        className={`acc-opt v1 dk-bg transparent-bg alt ${
          accessibilityMenu && "opt-opn"
        }`}
        id="AccessibilityOptionsV1Alt"
        data-showhide="true"
        data-action="panel"
        data-html-class="true"
        data-class-name="opt-opn"
        role="dialog"
      >
        <svg
          viewBox="0 0 36 36"
          className="fltr lt"
          style={{ width: "50px", height: "50px", display: "none" }}
          tabIndex={0}
          data-action="open"
          data-role="btn"
          data-type="open"
          role="button"
          aria-pressed="false"
          aria-haspopup="false"
          data-use="/assets/images/icons/accessibility.svg#accessibility"
          onClick={toggleAccessibilityMenu}
        >
          <circle cx="18" cy="18" r="18" className="cls-1"></circle>
          <path
            className="cls-2"
            d="M20.308 27.42a1.124 1.124 0 0 0 1.04 0.68a1.064 1.064 0 0 0 0.48-0.12a1.152 1.152 0 0 0 0.56-1.56s-2.2-5.04-2.6-6.88a25.092 25.092 0 0 1-0.28-3.16a0.616 0.616 0 0 1 0.4-0.6l4.92-1.48a1.164 1.164 0 0 0-0.64-2.24s-4.56 1.48-6.2 1.48-6.12-1.44-6.12-1.44a1.2 1.2 0 0 0-1.48 0.72a1.156 1.156 0 0 0 0.8 1.48l4.92 1.48a0.568 0.568 0 0 1 0.4 0.6a25.092 25.092 0 0 1-0.28 3.16c-0.4 1.84-2.6 6.88-2.6 6.88a1.2 1.2 0 0 0 0.56 1.56a1.12 1.12 0 0 0 0.48 0.12a1.092 1.092 0 0 0 1.04-0.68l2.36-4.8Zm0-17.28a2.24 2.24 0 1 1-2.24-2.24a2.24 2.24 0 0 1 2.24 2.24"
          ></path>
        </svg>
        <ul
          className="acc-mnu pd_tp-70 bdr_r"
          data-accessibility-menu="true"
          data-role="panel"
          aria-hidden="true"
        >
          <li>
            <button
              className="full flx f_m btn-clr-hvr bdr_b pd_tp pd_bt pd_h-30 rsp_pd-h"
              title="Close the accessibility options menu"
              data-role="btn"
              data-type="close"
              role="button"
              aria-pressed="false"
              aria-haspopup="false"
            >
              <svg
                viewBox="0 0 36 36"
                className="acc-i mrg_rt"
                data-use="/cms/svg/site/dycmgkz8j91.36.2208191750475.svg#accessibility_hide"
              >
                <path d="M36 3.281L32.729 0.009L18.001 14.729L3.272 0.009L0 3.281L14.728 17.999L0 32.719L3.272 35.991L18.001 21.271L32.729 35.991L36 32.719L21.273 17.999L36 3.281Z"></path>
              </svg>
              Close
            </button>
          </li>
          <li>
            <button
              className="full flx f_m btn-clr-hvr bdr_b pd_tp pd_bt pd_h-30 rsp_pd-h"
              data-action="content"
            >
              <svg
                viewBox="0 0 36 36"
                className="acc-i mrg_rt"
                data-use="/assets/images/icons/accessibility.svg#accessibility_skip_to_co"
              >
                <path d="M12.594 23.418L12.594 19.825L36 19.825L36 23.418L12.594 23.418ZM0 12.58L36 12.58L36 16.175L0 16.175L0 12.58ZM27.027 3.599L36 3.599L36 7.192L27.027 7.192L27.027 3.599ZM0 3.599L23.409 3.599L23.409 7.192L0 7.192L0 3.599ZM8.975 23.418L0 23.418L0 19.825L8.975 19.825L8.975 23.418ZM19.79 32.401L0 32.401L0 28.806L19.79 28.806L19.79 32.401Z"></path>
              </svg>
              Skip to Content
            </button>
          </li>
          <li>
            <button
              className="full flx f_m btn-clr-hvr bdr_b pd_tp pd_bt pd_h-30 rsp_pd-h"
              data-action="highContrast"
            >
              <svg
                viewBox="0 0 36 36"
                className="acc-i mrg_rt"
                data-use="/assets/images/icons/accessibility.svg#accessibility_high_contr"
              >
                <path d="M18 36C8.06 36 0 27.94 0 18C0 8.059 8.06 0 18 0C27.941 0 36 8.06 36 18C36 27.94 27.94 36 18 36ZM18 2.878C9.662 2.878 2.88 9.662 2.88 18C2.88 26.338 9.662 33.122 18 33.122C26.338 33.122 33.122 26.338 33.122 18C33.122 9.662 26.338 2.878 18 2.878ZM29.637 18C29.637 18 29.637 18 29.637 18C29.637 18 29.637 18 29.637 18L29.637 18ZM18 29.637L18 6.363C24.417 6.363 29.637 11.583 29.637 18C29.637 24.417 24.417 29.637 18 29.637Z"></path>
              </svg>
              High Contrast
            </button>
          </li>
          <li>
            <button
              className="full flx f_m btn-clr-hvr bdr_b pd_tp pd_bt pd_h-30 rsp_pd-h"
              data-action="largeText"
            >
              <svg
                viewBox="0 0 36 36"
                className="acc-i mrg_rt"
                data-use="/assets/images/icons/accessibility.svg#accessibility_text_size"
              >
                <path d="M30.953 17.652L30.953 12.604L28.429 12.604L28.429 17.652L23.38 17.652L23.38 20.177L28.429 20.177L28.429 25.224L30.953 25.224L30.953 20.177L36 20.177L36 17.652L30.953 17.652ZM27.02 1.805L0.009 1.796L0 5.405L11.052 5.405L11.052 34.204L14.738 34.204L14.738 5.405L27.02 5.405L27.02 1.805Z"></path>
              </svg>
              Increase Text Size
            </button>
          </li>
          <li>
            <button
              className="full flx f_m btn-clr-hvr bdr_b pd_tp pd_bt pd_h-30 rsp_pd-h"
              data-action="clear"
            >
              <svg
                viewBox="0 0 36 36"
                className="acc-i mrg_rt"
                data-use="/assets/images/icons/accessibility.svg#accessibility_clear_all"
              >
                <path d="M30.94 7.361L28.793 36L6.794 36L4.649 7.361L1.635 7.361L1.635 4.78L11.706 4.78L11.706 0L23.801 0L23.801 4.78L34.365 4.78L34.365 7.361L30.94 7.361ZM21.323 2.538L14.223 2.538L14.223 4.738L21.323 4.738L21.323 2.538ZM7.125 7.317L9.064 33.376L26.399 33.376L28.381 7.317L7.125 7.317ZM21.122 29.72L22.115 10.966L24.629 11.106L23.636 29.861L21.122 29.72ZM16.493 11.041L19.011 11.041L19.011 29.782L16.493 29.782L16.493 11.041ZM10.875 11.106L13.389 10.967L14.38 29.722L11.867 29.861L10.875 11.106Z"></path>
              </svg>
              Clear All
            </button>
          </li>
        </ul>
      </nav>
      <div
        className="hdr v1 dk-bg"
        id="HeaderV1"
        data-showhide="true"
        data-header="true"
        data-class-name="mnu-opn"
        data-html-class="true"
        role="dialog"
      >
        <div className="flx-blk-800 f_sb rlt">
          <div className="lg-bx bg-bx lk-bg flx f_m fit pd_tp-60 pd_bt-60 pd_h-20">
            <Link to="/" className="tp-lg flx f_m">
              <img
                className="dk-lg"
                alt="Law Offices of Fady Eskandar"
                title="Law Offices of Fady Eskandar"
                src="assets/images/logo/logo.png"
              />
              <img
                className="lt-lg"
                alt="Law Offices of Fady Eskandar"
                title="Law Offices of Fady Eskandar"
                src="assets/images/logo/logo2.png"
              />
            </Link>
          </div>
          <div className="ato">
            <div className="tp-br bg-bx lk-bg alt-bg pd_tp-30 pd_bt-30 pd_h-20 rsp_pd-h">
              <div className="flx-blk-800 f_r f_m ta_c-800">
                <nav
                  className="scd-nav mrg_rt-90 hd-1280"
                  aria-label="Quick Links"
                  id="HeaderV1QuickLinks"
                >
                  <ul className="flx f_m f_sb"></ul>
                </nav>
                <div className="bx flx f_m" id="HeaderV1Tagline">
                  <span className="tgl fnt_t-6 fnt_tc-6 blk mrg_rt-40">
                    Call Us Today to Take Control of Your Journey
                  </span>

                  <a
                    className="fnt_phn blk"
                    href="tel:7149092127"
                    id="HeaderV1_2"
                  >
                    714-909-2127
                  </a>
                </div>
              </div>
            </div>
            <div className="nv-bx bg-bx ulk-bg alt-bg flx f_m f_r pd_tp-30 pd_bt-30 rsp_pd-h">
              <nav
                className="nv flx f_m f_r pd_v-30 ato rlt el-tab-box"
                id="HeaderV1TopNav"
                data-role="panel"
                data-closing="true"
                aria-hidden={mainMenu ? "false" : "true"}
              >
                <ul className="mnu-nv flx f_sb f_m pd_bt-30 bdr_b pd_h-10">
                  <li>
                    <a
                      className="blk"
                      href="https://www.immigrationattorneyhelp.com/site-search/"
                      title="Search Our Site"
                      aria-label="Search Our Site"
                    ></a>
                  </li>
                  <li>
                    <button
                      className="blk clr-lnk"
                      title="Close the Menu"
                      aria-label="Close the Menu"
                      data-role="btn"
                      role="button"
                      aria-pressed="false"
                      aria-haspopup="false"
                      onClick={handleMainMenu}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="blk"
                        data-use="/cms/svg/site/dycmgkz8j91.24.2208191902389.svg#close"
                      >
                        <path d="M1.285 0.002A1.498 1.498 0.012 0 0 0.012 1.5a1.498 1.498 0 0 0 0.434 0.884L10.019 11.986L0.447 21.604a1.408 1.408 0 0 0 0 1.992a1.393 1.393 0 0 0 1.962 0L11.996 14.009l9.572 9.587a1.498 1.498 0 0 0 2.007 0a1.408 1.408 0 0 0 0-1.992L14.034 11.986l9.587-9.587A1.423 1.423 0.012 0 0 21.614 0.437L11.996 10.009L2.454 0.437A1.588 1.588 0.012 0 0 1.285 0.002Z"></path>
                      </svg>
                    </button>
                  </li>
                </ul>
                <ul
                  className="flx str f_t"
                  role="tablist"
                  aria-label="Top Navigation"
                >
                  <li className="selected flx ato rlt" role="menuitem">
                    <Link
                      to="/"
                      className="rg_rt-90 ato clr-swp str blk ta_l rlt dt-nv"
                    >
                      <span className="rlt blk rlt pd_tp pd_bt">Home</span>
                    </Link>
                  </li>
                  <li className="flx f_m f_wrp ato rlt" role="menuitem">
                    <Link
                      to="/our-firm"
                      className="mrg_rt-90 mrg_lt-90 ato clr-swp str blk ta_l four-fifths rlt dt-nv"
                    >
                      <span className="rlt blk rlt pd_tp pd_bt">Our Firm</span>
                    </Link>

                    <span
                      className="el-tab lvl-1 rlt icn fit blk pd_tp-10 pd_bt-10 ta_r pd_h-10 fifth clr-lnk"
                      aria-label="Open child menu of Our Firm"
                      role="tab"
                      tabIndex={0}
                      aria-selected="false"
                      aria-expanded="false"
                      aria-controls="HeaderV1TopNav"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="blk"
                        role="presentation"
                        data-use="assets/dycmgkz8j91.24.2208191902389.svg#arrow_down"
                      >
                        <path d="M24 6.905L12.009 18.931L0 6.905L1.837 5.068L11.992 15.223L22.163 5.068Z"></path>
                      </svg>
                    </span>
                    <ul
                      className="fly-nv el-panel sld full ui-scroll bg-bx lk-bg pd_v-10 pd_h-10"
                      role="tabpanel"
                      aria-hidden="true"
                      id="HeaderV1TopNav"
                    >
                      <li className=" " role="menuitem" data-closing="true">
                        <a
                          className="clr-swp ato blk pd_bt-30 pd_tp-30"
                          href="https://www.immigrationattorneyhelp.com/our-firm/fady-eskandar/"
                          target=""
                        >
                          Fady Eskandar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flx f_m f_wrp ato rlt" role="menuitem">
                    <a
                      className="mrg_rt-90 mrg_lt-90 ato clr-swp str blk ta_l four-fifths rlt dt-nv"
                      href="https://www.immigrationattorneyhelp.com/practice-areas/"
                      target=""
                    >
                      <span className="rlt blk rlt pd_tp pd_bt">
                        Practice Areas
                      </span>
                    </a>

                    <span
                      className="el-tab lvl-1 rlt icn fit blk pd_tp-10 pd_bt-10 ta_r pd_h-10 fifth clr-lnk"
                      aria-label="Open child menu of Practice Areas"
                      role="tab"
                      tabIndex={0}
                      aria-selected="false"
                      aria-expanded="false"
                      aria-controls="HeaderV1TopNav"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="blk"
                        role="presentation"
                        data-use="assets/dycmgkz8j91.24.2208191902389.svg#arrow_down"
                      >
                        <path d="M24 6.905L12.009 18.931L0 6.905L1.837 5.068L11.992 15.223L22.163 5.068Z"></path>
                      </svg>
                    </span>
                    <ul
                      className="fly-nv el-panel sld full ui-scroll bg-bx lk-bg pd_v-10 pd_h-10"
                      role="tabpanel"
                      aria-hidden="true"
                      id="HeaderV1TopNav"
                    >
                      <li className=" " role="menuitem" data-closing="true">
                        <a
                          className="clr-swp ato blk pd_bt-30 pd_tp-30"
                          href="https://www.immigrationattorneyhelp.com/practice-areas/asylum/"
                          target=""
                        >
                          Asylum
                        </a>
                      </li>
                      <li className=" " role="menuitem" data-closing="true">
                        <a
                          className="clr-swp ato blk pd_bt-30 pd_tp-30"
                          href="https://www.immigrationattorneyhelp.com/practice-areas/family-based-immigration/"
                          target=""
                        >
                          Family Based Immigration
                        </a>
                      </li>
                      <li className=" " role="menuitem" data-closing="true">
                        <a
                          className="clr-swp ato blk pd_bt-30 pd_tp-30"
                          href="https://www.immigrationattorneyhelp.com/practice-areas/humanitarian-relief/"
                          target=""
                        >
                          Humanitarian Relief
                        </a>
                      </li>
                      <li className=" " role="menuitem" data-closing="true">
                        <a
                          className="clr-swp ato blk pd_bt-30 pd_tp-30"
                          href="https://www.immigrationattorneyhelp.com/practice-areas/citizenship-naturalization/"
                          target=""
                        >
                          Citizenship &amp; Naturalization
                        </a>
                      </li>
                      <li className=" " role="menuitem" data-closing="true">
                        <a
                          className="clr-swp ato blk pd_bt-30 pd_tp-30"
                          href="https://www.immigrationattorneyhelp.com/practice-areas/investment-immigration/"
                          target=""
                        >
                          Investment Immigration
                        </a>
                      </li>
                      <li className=" " role="menuitem" data-closing="true">
                        <a
                          className="clr-swp ato blk pd_bt-30 pd_tp-30"
                          href="https://www.immigrationattorneyhelp.com/practice-areas/employment-based-immigration/"
                          target=""
                        >
                          Employment Based Immigration
                        </a>
                      </li>
                      <li className=" " role="menuitem" data-closing="true">
                        <a
                          className="clr-swp ato blk pd_bt-30 pd_tp-30"
                          href="https://www.immigrationattorneyhelp.com/practice-areas/deportation-defense/"
                          target=""
                        >
                          Deportation Defense
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flx ato rlt" role="menuitem">
                    <a
                      className="mrg_rt-90 mrg_lt-90 ato clr-swp str blk ta_l rlt dt-nv"
                      href="https://www.immigrationattorneyhelp.com/reviews/"
                      target=""
                    >
                      <span className="rlt blk rlt pd_tp pd_bt">Reviews</span>
                    </a>
                  </li>
                  <li className="flx ato rlt" role="menuitem">
                    <a
                      className="mrg_lt-90 ato clr-swp str blk ta_l rlt dt-nv"
                      href="https://www.immigrationattorneyhelp.com/contact/"
                      target=""
                    >
                      <span className="rlt blk rlt pd_tp pd_bt">Contact</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="mrg_lt-90 ato clr-swp str blk ta_l rlt dt-nv"
                      href="https://www.immigrationattorneyhelp.com/arabic"
                    >
                      <span className="rlt blk rlt pd_tp pd_bt">عربى</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <button
                className="mnu-btn mrg_lt-90 dkp hide-800 btn-clr"
                title="Main Menu"
                aria-label="Main Menu"
                data-role="btn"
                role="button"
                tabIndex={0}
                aria-pressed={mainMenu ? "true" : "false"}
                aria-haspopup="false"
                onClick={handleMainMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <button
          className="mnu-btn mbl btn-clr bx_shw-itm"
          title="Main Menu"
          aria-label="Main Menu"
          data-role="btn"
          role="button"
          tabIndex={0}
          aria-pressed={mainMenu ? "true" : "false"}
          aria-haspopup="false"
          onClick={handleMainMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
