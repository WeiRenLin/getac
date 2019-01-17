<template>
  <div class="loginin " style="min-height:723px">
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

        <div id="contentcontainer">
          <div>
            <section
              class="contentinnerwrapper col-sm-12 col-md-12 col-lg-12"
            >
                <div class="innercontentcontainer">
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12 loginintro" style>
                        On Dec. 19th from 8AM-1PM (London GMT) our Partner Portal will be unavailable because of routine system upgrades.
                        We apologize for any inconvenience that will cause. Partner Portal will be back up and running after.
                        Thank you for your patience. If you require immediately assistance please contact your sales.
                      </div>
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-sm-offset-0  col-lg-offset-4  loginright" style="">
                        <div>
                          <h1>Welcome to the
                            <br>
                            <span>
                              Getac Partner
                              Portal
                            </span>
                          </h1>
                          <div class="loginBox">
                            <loginform></loginform>
                          </div>
                        </div>
                  </div>
                </div>
            </section>
          </div>
        </div>
  </div>
</template>

<script>
import loginform from "./loginForm";
export default {
  name: "welcome",
  components: {
    loginform
  },
  props: {},
  methods: {
    loginWithService(service) {
      alert();
      window.open(
        "/social/ServiceAccess.cfm?redirect=451&s=" + service,
        service + "Login",
        "width=800px,height=500px"
      );
    }
  }
};
</script>

