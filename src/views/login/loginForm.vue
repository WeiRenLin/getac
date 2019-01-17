<template>
  <div>
    <form
      action="https://getac.portal.relayware.com/et.cfm?"
      method="post"
      name="loginform"
      id="loginForm"
    >
      <input type="hidden" name="_rwsessiontoken" value="E1CB46ADAD12A2FDF112F77DE9496589A061">
      <div id="loginWithService">
        <div id="loginWithServiceDescription">
          Unlock powerful extra
          features by logging in with LinkedIn.
        </div>
        
      </div>
        <div id="loginimage" class=" d-lg-none d-md-block d-sm-block">
          <img src="../../../public/image/getac.png" alt="getac">
        </div>
      <div class="logintextbox">
           <div class="loginUsername row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <input
                  id="partnerusername"
                  name="partnerusername"
                  class="text form-control"
                  type="text"
                  placeholder="Username"
                >
            </div>
          </div>
        <div class="loginPassword row">
          <div class="col-sm-12 col-md-12 col-lg-12">
              <input
                id="partnerpassword"
                name="partnerpassword"
                class="text form-control"
                type="password"
                placeholder="密碼"
              >
          </div>
        </div>
      </div>
       
          <div class="loginbutton">
                <div class="row">
                <div class="col signinbutton">
                  <router-link  to="/signin">
                  <button id="myButton" class="btn btn-primary ui-link registerSubmitButton">SIGN IN</button>
                  </router-link>
                </div>
                <div class="col registerbutton">
                  <router-link  to="/registerpart1">
                  <button id="myButton" class="btn btn-primary ui-link registerSubmitButton">Register</button>
                  </router-link>
                </div>
              </div>
          </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 forgetpd" align="center">
          <router-link to="/resetpd">
            Forgot your password?
          </router-link>
        </div>
    </form>
  </div>
</template>
<script>
import resetpd from '../../views/login/resetpd'
export default {
  components:{
    resetpd
  }
}
</script>