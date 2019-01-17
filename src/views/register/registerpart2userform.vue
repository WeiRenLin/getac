<template>
  <div>
  
    <form method="POST" name="details" novalidate="true">
      <input type="hidden" name="_rwsessiontoken" value="E1CB46ADAD12A2FDF112F77DE9496589A061">
      <div>
        <div class="form-group">
          <label>稱謂:</label>
          <div class="ui-select">
            <select
              class="form-control"
              validateat="onSubmit,onServer"
              label="usertitle"
              id="title"
              size="1"
              name="usertitle"
              data-nullvalue
            >
              <option value title="請選擇稱謂">請選擇稱謂</option>
              <option value="先生" title="先生">先生</option>
              <option value="夫人" title="夫人">夫人</option>
              <option value="女士" title="女士">女士</option>
              <option value="小姐" title="小姐">小姐</option>
            </select>
          </div>
        </div>
        <div class="form-group" id>
          <label class="required">名字:</label>
          <div class="ui-select">
            <div>
              <input
                class="form-control"
                name="userfirstname"
                orgtypeid="1"
                validateat="onSubmit,onServer"
                label="名字"
                message="名字 must be a valid email address format"
                required="yes"
                id="userfirstname"
                size="30"
              >
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="required">姓氏:</label>
          <div>
            <input
              class="form-control"
              name="userlastname"
              orgtypeid="1"
              validateat="onSubmit,onServer"
              label="姓氏"
              message="姓氏 must be a required field"
              required="yes"
              id="userlastname"
              size="30"
            >
          </div>
        </div>
        <div class="form-group">
          <label class="required">電子郵件:</label>
          <div>
            <input
              class="form-control"
              name="useremail"
              orgtypeid="1"
              validateat="onSubmit,onServer"
              label="電子郵件"
              validate="useremail"
              blacklist="@panasonic.com|@dell.com|@xploretech.com|@motioncomputing.com|@mymiltope.com|@winmate.com.tw|@ruggedtabletpc.com|@conkertab.com|@ruggon.com|@advantech.com.tw|@amrel.com|@durabook.com|@handheldgroup.com|@arbor-technology.com|@ruggedbook.com.tw|@bluebirdcorp.com|@dtresearch.com|@tablettechnologies.com|@crete.com.tw|@roda-compuer.com|@mildef.com|@ts.ru|@bancolini.com|@sia-pen.it|@Panasonic.be|@Panasonic.ch|@Panasonic.co.uk|@Panasonic.com.tr|@Panasonic.cz|@Panasonic.de|@Panasonic.dk|@Panasonic.es|@Panasonic.fi|@Panasonic.fr|@Panasonic.hu|@Panasonic.it|@Panasonic.lu|@Panasonic.nl|@Panasonic.no|@Panasonic.pl|@Panasonic.pt|@Panasonic.ru|@Panasonic.se|@Panasonic.sk|@Toughbook.co.uk|@Toughbook.com|@Toughbook.de|@Toughbook.eu|@Toughbook.fr|@Toughbook.it|@zebra.com|@hotmail.com|@live.com|@outlook.com|@msn.com|@yahoo.com|@qq.com|@yandex.com|@mail.com|@katamail.com|@live.it|@msn.it|@hotmail.it|@gmail.it|@yahoo.it|@libero.it|@alice.it|@aliceposta.it|@virgilio.it|@tiscali.it|@email.it|@tiscalinet.it|@iol.it|@tin.it|@tim.it|@vodafone.it|@fastwebnet.it|@infostrada.it|@inwind.it|@dccdesigns.com|@reshy.com|@gmail.com"
              onvalidate="validateEmail"
              personid="0"
              maxlength="50"
              message="電子郵件 must be a required field"
              required="yes"
              id="useremail"
              uniqueemail="true"
              size="30"
              uniqueemailmessage="The email you have entered already exists in the system. Please re-enter a different one"
              type="email"
              disabled
            >
          </div>
          <input
            name="useremail_required"
            value="電子郵件 must be a required field"
            id="useremail_required"
            type="hidden"
          >
        </div>
        <div class="form-group">
          <label class="required">主要電話:</label>
          <div>
            <input
              class="form-control"
              name="usertelephone"
              orgtypeid="1"
              validateat="onSubmit,onServer"
              label="主要電話"
              message="主要電話 must be a required field"
              required="yes"
              id="usertelephone"
              size="30"
            >
          </div>
        </div>
        <div class="form-group">
          <label>手機:</label>
          <div>
            <input
              class="form-control"
              name="userphone"
              orgtypeid="1"
              validateat="onSubmit,onServer"
              label="手機"
              message="手機 must be a required field"
              required="yes"
              id="userphone"
              size="30"
            >
          </div>
        </div>
        <div class="form-group">
          <label class="required">工作職能:</label>
          <div class="ui-select">
            <select class="form-control" id="userworkcompetency" name="userworkcompetency">
              <option value="3302">工程/開發</option>
              <option value="3303">財務/會計</option>
              <option value="3304">IT</option>
              <option value="3305">行銷</option>
              <option value="3306">營運/服務</option>
              <option value="3307">其他</option>
              <option value="3309">專案管理</option>
              <option value="3310">採購</option>
              <option value="3311">銷售</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>郵寄街道:</label>
          <div>
            <input
              class="form-control"
              name="userstreet"
              orgtypeid="1"
              validateat="onSubmit,onServer"
              label="郵寄街道"
              message="郵寄街道 must be a required field"
              required="yes"
              id="userstreet"
              size="30"
            >
          </div>
        </div>
        <div class="form-group">
          <label>郵寄縣市:</label>
          <div>
            <input
              class="form-control"
              name="usercounty"
              orgtypeid="1"
              validateat="onSubmit,onServer"
              label="郵寄縣市"
              message="郵寄縣市 must be a required field"
              required="yes"
              id="usercounty"
              size="30"
            >
          </div>
        </div>
        <div class="form-group">
          <label>郵寄郵遞區號:</label>
          <div>
            <input
              class="form-control"
              name="userpostalcode"
              orgtypeid="1"
              validateat="onSubmit,onServer"
              label="郵寄郵遞區號"
              message="郵寄郵遞區號 must be a required field"
              required="yes"
              id="userpostalcode"
              size="30"
            >
          </div>
        </div>
        <div class="form-group">
          <label>郵寄國家/地區 :</label>
          <div>
            <select class="form-control" id="userpostcountry" name="userpostcountry">
              <option value>Please Select Country</option>
              <option value="3334">Afghanistan</option>
              <option value="3335">Aland Islands</option>
              <option value="3336">Albania</option>
              <option value="3337">Algeria</option>
              <option value="3338">Andorra</option>
              <option value="3339">Angola</option>
              <option value="3340">Anguilla</option>
              <option value="3341">Antarctica</option>
              <option value="3342">Antigua and Barbuda</option>
              <option value="3343">Argentina</option>
              <option value="3344">Armenia</option>
              <option value="3345">Aruba</option>
              <option value="3346">Australia</option>
              <option value="3347">Austria</option>
              <option value="3348">Azerbaijan</option>
              <option value="3349">Bahamas</option>
              <option value="3350">Bahrain</option>
              <option value="3351">Bangladesh</option>
              <option value="3352">Barbados</option>
              <option value="3353">Belarus</option>
              <option value="3354">Belgium</option>
              <option value="3355">Belize</option>
              <option value="3356">Benin</option>
              <option value="3357">Bermuda</option>
              <option value="3358">Bhutan</option>
              <option value="3359">Bolivia</option>
              <option value="3361">Bosnia and Herzegovina</option>
              <option value="3362">Botswana</option>
              <option value="3363">Bouvet Island</option>
              <option value="3364">Brazil</option>
              <option value="3365">British Indian Ocean Territory</option>
              <option value="3367">Bulgaria</option>
              <option value="3368">Burkina Faso</option>
              <option value="3369">Burundi</option>
              <option value="3370">Cambodia</option>
              <option value="3371">Cameroon</option>
              <option value="3372">Canada</option>
              <option value="3373">Cape Verde</option>
              <option value="3374">Cayman Islands</option>
              <option value="3375">Central African Republic</option>
              <option value="3376">Chad</option>
              <option value="3377">Chile</option>
              <option value="3378">China</option>
              <option value="3379">Christmas Island</option>
              <option value="3380">Cocos (Keeling) Islands</option>
              <option value="3381">Colombia</option>
              <option value="3382">Comoros</option>
              <option value="3383">Congo</option>
              <option value="3385">Cook Islands</option>
              <option value="3386">Costa Rica</option>
              <option value="3387">Cote d’Ivoire</option>
              <option value="3388">Croatia</option>
              <option value="3389">Cuba</option>
              <option value="3391">Cyprus</option>
              <option value="3392">Czech Republic</option>
              <option value="3393">Denmark</option>
              <option value="3394">Djibouti</option>
              <option value="3395">Dominica</option>
              <option value="3396">Dominican Republic</option>
              <option value="3397">Ecuador</option>
              <option value="3398">Egypt</option>
              <option value="3399">El Salvador</option>
              <option value="3401">Equatorial Guinea</option>
              <option value="3402">Eritrea</option>
              <option value="3403">Estonia</option>
              <option value="3404">Ethiopia</option>
              <option value="3405">flag Mailing Country Falkland Islands</option>
              <option value="3406">Faroe Islands</option>
              <option value="3407">Fiji</option>
              <option value="3408">Finland</option>
              <option value="3409">France</option>
              <option value="3410">French Guiana</option>
              <option value="3411">French Polynesia</option>
              <option value="3412">French Southern Territories</option>
              <option value="3413">Gabon</option>
              <option value="3414">Gambia</option>
              <option value="3415">Georgia</option>
              <option value="3416">Germany</option>
              <option value="3417">Ghana</option>
              <option value="3418">Gibraltar</option>
              <option value="3419">Greece</option>
              <option value="3420">Greenland</option>
              <option value="3421">Grenada</option>
              <option value="3422">Guadeloupe</option>
              <option value="3423">Guam</option>
              <option value="3424">Guatemala</option>
              <option value="3426">Guinea</option>
              <option value="3427">Guinea-Bissau</option>
              <option value="3428">Guyana</option>
              <option value="3429">Haiti</option>
              <option value="3430">Heard Island and McDonald Islands</option>
              <option value="3431">Holy See (Vatican City State)</option>
              <option value="3432">Honduras</option>
              <option value="3433">Hong Kong</option>
              <option value="3434">Hungary</option>
              <option value="3435">Iceland</option>
              <option value="3436">India</option>
              <option value="3437">Indonesia</option>
              <option value="3438">Iran</option>
              <option value="3439">Iraq</option>
              <option value="3440">Ireland</option>
              <option value="3442">Israel</option>
              <option value="3443">Italy</option>
              <option value="3444">Jamaica</option>
              <option value="3445">Japan</option>
              <option value="3447">Jordan</option>
              <option value="3448">Kazakhstan</option>
              <option value="3449">Kenya</option>
              <option value="3450">Kiribati</option>
              <option value="3451">Kuwait</option>
              <option value="3452">Kyrgyzstan</option>
              <option value="3454">Latvia</option>
              <option value="3455">Lebanon</option>
              <option value="3456">Lesotho</option>
              <option value="3457">Liberia</option>
              <option value="3458">flag Mailing Country Libya</option>
              <option value="3459">Liechtenstein</option>
              <option value="3460">Lithuania</option>
              <option value="3461">Luxembourg</option>
              <option value="3462">flag Mailing Country Macau</option>
              <option value="3463">flag Mailing Country Macedonia</option>
              <option value="3464">Madagascar</option>
              <option value="3465">Malawi</option>
              <option value="3466">Malaysia</option>
              <option value="3467">Maldives</option>
              <option value="3468">Mali</option>
              <option value="3469">Malta</option>
              <option value="3470">Martinique</option>
              <option value="3471">Mauritania</option>
              <option value="3472">Mauritius</option>
              <option value="3473">Mayotte</option>
              <option value="3474">Mexico</option>
              <option value="3475">flag Mailing Country Moldova</option>
              <option value="3476">Monaco</option>
              <option value="3477">Mongolia</option>
              <option value="3478">Montenegro</option>
              <option value="3479">Montserrat</option>
              <option value="3480">Morocco</option>
              <option value="3481">Mozambique</option>
              <option value="3482">Myanmar</option>
              <option value="3483">Namibia</option>
              <option value="3484">Nauru</option>
              <option value="3485">Nepal</option>
              <option value="3486">Netherlands</option>
              <option value="3487">New Caledonia</option>
              <option value="3488">New Zealand</option>
              <option value="3489">Nicaragua</option>
              <option value="3490">Niger</option>
              <option value="3491">Nigeria</option>
              <option value="3492">Niue</option>
              <option value="3493">Norfolk Island</option>
              <option value="3494">North Korea</option>
              <option value="3495">Norway</option>
              <option value="3496">Oman</option>
              <option value="3497">Pakistan</option>
              <option value="3498">flag Mailing Country Palestinian Occupied Territories</option>
              <option value="3499">Panama</option>
              <option value="3500">Papua New Guinea</option>
              <option value="3501">Paraguay</option>
              <option value="3502">Peru</option>
              <option value="3503">Philippines</option>
              <option value="3505">Poland</option>
              <option value="3506">Portugal</option>
              <option value="3507">Puerto Rico</option>
              <option value="3508">Qatar</option>
              <option value="3509">Reunion</option>
              <option value="3510">Romania</option>
              <option value="3511">Russia</option>
              <option value="3512">Rwanda</option>
              <option value="3515">Saint Kitts and Nevis</option>
              <option value="3516">Saint Lucia</option>
              <option value="3518">Saint Pierre and Miquelon</option>
              <option value="3534">Saint Vincent and the Grenadines</option>
              <option value="3519">Samoa</option>
              <option value="3520">San Marino</option>
              <option value="3521">Sao Tome and Principe</option>
              <option value="3522">Saudi Arabia</option>
              <option value="3523">Senegal</option>
              <option value="3524">Serbia</option>
              <option value="3525">Seychelles</option>
              <option value="3526">Sierra Leone</option>
              <option value="3527">Singapore</option>
              <option value="3529">Slovakia</option>
              <option value="3530">Slovenia</option>
              <option value="3531">Solomon Islands</option>
              <option value="3532">Somalia</option>
              <option value="3533">South Africa</option>
              <option value="3535">South Georgia and the South Sandwich Islands</option>
              <option value="3536">South Korea</option>
              <option value="3538">Spain</option>
              <option value="3539">Sri Lanka</option>
              <option value="3540">Sudan</option>
              <option value="3541">Suriname</option>
              <option value="3542">Svalbard and Jan Mayen</option>
              <option value="3543">Swaziland</option>
              <option value="3544">Sweden</option>
              <option value="3545">Switzerland</option>
              <option value="3546">Syrian Arab Republic</option>
              <option value="3547">Taiwan</option>
              <option value="3548">Tajikistan</option>
              <option value="3549">flag Mailing Country Tanzania</option>
              <option value="3550">Thailand</option>
              <option value="3551">Timor-Leste</option>
              <option value="3552">Togo</option>
              <option value="3553">Tokelau</option>
              <option value="3554">Tonga</option>
              <option value="3555">Trinidad and Tobago</option>
              <option value="3556">Tunisia</option>
              <option value="3557">Turkey</option>
              <option value="3558">Turkmenistan</option>
              <option value="3559">Turks and Caicos Islands</option>
              <option value="3560">Tuvalu</option>
              <option value="3561">Uganda</option>
              <option value="3562">Ukraine</option>
              <option value="3563">United Arab Emirates</option>
              <option value="3564">United Kingdom</option>
              <option value="3565">United States</option>
              <option value="3566">Uruguay</option>
              <option value="3571">flag Mailing Country US Virgin Islands</option>
              <option value="3567">Uzbekistan</option>
              <option value="3568">Vanuatu</option>
              <option value="3569">flag Mailing Country Venezuela</option>
              <option value="3570">Vietnam</option>
              <option value="3572">Wallis and Futuna</option>
              <option value="3573">Western Sahara</option>
              <option value="3574">Yemen</option>
              <option value="3575">Zambia</option>
              <option value="3576">Zimbabwe</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="required">條款與條件</label>
        </div>
        <div class="form-group">
          <label><input type="checkbox" name="" id="">
          我接受條款與條件。</label>
        </div>
        <div class="form-group">
          <label class="required">Consent to direct marketing</label>
        </div>
        <div class="form-group">
         <label> <input type="checkbox" name="" id="">
          I accept the following statement</label>
        </div>
        <div class="form-group">
          <p>
            From time to time, Getac may wish to contact you by email, 
            telemarketing, surveys, direct mail, Mobile SMS, Telephone 
            and/or brochures to provide you with information about products and services that may be of 
            interest to you. If you are happy to be contacted by Getac for these purposes, 
            please click the check box above. Further information can be found in Getac's Privacy Policy. 
            king the checkbox, you consent to Getac contacting you in accordance with the provisions of this 
            notice. You can revoke your consent at any time, free of charge, by sending an email to 
            globalmarketing@getac.com.
          </p>
        </div>
        <div class="form-group">
          <label class="required">Consent to processing of personal data</label>
        </div>
        <div class="form-group">
          <label><input type="checkbox" name="" id="">
          I accept the following statement</label>
        </div>
        <div class="form-group policy">
          This Notice is issued by Getac Technology Corporation on behalf of itself, its subsidiaries and its affiliates (together, “Getac”). For the purposes of this Notice, Getac is the controller. Further details are available in Getac’s Privacy Policy.
Categories of personal data – With your consent, the categories of personal data that Getac may process are: data you provide to us (e.g., your name, contact details and payment details where applicable); your purchase history; and data automatically provided by your device (e.g., device type, operating system, browser type, browser settings, IP address) (together, “Relevant Personal Data”). Such Relevant Personal Data may be derived from information collected directly from you, publicly available sources, your machines, and third parties.
Purposes of processing Relevant Personal Data – With your consent, Getac may process your Relevant Personal Data for the following purposes: making our websites available to you; providing goods and services to you; entering into transactions with you; communicating with you; improving our products and services; managing our business; and complying with laws and regulations applicable to us.
International transfers of Relevant Personal Data – With your consent, Getac may transfer your Relevant Personal Data to recipients outside the jurisdiction in which your Relevant Personal Data were collected. In these cases, Getac shall comply with the relevant requirements of applicable law and the Getac’s Privacy Policy.
Disclosures of Relevant Personal Data to third parties – In order to fulfil the purposes set out in this Notice, Getac may disclose your Relevant Personal Data to third parties, including: Getac subsidiaries and affiliates; Getac’s customers; Getac’s third party processors and service providers (subject to appropriate processing agreements); and courts, administrative bodies, and law enforcement agencies, to the extent required by applicable law.
Your rights – Subject to applicable law, you may have a right to access your Relevant Personal Data, to have errors in your Relevant Personal Data rectified, and to object to the processing of your Relevant Personal Data on legitimate grounds. Further details are available in Getac’s Privacy Policy.
Contact details – You may contact Getac for the purposes of exercising your rights under applicable law, or for any other purpose in connection with this Notice, at:
RSBU Marketing, Getac Technology Corporation, 2F., Building A, No. 209, Sec. 1, Nangang Rd., Nangang Dist., Taipei City, 11568, Taiwan, R.O.C.
By clicking the check box, you consent to the processing of your Relevant Personal Data by Getac in accordance with the provisions of this notice. You can revoke your consent at any time, free of charge, by sending an email to globalmarketing@getac.com.
        </div>
        <div class="form-group" id="addbutton">
            <button type="button" class="btn btn-primary ui-btn ui-shadow ui-corner-all" @click="detailbutton($event)">下一步</button>
        </div>
        <input
          maxlength="50"
          name="selectedCountry"
          value="1"
          validateat="onSubmit,onServer"
          label="selectedCountry"
          id="selectedCountry"
          type="Hidden"
        >
        <input
          maxlength="50"
          name="nextstep"
          value="6"
          validateat="onSubmit,onServer"
          label="nextstep"
          id="nextstep"
          type="Hidden"
        >
        <span style="display:none;"></span>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  
  data(){
    return{
   personDetails:"您的詳細資料",
   companyDetails:"公司詳細資料",
   router:"",
   disabled:0,
   selected:true,
   nextstep:'company',
    }
  },
  methods:{
    detailbutton(val){
      var vm = this;
      console.log(vm.nextstep)
      this.$emit("nextstep", vm.nextstep);
    }
  },
}
</script>