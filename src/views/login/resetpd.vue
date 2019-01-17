<template>
  <div style="min-height: 674px;">
    <div id="cookiescontainer">
      <div class="cookiesText container">
        <div class="row">
          <div class="col-sm-12 col-md-9 col-lg-10">
            本網站使用cookies以提供更好的瀏覽體驗。如需了解更多關於本網站如何使用cookies 請按
            <a href class="ui-link">這裏。</a>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-2">
            <button
              type="button"
              class="cookiesAccept btn btn-primary ui-btn ui-shadow ui-corner-all"
            >Accept Cookies</button>
          </div>
        </div>
      </div>
    </div>
    <div id="headercontainer">
      <div id="headerContainerInner">
        <div id="headmainheader">
          <div id="mainHeaderContainer" class="container">
            <div id="searchHeader" class="row hidden-xs">
              <div class="col-xs-12"></div>
            </div>
            <header id="mainHeader" class="headerTop">
              <div class="col-sm-`12`" id="mainNavigation">
                <b-navbar type="dark" toggleable="md" style>
                  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                  <b-navbar-brand>
                    <router-link to="/login" class="logo ui-link">
                      <img src="../../../public/image/getacLogo.png">
                    </router-link>
                  </b-navbar-brand>

                  <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                      <b-nav-item href="/registerpart1">申請帳戶</b-nav-item>
                      <b-nav-item href="/about">關於</b-nav-item>
                      <b-nav-item-dropdown text="合作夥伴方案" class="active">
                        <b-dropdown-item href="/partner">合作夥伴方案</b-dropdown-item>
                        <b-dropdown-item href="/advantage">合作夥伴優勢</b-dropdown-item>
                      </b-nav-item-dropdown>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
              </div>
            </header>
          </div>
        </div>
        <div id="subheadcontainer">
          <div class="container">
            <div class="row">
              <div id="subheader" class="col-xs-12 col-lg-12  headsubheader" style>
                <div>
                  <h1 class>合作夥伴方案</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="contentcontainer">
      <div class="container">
        <div class="row">
          <div id="subheader" class="col-xs-12 col-lg-12 resetpdcontainer" style>
            <div>
              <p for="" style="color:#8f8f8f">Please enter your email address:</p>
              <label for="" class="required" style="color: #000;">電子郵件地址:</label>
              <input
                class="form-control"
                name="resetemail"
                orgtypeid="1"
                validateat="onSubmit,onServer"
                label="電子郵件地址"
                message="電子郵件地址 must be a valid email address format"
                required="yes"
                id="resetemail"
                size="30"
              >
            </div>
            <div class="form-group" id="addbutton">
            <button type="button" class="btn btn-primary ui-btn ui-shadow ui-corner-all">繼續</button>
        </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footercontainer">
      <div class="footercontainerinner">
        <footer id="footerwrapper" class="footerwrapper">
          <div class="container">
            <div class="footercontainertop">
              <div class="row">
                <div class="contactdiv col-lg-7 col-md-7 col-sm-12">
                  <img src="../../../public/image/logo_gray.png">
                  <h3>Contact Us</h3>
                </div>
                <div class="socialdiv col col-lg-5 col-md-5">
                  <ul id="socialdivUl" class="float-lg-right text-center">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/getac"
                        target="_blank"
                        id="linkedin-link"
                        class="social-link ui-link"
                      >
                        <svg
                          height="20"
                          width="20"
                          viewBox="0 0 260.366 260.366"
                          style="enable-background:new 0 0 97.75 97.75;"
                          xml:space="preserve"
                        >
                          <g id="linkedin-icon" class="social-icon" style="background: #fff;">
                            <path
                              d="M34.703,0.183C15.582,0.183,0.014,15.748,0,34.884C0,54.02,15.568,69.588,34.703,69.588	c19.128,0,34.688-15.568,34.688-34.704C69.391,15.75,53.83,0.183,34.703,0.183z"
                            ></path>
                            <path
                              d="M60.748,83.531H8.654c-2.478,0-4.488,2.009-4.488,4.489v167.675c0,2.479,2.01,4.488,4.488,4.488h52.093	c2.479,0,4.489-2.01,4.489-4.488V88.02C65.237,85.539,63.227,83.531,60.748,83.531z"
                            ></path>
                            <path
                              d="M193.924,81.557c-19.064,0-35.817,5.805-46.04,15.271V88.02c0-2.48-2.01-4.489-4.489-4.489H93.424	c-2.479,0-4.489,2.009-4.489,4.489v167.675c0,2.479,2.01,4.488,4.489,4.488h52.044c2.479,0,4.489-2.01,4.489-4.488v-82.957	c0-23.802,4.378-38.555,26.227-38.555c21.526,0.026,23.137,15.846,23.137,39.977v81.535c0,2.479,2.01,4.488,4.49,4.488h52.068	c2.478,0,4.488-2.01,4.488-4.488v-91.977C260.366,125.465,252.814,81.557,193.924,81.557z"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/getac.rugged.solutions"
                        target="_blank"
                        id="facebook-link"
                        class="social-link ui-link"
                      >
                        <svg
                          height="20"
                          width="20"
                          viewBox="0 0 502.642 502.642"
                          style="enable-background:new 0 0 97.75 97.75;"
                          xml:space="preserve"
                        >
                          <g id="facebook-icon" class="social-icon">
                            <path
                              d="M379.247,179.534h-92.043v-44.867c0,0-5.155-42.667,24.677-42.667c33.715,0,60.635,0,60.635,0V0 H269.279c0,0-86.391-0.367-86.391,86.391c0,18.637-0.086,52.568-0.216,93.143h-59.277v74.074h59.125 c-0.345,117.776-0.755,249.035-0.755,249.035h105.438V253.608h69.587L379.247,179.534z"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://plus.google.com/105998142808766552971"
                        target="_blank"
                        id="google-link"
                        class="social-link ui-link"
                      >
                        <svg
                          height="20"
                          width="20"
                          viewBox="0 0 96.669 96.669"
                          style="enable-background:new 0 0 97.75 97.75;"
                          xml:space="preserve"
                        >
                          <g id="google-icon" class="social-icon">
                            <path
                              d="M50.91,55.189l-4.533-3.522c-1.38-1.144-3.27-2.656-3.27-5.422c0-2.778,1.889-4.544,3.527-6.18	c5.279-4.157,10.557-8.581,10.557-17.903c0-9.586-6.031-14.629-8.923-17.022h7.795L64.244,0H39.459		C32.658,0,22.856,1.608,15.68,7.533c-5.408,4.666-8.046,11.099-8.046,16.892c0,9.831,7.548,19.798,20.88,19.798	c1.259,0,2.636-0.124,4.022-0.252c-0.623,1.515-1.252,2.777-1.252,4.917c0,3.905,2.006,6.299,3.774,8.567	c-5.663,0.39-16.237,1.018-24.033,5.809c-7.424,4.415-9.684,10.84-9.684,15.377c0,9.334,8.8,18.028,27.045,18.028	c21.636,0,33.089-11.971,33.089-23.823C61.477,64.139,56.447,59.854,50.91,55.189z M34.431,40.691	c-10.824,0-15.727-13.992-15.727-22.434c0-3.288,0.623-6.682,2.763-9.333C23.486,6.4,27,4.762,30.281,4.762	c10.434,0,15.846,14.118,15.846,23.197c0,2.271-0.251,6.296-3.144,9.207C40.96,39.187,37.574,40.691,34.431,40.691z	 M34.555,91.387c-13.46,0-22.139-6.438-22.139-15.392c0-8.949,8.048-11.978,10.816-12.979c5.281-1.777,12.076-2.024,13.21-2.024	c1.258,0,1.887,0,2.889,0.126c9.568,6.81,13.721,10.203,13.721,16.65C53.053,85.573,46.635,91.387,34.555,91.387z"
                            ></path>
                            <polygon
                              points="82.679,40.499 82.679,27.894 76.455,27.894 76.455,40.499 63.869,40.499 63.869,46.793 76.455,46.793 	76.455,59.477 82.679,59.477 82.679,46.793 95.328,46.793 95.328,40.499 		"
                            ></polygon>
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/user/GetacRuggedSolutions"
                        target="_blank"
                        id="youtube-link"
                        class="social-link ui-link"
                      >
                        <svg
                          height="20"
                          width="20"
                          viewBox="0 0 18.875 18.875"
                          style="enable-background:new 0 0 97.75 97.75;"
                          xml:space="preserve"
                        >
                          <g id="youtube-icon" class="social-icon">
                            <path
                              d="M17.905,10.877v5.564c0,0.348-0.073,0.665-0.221,0.956c-0.147,0.293-0.348,0.549-0.603,0.769	c-0.254,0.221-0.547,0.392-0.88,0.519c-0.335,0.126-0.695,0.19-1.083,0.19H3.745c-0.379,0-0.736-0.064-1.07-0.19	c-0.334-0.127-0.628-0.298-0.881-0.519c-0.252-0.22-0.455-0.476-0.604-0.769c-0.147-0.291-0.22-0.608-0.22-0.956v-5.564	c0-0.33,0.073-0.645,0.221-0.944c0.148-0.3,0.352-0.559,0.604-0.773c0.253-0.215,0.547-0.39,0.881-0.52s0.691-0.196,1.07-0.196	h11.373c0.379,0,0.737,0.066,1.076,0.196c0.338,0.13,0.633,0.305,0.887,0.52c0.255,0.215,0.455,0.474,0.603,0.773	S17.905,10.547,17.905,10.877z M4.507,17.062v-5.869h1.395v-0.887H2.136v0.862h1.207v5.894H4.507z M5.076,3.409L3.517,0h1.357	L5.65,2.548L6.423,0h1.355l-1.46,3.409v3.97H5.076V3.409z M8.741,12.055H7.576v3.133c0,0.227,0.002,0.403,0.011,0.524	c0.008,0.124-0.009,0.202-0.051,0.235c-0.035,0.135-0.133,0.234-0.3,0.298c-0.161,0.062-0.286-0.026-0.373-0.273	c-0.018-0.033-0.02-0.116-0.011-0.246c0.008-0.132,0.011-0.303,0.011-0.515l-0.024-3.156H5.673L5.7,15.162	c0,0.244-0.006,0.448-0.014,0.613S5.68,16.064,5.7,16.149c0.016,0.137,0.031,0.281,0.049,0.438		c0.016,0.155,0.096,0.281,0.242,0.374c0.135,0.084,0.293,0.128,0.473,0.128c0.184,0,0.362-0.031,0.534-0.091	c0.175-0.06,0.333-0.141,0.481-0.245c0.147-0.105,0.256-0.219,0.322-0.337l-0.023,0.62l0.963,0.025V12.055z M7.675,3.93	c0-0.465,0.045-0.851,0.127-1.152C7.906,2.464,8.069,2.24,8.298,2.104C8.527,1.935,8.818,1.85,9.173,1.85	c0.312,0,0.572,0.052,0.786,0.152c0.21,0.085,0.384,0.232,0.519,0.444c0.102,0.154,0.179,0.325,0.229,0.521	c0.048,0.211,0.075,0.494,0.075,0.85v1.329c0,0.483-0.027,0.829-0.075,1.042c-0.02,0.193-0.102,0.409-0.256,0.646	c-0.151,0.21-0.315,0.35-0.492,0.418C9.745,7.354,9.507,7.403,9.235,7.403c-0.276,0-0.533-0.042-0.759-0.127	c-0.213-0.067-0.37-0.19-0.469-0.366C7.906,6.772,7.82,6.584,7.751,6.338c-0.049-0.23-0.076-0.573-0.076-1.039V3.93z M8.715,5.996	c0,0.135,0.051,0.256,0.153,0.362c0.1,0.104,0.224,0.157,0.366,0.157c0.134,0,0.256-0.05,0.362-0.152	c0.106-0.1,0.157-0.224,0.157-0.367V3.245c0-0.152-0.051-0.279-0.157-0.385C9.491,2.754,9.368,2.7,9.235,2.7	c-0.135,0-0.256,0.054-0.36,0.16c-0.106,0.106-0.16,0.233-0.16,0.385V5.996z M12.505,15.63v-2.599c0-0.498-0.176-0.854-0.53-1.064	c-0.118-0.067-0.256-0.102-0.407-0.102c-0.28,0-0.6,0.131-0.963,0.393v-1.952H9.439v6.706l0.964-0.025l0.075-0.418	c0.313,0.263,0.596,0.423,0.843,0.482c0.251,0.058,0.46,0.035,0.634-0.071c0.174-0.104,0.309-0.277,0.405-0.52	C12.456,16.22,12.505,15.941,12.505,15.63z M11.1,12.512c0.135,0,0.253,0.04,0.36,0.121c0.105,0.08,0.158,0.171,0.158,0.271v2.942	c0,0.101-0.053,0.188-0.158,0.265c-0.107,0.076-0.226,0.115-0.36,0.115c-0.137,0-0.256-0.039-0.364-0.115	c-0.104-0.076-0.155-0.164-0.155-0.265v-2.942c0-0.101,0.052-0.191,0.155-0.271C10.844,12.552,10.963,12.512,11.1,12.512z	 M11.643,6.859c-0.03-0.068-0.054-0.14-0.062-0.21c-0.01-0.071-0.021-0.142-0.04-0.209c-0.016-0.085-0.024-0.199-0.024-0.344V5.54	V2.055h1.09v4.03c0,0.103,0.037,0.189,0.113,0.267c0.079,0.075,0.178,0.114,0.305,0.114c0.119,0,0.22-0.039,0.304-0.114	c0.086-0.077,0.13-0.164,0.13-0.267v-4.03h1.011v5.172h-1.29l0.023-0.418c-0.119,0.168-0.231,0.3-0.342,0.392	c-0.135,0.084-0.282,0.127-0.444,0.127c-0.193,0-0.355-0.043-0.482-0.127C11.824,7.126,11.727,7.011,11.643,6.859z M16.181,15.302	h-0.873v0.126v0.443c0,0.136-0.049,0.24-0.146,0.316c-0.097,0.077-0.213,0.113-0.347,0.113h-0.181	c-0.134,0-0.244-0.036-0.334-0.113c-0.089-0.076-0.135-0.181-0.135-0.316v-0.05v-0.495v-0.66h2.016v-0.697	c0-0.261-0.004-0.513-0.013-0.753c-0.008-0.242-0.028-0.43-0.062-0.563c-0.034-0.23-0.136-0.414-0.312-0.553	c-0.172-0.139-0.374-0.234-0.607-0.284c-0.232-0.053-0.469-0.061-0.711-0.026c-0.24,0.034-0.447,0.113-0.628,0.24	c-0.226,0.152-0.39,0.36-0.493,0.623c-0.102,0.26-0.152,0.624-0.152,1.09v1.56c0,0.657,0.175,1.128,0.521,1.406	c0.32,0.261,0.657,0.393,1.012,0.393c0.035,0,0.068,0,0.104,0c0.398-0.024,0.748-0.194,1.053-0.507	c0.228-0.228,0.342-0.529,0.342-0.899C16.222,15.576,16.208,15.444,16.181,15.302z M15.281,13.816h-1.115l0.025-0.619	c0-0.136,0.051-0.246,0.152-0.337c0.102-0.089,0.223-0.134,0.369-0.134h0.051c0.15,0,0.279,0.043,0.386,0.127	c0.104,0.085,0.159,0.199,0.159,0.344L15.281,13.816z"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="footercontainerbottom">
              <div class="row">
                <div class="copyright col-lg-7 col-md-7 col-sm-12 float-sm-left">
                  <ul>
                    <li id="copyWrite">Copyright © Getac Technology Corporation 及/或其任何關係企業。保留一切權利。</li>
                  </ul>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-5 float-lg-left">
                  <nav id="navigation" rol="navigation">
                    <a href="site_map.html" class="ui-link">網站地圖</a>
                    <span>|</span>
                    <a href="privacy_policy.html" class="ui-link">隱私權政策</a>
                    <span>|</span>
                    <a href="terms_and_conditions.html" class="ui-link">使用條款</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <!-- END ROW -->
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { locale: "en" };
  },
  components: {},
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    }
  }
};
</script>
<i18n>
{
  "en": {
    "hello": "hello world!"
  },
  "ja": {
    "hello": "こんにちは、世界！"
  }
}
</i18n>