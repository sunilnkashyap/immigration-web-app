import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

type Inputs = {
  fName: string;
  lName: string;
  phone: string;
  email: string;
  areYouClient: string;
  message: string;
};

declare global {
  var emailjs: any;
}

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { t } = useTranslation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs.send("service_izhi80o", "template_tnvue59", data).then(
      function (response: any) {
        console.log("SUCCESS!", response.status, response.text);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        toast.success(
          "Your query submitted successfully. Our support team will contact you shortly. Thank you.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      },
      function (error: any) {
        console.log("FAILED...", error);
        toast.error("Something went wrong please try after some time.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    );
  };

  return (
    <section
      className="ctc v1 alt lt-bg pd_v-60 rsp_opn-tp rsp_opn-bt"
      id="ContactV1Alt"
    >
      <div className="mn_wd rsp_pd rsp_opn-tp">
        <div className="bg-bx ulk-bg pd_h pd_v-40">
          <header className="mrg_bt-60 ta_c" id="ContactV1AltHeader">
            <h4>{t("contactForm.title")}</h4>

            <strong> </strong>
          </header>
          <div className="ctc-zn ta_c" id="ContactV1AltZone">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="_m_" value="ContactForm1" />
              <div id="ContactForm1" className="ctc-sys v1 ui-repeater">
                <fieldset data-item="i" data-key="">
                  <ul className="flx-grd-sml-blk-500 cls-gp-500">
                    <li className="half">
                      <div className="input-text">
                        <label htmlFor="ContactForm1_ITM0_FirstName">
                          {t("contactForm.fName")}
                        </label>
                        <input
                          type="text"
                          className="ui-cms-input"
                          {...register("fName", { required: true })}
                        />
                        {errors.fName?.type === "required" && (
                          <div style={{ color: "red" }}>
                            Please enter your first name.
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="half">
                      <div className="input-text">
                        <label htmlFor="ContactForm1_ITM0_LastName">
                          {t("contactForm.lName")}
                        </label>
                        <input
                          type="text"
                          className="ui-cms-input"
                          {...register("lName", { required: true })}
                        />
                        {errors.lName?.type === "required" && (
                          <div style={{ color: "red" }}>
                            Please enter your last name.
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="half">
                      <div className="input-text">
                        <label htmlFor="ContactForm1_ITM0_Phone">
                          {" "}
                          {t("contactForm.phone")}
                        </label>
                        <input
                          type="tel"
                          className="phone-mask ui-cms-input"
                          {...register("phone", {
                            required: true,
                          })}
                        />
                        {errors.phone?.type === "required" && (
                          <div style={{ color: "red" }}>
                            Please enter your phone number.
                          </div>
                        )}
                        {errors.phone?.type === "pattern" && (
                          <div style={{ color: "red" }}>
                            Please enter valid phone number.
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="half">
                      <div className="input-text">
                        <label htmlFor="ContactForm1_ITM0_EmailAddress">
                          {t("contactForm.email")}
                        </label>
                        <input
                          type="text"
                          className="ui-cms-input"
                          {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          })}
                        />
                        {errors.email?.type === "required" && (
                          <div style={{ color: "red" }}>
                            Please enter your email address.
                          </div>
                        )}
                        {errors.email?.type === "pattern" && (
                          <div style={{ color: "red" }}>
                            Please enter valid email address.
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="sel full">
                      <div className="input-text">
                        <label htmlFor="ContactForm1_ITM0_LeadTypeID">
                          {t("contactForm.newClient")}
                        </label>
                        <select
                          id="ContactForm1_ITM0_LeadTypeID"
                          className="ui-cms-select ui-cms-input"
                          {...register("areYouClient", { required: true })}
                        >
                          <option value=""></option>
                          <option value="Yes, I am a potential new client.">
                            Yes, I am a potential new client
                          </option>
                          <option value="No, I'm a current existing client.">
                            No, I'm a current existing client
                          </option>
                          <option value="I'm neither.">I'm neither.</option>
                        </select>
                        <svg
                          viewBox="0 0 24 24"
                          role="presentation"
                          data-use="assets/dycmgkz8j91.24.2208191902389.svg#arrow_down"
                        >
                          <path d="M24 6.905L12.009 18.931L0 6.905L1.837 5.068L11.992 15.223L22.163 5.068Z"></path>
                        </svg>
                        {errors.areYouClient?.type === "required" && (
                          <div style={{ color: "red" }}>
                            Please make a selection.
                          </div>
                        )}
                      </div>
                    </li>

                    <li className="msg full">
                      <div className="input-text">
                        <label htmlFor="ContactForm1_ITM0_Message">
                          {t("contactForm.message")}
                        </label>
                        <textarea
                          className="ui-cms-input"
                          {...register("message", { required: true })}
                        ></textarea>

                        {errors.message?.type === "required" && (
                          <div style={{ color: "red" }}>
                            Please enter a message.
                          </div>
                        )}
                      </div>
                    </li>
                  </ul>
                </fieldset>
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
