import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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

export const ContactUsDetailed = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
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
      className="ctc v2 vls-tls dk-bg pd_v rsp_opn-tp rsp_opn-bt show-20"
      id="ContactV2"
      data-onvisible="show-20"
    >
      <div className="mn_wd rsp_pd rsp_opn-tp">
        <div className="flx-ato-rsp-mgd-b f_sb f_rev">
          <div className="half">
            <header className="mrg_bt-40 ta_c-500" id="ContactV2ValuesHeader">
              <h4 className="fnt_t-2 fnt_tc-5"></h4>
            </header>
            <div className="vls-lst ui-repeater" id="ContactV2List">
              <ul className="anm_seq-lst">
                <li
                  className="flx-blk-500-mgd-l f_t ta_c-500 anm_hlf-dn"
                  data-item="i"
                  data-key="28362"
                >
                  <div className="icn-bx flx f_m f_c fit rsp_img">
                    <svg
                      viewBox="0 0 24 24"
                      className="vls-icn clr-btn"
                      role="presentation"
                      data-use="/cms/svg/site/dycmgkz8j91.24.2208191902389.svg#compas"
                    >
                      <path d="M23.769 12.722L21.901 13.842C21.696 13.927 21.432 13.856 21.312 13.649L17.754 7.445C17.822 7.238 17.705 6.971 17.912 6.852L21.046 4.919C21.252 4.831 21.516 4.87 21.635 5.078L23.928 12.129C24.078 12.337 23.977 12.602 23.769 12.722ZM22.601 11.771C22.586 11.512 22.183 11.424 21.865 11.758C21.607 11.722 21.519 12.054 21.667 12.314C22.013 12.574 22.415 12.662 22.404 12.513C22.662 12.363 22.751 12.031 22.601 11.771ZM19.497 11.995C19.693 12.334 19.748 12.678 19.582 13.047C19.493 13.243 19.5 13.245 19.309 13.129C19.102 13.003 18.895 12.871 18.658 12.812C18.254 12.641 17.266 12.936 16.915 13.551C16.847 13.672 16.776 13.704 16.775 13.665C16.411 13.578 16.168 13.649 15.935 13.719C15.413 13.874 15.218 14.24 14.916 14.758C14.852 14.991 14.967 15.244 14.547 15.186C14.43 15.234 14.305 15.282 14.223 15.383C14.12 15.509 14.117 15.553 14.062 15.638C13.954 15.8 13.86 15.969 13.823 16.163C13.793 16.315 13.744 16.443 13.567 16.477C13.51 16.487 13.675 16.531 13.407 16.567C12.765 17.142 12.536 17.774 12.828 18.506C12.885 18.808 12.844 18.682 12.741 18.749C12.402 19.149 12.042 19.082 11.642 18.985C11.145 18.867 10.841 18.539 10.694 18.057C10.669 17.972 10.654 17.974 10.585 18.244C10.15 18.234 9.72 18.206 9.308 17.95C9.019 17.771 8.852 17.496 8.758 17.171C8.745 17.13 8.758 17.058 8.677 17.079C8.459 17.132 8.246 17.117 8.032 17.058C7.801 16.995 7.591 16.891 7.438 16.756C7.289 16.519 7.152 16.32 7.125 16.209C7.12 16.027 7.098 16.016 7.057 16.028C6.854 16.364 6.654 16.194 6.45 16.02C5.904 15.89 5.569 15.695 5.507 14.974C5.435 14.429 5.634 13.982 6.114 13.69C6.464 13.477 6.82 13.274 7.175 13.066C7.843 12.679 8.512 12.292 9.18 12.185C9.766 11.683 10.354 11.229 10.938 10.885C11.293 10.675 11.659 10.496 12.061 10.396C12.227 10.353 12.395 10.348 12.559 10.311C12.748 10.311 12.773 10.427 12.887 10.441C13.236 11.07 13.626 11.37 14.115 11.717C14.549 11.928 14.889 12.087 15.097 12.113C15.514 12.145 15.9 12.018 16.23 11.748C16.446 11.73 16.617 11.359 16.686 11.075C16.769 10.734 16.691 10.418 16.552 10.114C16.372 9.72 16.123 9.365 15.91 9.059C15.653 8.528 15.425 8.048 15.031 7.681C15.016 7.667 14.987 7.65 15.007 7.621C15.027 7.593 15.218 7.599 15.087 7.599C15.288 7.598 15.49 7.598 15.761 7.598C15.828 7.598 15.963 7.599 16.1 7.598C16.621 7.594 17.043 7.795 17.341 8.228C17.588 8.588 17.781 9.012 17.998 9.361C18.5 10.238 18.995 11.119 19.497 11.995ZM15.874 10.419C16.083 10.809 15.898 11.144 15.567 11.285C15.337 11.382 15.1 11.359 14.871 11.272C14.614 11.174 14.396 11.011 14.197 10.824C13.833 10.486 13.537 10.091 13.264 9.677C13.214 9.599 13.16 9.561 13.065 9.562C12.711 9.567 12.36 9.562 12.01 9.809C11.651 9.723 11.305 9.836 10.982 10.009C10.659 10.18 10.348 10.37 10.03 10.553C9.233 11.011 8.434 11.467 7.637 11.928C6.895 12.356 6.153 12.789 5.575 13.221C5.356 13.252 5.306 13.266 5.25 13.23C5.125 13.15 4.991 13.083 4.875 12.993C4.5 12.697 4.353 12.31 4.569 11.82C4.671 11.59 4.808 11.38 4.933 11.161C5.436 10.366 5.952 9.399 6.447 8.509C6.791 7.891 7.287 7.58 7.999 7.595C8.773 7.611 9.548 7.598 10.321 7.598C11.025 7.599 11.73 7.599 12.433 7.598C12.97 7.598 13.178 7.621 13.543 7.937C13.9 7.811 14.214 7.977 14.49 8.22C14.931 8.438 14.902 8.718 15.352 9.166C15.355 9.463 15.617 9.939 15.874 10.419ZM2.657 13.649C2.539 13.856 2.275 13.927 2.068 13.842L0.202 12.722C-0.005 12.602-0.043 12.337 0.043 12.129L2.336 5.078C2.454 4.87 2.719 4.831 2.925 4.919L6.267 6.852C6.265 6.971 6.337 7.238 6.217 7.445L2.657 13.649ZM2.106 11.758C1.847 11.424 1.518 11.512 1.368 11.771C1.298 12.031 1.309 12.363 1.567 12.513C1.824 12.662 2.154 12.574 2.302 12.314C2.452 12.054 2.364 11.722 2.106 11.758ZM14.172 17.219C14.318 17.056 14.457 17.335 14.601 17.076C14.603 17.017 14.58 16.973 14.562 16.93C14.377 16.479 14.53 16.263 14.875 15.828L15.242 15.697C15.678 15.684 15.54 15.704 15.826 15.864C15.648 15.673 15.635 15.605 15.612 15.538C15.481 15.166 15.572 15.049 15.856 14.56C16.148 14.318 16.528 14.294 16.868 14.493C17.086 14.62 17.013 14.555 17.238 14.618C17.245 14.608 17.25 14.604 17.248 14.601C17.246 14.59 17.236 14.579 17.237 14.568C17.582 14.269 17.328 14.223 17.372 13.959C17.551 13.554 18.135 13.379 18.548 13.533C18.723 13.598 18.874 13.704 19.034 13.795C19.918 14.294 19.929 15.493 19.084 16.016C19.026 16.052 19.013 16.099 19.011 16.16C18.985 16.813 18.534 17.335 17.883 17.412C17.668 17.438 17.512 17.475 17.432 17.892C17.428 17.696 17.416 17.704 17.409 17.714C17.205 18.017 16.929 18.206 16.563 18.256C16.453 18.271 16.389 18.261 16.239 18.289C16.139 18.441 16.121 18.476 16.06 18.574C15.736 19.073 15.036 19.27 14.501 19.012C14.256 18.894 14.027 18.749 13.796 18.61C13.504 18.435 13.354 18.042 13.431 17.701C13.513 17.406 13.812 17.081 14.172 17.219Z"></path>
                    </svg>
                  </div>

                  <div className="inf mrg_lt-70">
                    <span className="fnt_t-5 fnt_tc-5">
                      Compassionate Counsel
                    </span>

                    <div className="cnt-stl mrg_tp-10">
                      <p>
                        We understand&nbsp;the system and provides&nbsp;advice
                        on the best course of action for your particular needs.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="flx-blk-500-mgd-l f_t mrg_tp-40 ta_c-500 anm_hlf-dn"
                  data-item="i"
                  data-key="28363"
                >
                  <div className="icn-bx flx f_m f_c fit rsp_img">
                    <svg
                      viewBox="0 0 24 24"
                      className="vls-icn clr-btn"
                      role="presentation"
                      data-use="/cms/svg/site/dycmgkz8j91.24.2208191902389.svg#experts_in_immm"
                    >
                      <path d="M22.591 10.018C22.591 10.018 22.607 9.39 22.795 9.091C23.059 8.67 23.693 8.51 23.693 8.51C23.693 8.51 23.766 9.094 23.449 9.747C23.051 9.904 22.591 10.018 22.591 10.018ZM22.239 8.222C22.239 8.222 22.148 7.614 22.278 7.292C22.461 6.955 23.046 6.578 23.046 6.578C23.046 6.578 23.215 7.129 22.97 7.531C22.664 8.033 22.239 8.222 22.239 8.222ZM21.568 6.524C21.568 6.524 21.376 5.952 21.448 5.62C21.548 5.154 22.068 4.8 22.068 4.8C22.068 4.8 22.324 5.303 22.22 5.869C21.946 6.27 21.568 6.524 21.568 6.524ZM20.605 5.051C20.605 5.051 20.553 4.458 20.335 4.126C20.352 3.658 20.794 3.228 20.794 3.228C20.794 3.228 21.127 3.67 21.038 4.114C20.926 4.668 20.605 5.051 20.605 5.051ZM18.995 2.863C18.932 2.636 19.285 1.919 19.285 1.919C19.285 1.919 19.682 2.289 19.671 2.732C19.658 3.285 19.401 3.639 19.401 3.639C19.401 3.639 19.039 3.187 18.995 2.863ZM17.469 1.862C17.331 1.436 17.588 0.902 17.588 0.902C17.588 0.902 18.034 1.191 18.319 1.621C18.18 2.157 17.992 2.542 17.992 2.542C17.992 2.542 17.567 2.167 17.469 1.862ZM19.404 3.725C21.617 5.627 23.349 9.694 22.32 13.585C21.622 16.67 19.334 19.163 17.304 20.259C17.231 20.204 17.55 20.149 17.778 20.511C18.337 20.318 18.76 20.942 18.76 20.942C18.76 20.942 18.158 21.25 17.643 21.049C17.127 20.846 16.832 20.518 16.734 20.394C16.214 20.643 15.695 20.83 15.193 20.954C15.435 20.941 15.747 20.946 15.959 21.032C16.498 21.252 16.814 21.954 16.814 21.954C16.814 21.954 16.154 22.157 15.672 21.862C15.167 21.554 14.929 21.148 14.865 21.025C13.82 21.23 13 21.563 12.384 21.899C12.977 22.265 13.53 22.576 13.365 22.661C13.369 22.664 13.373 22.667 13.377 22.67C13.473 22.826 13.476 22.917 13.382 23.016C13.549 23.114 13.134 23.119 13.037 23.027C13.032 23.022 13.027 23.016 13.022 23.01L13.02 23.012C13.02 23.012 12.686 22.607 11.966 22.147C11.243 22.607 10.906 23.012 10.906 23.012L10.906 23.012C10.903 23.016 10.899 23.019 10.896 23.024C10.803 23.12 10.649 23.123 10.551 23.029C10.453 22.935 10.448 23.015 10.54 22.684L10.54 22.684C10.54 22.684 10.837 22.331 11.542 21.896C10.926 21.56 10.105 21.229 9.061 21.025C8.997 21.148 8.759 21.554 8.253 21.862C7.772 22.157 7.111 21.954 7.111 21.954C7.111 21.954 7.427 21.252 7.968 21.032C8.179 20.946 8.491 20.941 8.733 20.954C8.231 20.83 7.782 20.643 7.191 20.394C7.093 20.517 6.799 20.846 6.283 21.049C5.768 21.25 5.165 20.942 5.165 20.942C5.165 20.942 5.589 20.318 6.147 20.511C6.376 20.149 6.696 20.204 6.929 20.259C4.593 19.2 2.303 16.67 1.606 13.585C0.576 9.694 2.309 5.627 4.523 3.725C5.556 3.088 6.555 2.225 7.323 1.886C7.311 1.88 7.305 1.876 7.305 1.876C7.305 1.876 7.631 1.436 8.042 1.365C8.333 1.316 8.908 1.504 8.908 1.504C8.908 1.504 8.589 1.825 8.113 1.988C7.839 2.082 7.541 1.982 7.396 1.919C7.005 2.099 6.553 2.342 6.064 2.662C6.467 2.606 6.493 2.548 6.674 2.574C7.125 2.638 7.496 3.111 7.496 3.111C7.496 3.111 7.034 3.389 6.804 3.257C6.207 3.169 5.958 2.897 5.978 2.797C5.563 3.056 5.098 3.363 4.702 3.725C4.874 3.639 5.099 3.543 5.28 3.537C5.744 3.765 6.201 3.931 6.201 3.931C6.201 3.931 5.785 4.293 5.339 4.234C4.911 4.179 4.619 3.991 4.507 3.906C4.148 4.31 3.804 4.754 3.487 5.055C3.792 4.934 3.874 4.78 4.067 4.74C4.53 4.966 5.061 4.972 5.061 4.972C5.061 4.972 4.708 5.409 4.25 5.43C3.809 5.45 3.481 5.312 3.354 5.248C3.088 5.632 2.843 6.049 2.624 6.799C2.754 6.359 3.185 6.215 3.072 6.154C3.521 5.974 4.113 6.211 4.113 6.211C4.113 6.211 3.836 6.712 3.379 6.815C2.966 6.907 2.63 6.955 2.475 6.798C2.284 7.373 2.118 7.657 1.979 8.112C2.083 8.184 2.213 7.808 2.346 7.726C2.765 7.464 3.403 7.858 3.403 7.858C3.403 7.858 3.213 8.152 2.772 8.562C2.383 8.497 2.043 8.495 1.874 8.481C1.752 8.937 1.658 9.407 1.598 9.885C1.678 9.711 1.863 9.518 1.912 9.404C2.287 9.218 2.951 9.09 2.951 9.09C2.951 9.09 2.858 9.679 2.447 9.941C2.08 10.31 1.732 10.233 1.563 10.247C1.522 10.716 1.514 11.19 1.542 11.885C1.592 11.475 1.668 11.253 1.777 11.114C2.095 10.709 2.765 10.613 2.765 10.613C2.765 10.613 2.776 11.222 2.409 11.559C2.078 11.865 1.732 11.983 1.566 12.125C1.609 12.464 1.688 12.903 1.981 13.34C1.815 13.333 1.852 12.93 1.932 13.007C2.459 12.316 2.837 12.102 2.837 12.102C2.837 12.102 2.955 12.711 2.647 13.115C2.375 13.471 2.061 13.65 1.898 13.725C2.014 14.168 2.278 14.597 2.339 15.263C2.32 14.801 2.315 14.562 2.372 14.39C2.722 14.011 3.161 13.547 3.161 13.547C3.161 13.547 3.388 14.139 3.149 14.6C2.938 15.3 2.649 15.247 2.499 15.57C2.689 15.94 3.037 16.333 3.139 16.548C3.092 16.281 3.057 16.072 3.081 15.908C3.158 15.537 3.724 14.921 3.724 14.921C3.724 14.921 4.058 15.476 3.899 15.98C3.763 16.415 3.527 16.699 3.392 16.896C3.792 17.182 3.917 17.511 4.204 17.817C4.128 17.643 4.061 17.449 4.056 17.287C4.038 16.729 4.528 16.181 4.528 16.181C4.528 16.181 4.961 16.68 4.892 17.348C4.833 17.666 4.653 17.988 4.541 18.153C4.844 18.446 5.158 19.044 5.63 18.966C5.381 18.81 5.287 18.635 5.255 18.48C5.374 17.923 5.533 17.286 5.533 17.286C5.533 17.286 6.057 17.709 6.082 18.26C6.102 18.724 5.978 19.348 5.895 19.266C6.373 19.598 6.864 19.882 7.53 20.109C7.169 19.944 6.905 19.68 6.81 19.6C6.704 18.901 6.879 18.189 6.879 18.189C6.879 18.189 7.479 18.523 7.602 19.244C7.889 19.613 7.618 20.044 7.569 20.201C8.022 20.397 8.726 20.715 8.908 20.649C8.985 20.661 9.051 20.68 9.126 20.693C8.916 20.792 8.636 20.355 8.505 20.146C8.193 19.643 8.354 18.877 8.354 18.877C8.354 18.877 9.017 19.105 9.237 19.635C9.442 20.129 9.427 20.83 9.407 20.751C9.866 20.847 10.63 20.959 10.804 21.095C11.189 21.459 11.608 21.47 11.961 21.774C12.314 21.47 12.737 21.422 13.245 21.095C13.626 20.959 14.06 20.847 14.519 20.751C14.498 20.83 14.484 20.129 14.689 19.635C14.909 19.105 15.572 18.877 15.572 18.877C15.572 18.877 15.732 19.643 15.42 20.146C15.289 20.355 15.009 20.796 14.799 20.694C14.875 20.68 14.941 20.661 15.018 20.649C15.453 20.715 15.904 20.397 16.358 20.201C16.308 20.044 16.204 19.613 16.324 19.244C16.446 18.523 17.047 18.189 17.047 18.189C17.047 18.189 17.332 18.901 17.116 19.6C17.02 19.68 16.756 19.945 16.572 20.109C17.062 19.883 17.553 19.598 18.03 19.267C17.947 19.355 17.823 18.725 17.844 18.26C17.869 17.709 18.392 17.286 18.392 17.286C18.392 17.286 18.787 17.923 18.67 18.48C18.639 18.636 18.545 18.811 18.442 18.967C18.767 18.718 19.082 18.447 19.385 18.154C19.273 17.989 19.093 17.666 19.034 17.348C18.965 16.68 19.398 16.181 19.398 16.181C19.398 16.181 19.888 16.729 19.87 17.287C19.865 17.449 19.798 17.643 19.721 17.817C20.009 17.512 20.28 17.183 20.534 16.9C20.399 16.7 20.162 16.416 20.026 15.98C19.868 15.476 20.202 14.921 20.202 14.921C20.202 14.921 20.768 15.537 20.845 15.908C20.869 16.072 20.834 16.282 20.786 16.563C21.022 16.344 21.237 15.948 21.59 15.607C21.278 15.247 20.989 15.303 20.776 14.6C20.537 14.139 20.765 13.547 20.765 13.547C20.765 13.547 21.387 14.011 21.554 14.39C21.61 14.562 21.605 14.802 21.586 15.277C21.765 14.597 21.912 14.169 22.028 13.725C21.865 13.65 21.551 13.471 21.279 13.115C20.971 12.711 21.089 12.102 21.089 12.102C21.089 12.102 21.746 12.316 21.994 13.007C22.074 12.93 22.111 13.336 22.128 13.34C22.238 12.903 22.317 12.464 22.36 12.125C22.194 11.983 21.848 11.865 21.517 11.559C21.15 11.222 21.16 10.613 21.16 10.613C21.16 10.613 21.831 10.709 22.149 11.114C22.259 11.253 22.334 11.476 22.384 11.892C22.412 11.19 22.404 10.716 22.363 10.247C22.194 10.233 21.846 10.31 21.478 9.941C21.331 9.679 20.974 9.09 20.974 9.09C20.974 9.09 21.639 9.218 22.013 9.404C22.14 9.518 22.248 9.713 22.328 9.887C22.268 9.407 22.405 8.937 22.053 8.481C21.884 8.495 21.543 8.498 21.154 8.562C20.714 8.152 20.522 7.858 20.522 7.858C20.522 7.858 21.16 7.464 21.579 7.726C21.714 7.809 21.843 8.195 21.948 8.113C22.075 7.658 21.642 7.377 21.451 6.798C21.296 6.955 20.96 6.907 20.546 6.815C20.09 6.712 19.813 6.211 19.813 6.211C19.813 6.211 20.404 5.974 20.854 6.154C21.007 6.215 21.173 6.36 21.303 6.814C21.084 6.049 20.838 5.632 20.572 5.248C20.445 5.312 20.118 5.45 19.675 5.43C19.501 5.409 18.865 4.972 18.865 4.972C18.865 4.972 19.395 4.966 19.859 4.74C20.053 4.78 20.281 4.935 20.44 5.057C20.122 4.762 19.779 4.31 19.42 3.906C19.308 3.99 19.016 4.179 18.586 4.234C18.14 4.293 17.908 3.931 17.908 3.931C17.908 3.931 18.182 3.765 18.646 3.537C18.919 3.543 19.053 3.639 19.224 3.725C18.927 3.363 18.436 3.057 18.06 2.798C17.966 2.898 17.823 3.173 17.312 3.257C16.892 3.389 16.43 3.111 16.43 3.111C16.43 3.111 16.801 2.638 17.251 2.574C17.436 2.547 17.686 2.608 17.869 2.665C17.377 2.341 16.923 2.101 16.53 1.919C16.384 1.982 16.087 2.082 15.812 1.988C15.337 1.825 15.101 1.504 15.101 1.504C15.101 1.504 15.592 1.316 16.171 1.365C16.294 1.436 16.871 1.876 16.871 1.876C16.871 1.876 16.801 1.88 16.69 1.886C17.371 2.225 18.37 3.088 19.404 3.725ZM18.597 8.959C18.484 9.032 18.634 9.11 18.41 9.164L15.328 12.165L16.049 16.391C16.052 16.408 16.055 16.425 16.055 16.443C16.055 16.553 15.967 16.642 15.89 16.642C15.89 16.642 16.186 16.642 16.186 16.642C15.824 16.642 15.792 16.634 15.763 16.619L11.958 14.662L8.151 16.613C8.167 16.649 8.002 16.643 7.941 16.597C7.88 16.553 7.849 16.644 7.862 16.403L8.593 12.16L5.822 9.153C5.461 9.1 5.441 9.021 5.465 8.949C5.556 8.876 5.551 8.824 5.626 8.813L9.882 8.198L11.878 4.338C11.822 4.584 11.891 4.228 11.966 4.228L11.966 4.228C12.042 4.228 12.112 4.588 12.145 4.339L14.045 8.201L18.3 8.824C18.375 8.835 18.437 8.887 18.597 8.959ZM5.933 2.542C5.933 2.542 5.745 2.157 5.827 1.621C5.892 1.191 6.337 0.902 6.337 0.902C6.337 0.902 6.815 1.436 6.456 1.862C6.359 2.167 5.933 2.542 5.933 2.542ZM4.525 3.639C4.525 3.639 4.267 3.285 4.255 2.732C4.243 2.289 4.641 1.919 4.641 1.919C4.641 1.919 4.994 2.636 4.93 2.863C4.886 3.187 4.525 3.639 4.525 3.639ZM2.887 4.114C2.798 3.67 3.132 3.228 3.132 3.228C3.132 3.228 3.573 3.658 3.591 4.126C3.603 4.458 3.32 5.051 3.32 5.051C3.32 5.051 2.999 4.668 2.887 4.114ZM1.77 5.869C1.601 5.303 1.858 4.8 1.858 4.8C1.858 4.8 2.378 5.154 2.478 5.62C2.829 5.952 2.358 6.524 2.358 6.524C2.358 6.524 1.98 6.27 1.77 5.869ZM1.686 8.222C1.686 8.222 1.262 8.033 0.956 7.531C0.711 7.129 0.88 6.578 0.88 6.578C0.88 6.578 1.465 6.955 1.647 7.292C1.815 7.614 1.686 8.222 1.686 8.222ZM1.13 9.091C1.318 9.39 1.334 10.018 1.334 10.018C1.334 10.018 0.874 9.904 0.477 9.747C0.16 9.094 0.232 8.51 0.232 8.51C0.232 8.51 0.866 8.67 1.13 9.091ZM1.3 11.834C1.3 11.834 0.817 11.801 0.34 11.419C0.237 11.113 0 10.513 0 10.513C0 10.513 0.592 10.833 0.932 11.259C1.173 11.206 1.3 11.834 1.3 11.834ZM1.115 12.829C1.335 12.982 1.573 13.591 1.573 13.591C1.573 13.591 1.083 13.642 0.534 13.343C0.096 13.104 0.259 12.507 0.259 12.507C0.259 12.507 0.637 12.438 1.115 12.829ZM1.472 14.522C2.033 14.698 2.407 15.268 2.407 15.268C2.407 15.268 1.666 15.407 1.296 15.204C0.58 15.041 0.337 14.465 0.337 14.465C0.337 14.465 1.006 14.275 1.472 14.522ZM2.198 16.202C2.561 16.32 3.012 16.903 3.012 16.903C3.012 16.903 2.841 17.056 1.908 16.958C1.393 16.881 1.14 16.346 1.14 16.346C1.14 16.346 1.686 16.037 2.198 16.202ZM3.22 17.742C3.607 17.796 4.15 18.229 4.15 18.229C4.15 18.229 3.726 18.538 3.063 18.555C2.652 18.567 2.089 18.092 2.089 18.092C2.089 18.092 2.676 17.667 3.22 17.742ZM4.494 19.093C4.892 19.318 5.811 19.418 5.811 19.418C5.811 19.418 5.43 19.904 4.48 19.938C3.948 20.044 3.419 19.644 3.419 19.644C3.419 19.644 3.935 19.114 4.494 19.093ZM18.411 19.418C18.411 19.418 19.033 19.318 19.432 19.093C19.992 19.114 20.506 19.644 20.506 19.644C20.506 19.644 19.977 20.044 19.445 19.938C18.782 19.904 18.411 19.418 18.411 19.418ZM20.706 17.742C21.25 17.667 21.837 18.092 21.837 18.092C21.837 18.092 21.394 18.567 20.863 18.555C20.199 18.538 19.776 18.229 19.776 18.229C19.776 18.229 20.516 17.796 20.706 17.742ZM20.914 16.903C20.914 16.903 21.364 16.32 21.728 16.202C22.241 16.037 22.879 16.346 22.879 16.346C22.879 16.346 22.649 16.881 22.018 16.958C21.376 17.056 20.914 16.903 20.914 16.903ZM21.775 15.268C21.775 15.268 22.122 14.698 22.454 14.522C23.194 14.275 23.589 14.465 23.589 14.465C23.589 14.465 23.346 15.041 22.863 15.204C22.259 15.407 21.775 15.268 21.775 15.268ZM23.391 13.343C22.843 13.642 22.352 13.591 22.352 13.591C22.352 13.591 22.591 12.982 22.881 12.829C23.549 12.438 23.967 12.507 23.967 12.507C23.967 12.507 23.83 13.104 23.391 13.343ZM22.626 11.834C22.626 11.834 22.752 11.206 22.994 11.259C23.334 10.833 24 10.513 24 10.513C24 10.513 23.969 11.113 23.586 11.419C23.108 11.801 22.626 11.834 22.626 11.834Z"></path>
                    </svg>
                  </div>

                  <div className="inf mrg_lt-70">
                    <span className="fnt_t-5 fnt_tc-5">
                      Experts in Immigration
                    </span>

                    <div className="cnt-stl mrg_tp-10">
                      We practice exclusively in the area of immigration.
                    </div>
                  </div>
                </li>
                <li
                  className="flx-blk-500-mgd-l f_t mrg_tp-40 ta_c-500 anm_hlf-dn"
                  data-item="i"
                  data-key="28364"
                >
                  <div className="icn-bx flx f_m f_c fit rsp_img">
                    <svg
                      viewBox="0 0 24 24"
                      className="vls-icn clr-btn"
                      role="presentation"
                      data-use="/cms/svg/site/dycmgkz8j91.24.2208191902389.svg#accessible_rep"
                    >
                      <path d="M23.761 16.677L23.225 17.632C22.652 18.181 21.871 18.3 21.322 17.897L16.356 14.202C15.805 13.853 15.653 13.347 15.882 12.703L12.398 9.978L11.55 10.812C11.369 11.057 11.109 11.11 10.776 10.93L10.255 10.549L9.819 11.14C10.553 11.65 10.35 12.442 9.924 13.019L9.815 13.168C9.331 13.823 8.542 14.016 7.739 13.484L4.43 11.057C3.772 10.575 3.63 9.643 4.113 8.987L4.223 8.839C4.882 8.261 5.424 8.082 6.052 8.378L6.488 7.786L5.967 7.404C5.722 7.489 5.669 6.877 5.849 6.632L8.145 3.517C8.325 3.272 8.673 3.219 8.919 3.399L9.439 3.781L9.83 3.251C9.359 2.741 9.299 2.096 9.725 1.372L9.835 1.224C10.319 0.568 11.252 0.48 11.91 0.907L15.219 3.334C15.877 4.151 16.019 4.748 15.664 5.404L15.427 5.552C15 6.13 14.225 6.309 13.597 6.014L13.207 6.543L13.728 6.925C13.973 7.105 14.101 7.453 13.846 7.698L13.185 8.593L16.903 11.319C17.331 10.946 17.979 10.902 18.456 11.251L23.496 14.948C24.045 15.351 24.165 16.129 23.761 16.677ZM5.369 18.776C5.37 18.83 5.348 19.203 5.31 18.92L5.068 19.161C4.992 19.387 4.857 19.387 4.781 19.161L3.044 17.431C3.005 17.392 2.984 17.341 2.984 17.286C2.984 17.233 3.005 17.183 3.044 17.146L3.288 16.903C3.325 16.866 3.375 16.846 3.429 16.846C3.483 16.846 3.534 16.867 3.574 16.905L5.311 18.635C5.348 18.673 5.369 18.722 5.369 18.776ZM7.203 19.221C7.035 19.221 7.103 19.086 7.103 18.92L7.103 15.884C7.103 15.678 7.035 15.544 7.203 15.544L7.674 15.544C7.801 15.544 7.938 15.678 7.938 15.884L7.938 18.92C7.938 19.086 7.801 19.221 7.674 19.221L7.203 19.221ZM9.77 19.161L9.685 18.918C9.487 19.191 9.465 18.829 9.465 18.776C9.465 18.722 9.487 18.673 9.696 18.634L11.263 16.905C11.301 16.866 11.351 16.846 11.575 16.846C11.461 16.846 11.512 16.867 11.551 16.905L12.083 17.147C11.832 17.183 11.853 17.233 11.853 17.286C11.853 17.342 11.832 17.393 12.079 17.431L10.054 19.163C9.979 19.39 9.847 19.383 9.77 19.161ZM11.561 20.594C13.394 20.594 15.039 21.742 15.567 23.355L0 23.355C0.262 21.742 1.908 20.594 3.742 20.594L11.561 20.594Z"></path>
                    </svg>
                  </div>

                  <div className="inf mrg_lt-70">
                    <span className="fnt_t-5 fnt_tc-5">
                      Accessible Representation
                    </span>

                    <div className="cnt-stl mrg_tp-10">
                      We are committed to providing personal attention to each
                      of our clients' needs.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="half">
            <header className="mrg_bt-70" id="ContactV2FormHeader">
              <h4>
                Contact Us Today to
                <u>Take Control of Your Journey</u>
              </h4>

              <strong> </strong>
            </header>
            <div className="ctc-zn" id="ContactV2Zone">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="_m_" value="ContactForm" />
                <div id="ContactForm1" className="ctc-sys v1 ui-repeater">
                  <fieldset data-item="i" data-key="">
                    <ul className="flx-grd-sml-blk-500 cls-gp-500">
                      <li className="half">
                        <div className="input-text">
                          <label htmlFor="ContactForm1_ITM0_FirstName">
                            First Name
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
                            Last Name
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
                          <label htmlFor="ContactForm1_ITM0_Phone">Phone</label>
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
                            Email
                          </label>
                          <input
                            type="text"
                            className="ui-cms-input"
                            {...register("email", {
                              required: true,
                              pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                            Are you a new client?
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
                            How can we help you?
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
      </div>
    </section>
  );
};
