<template>
  <div>
    <form method="POST" name="details" novalidate="true">
      <input type="hidden" name="_rwsessiontoken" value="E1CB46ADAD12A2FDF112F77DE9496589A061">
      <div >
        <div class="form-group" >
          <label  class="required">國家/地區:</label>
          <div class="ui-select">
            <div
            >
              <select
                class="form-control"
                message="國家/地區 is a required field"
                name="CountryID"
                required="Yes"
                validateat="onSubmit,onServer"
                label="國家/地區"
                id="CountryID"
                size="1"
                data-nullvalue
              >
                <option value>Choose A Country</option>
                <option value="277" title="Afghanistan">Afghanistan</option>
                <option value="278" title="Aland Islands">Aland Islands</option>
                <option value="64" title="Albania">Albania</option>
                <option value="79" title="Algeria">Algeria</option>
                <option value="279" title="American Samoa (USA)">
                  American
                  Samoa (USA)
                </option>
                <option value="280" title="Andorra">Andorra</option>
                <option value="281" title="Angola">Angola</option>
                <option value="282" title="Anguilla">Anguilla</option>
                <option value="283" title="Antarctica">Antarctica</option>
                <option value="284" title="Antigua and Barbuda">
                  Antigua and
                  Barbuda
                </option>
                <option value="285" title="Argentina">Argentina</option>
                <option value="83" title="Armenia">Armenia</option>
                <option value="286" title="Aruba">Aruba</option>
                <option value="119" title="Australia">Australia</option>
                <option value="19" title="Austria">Austria</option>
                <option value="287" title="Azerbaijan">Azerbaijan</option>
                <option value="288" title="Bahamas">Bahamas</option>
                <option value="42" title="Bahrain">Bahrain</option>
                <option value="289" title="Bangladesh">Bangladesh</option>
                <option value="290" title="Barbados">Barbados</option>
                <option value="57" title="Belarus">Belarus</option>
                <option value="1" title="Belgium">Belgium</option>
                <option value="291" title="Belize">Belize</option>
                <option value="292" title="Benin">Benin</option>
                <option value="293" title="Bermuda">Bermuda</option>
                <option value="294" title="Bhutan">Bhutan</option>
                <option value="295" title="Bolivia">Bolivia</option>
                <option value="68" title="Bosnia and Herzegovina">
                  Bosnia
                  and Herzegovina
                </option>
                <option value="92" title="Botswana">Botswana</option>
                <option value="296" title="Bouvet Island">Bouvet Island</option>
                <option value="297" title="Brazil">Brazil</option>
                <option value="298" title="British Indian Ocean Territory">
                  British
                  Indian Ocean Territory
                </option>
                <option value="429" title="British Virgin Islands">
                  British
                  Virgin Islands
                </option>
                <option value="299" title="Brunei">Brunei</option>
                <option value="2" title="Bulgaria">Bulgaria</option>
                <option value="300" title="Burkina Faso">Burkina Faso</option>
                <option value="301" title="Burundi">Burundi</option>
                <option value="302" title="Cambodia">Cambodia</option>
                <option value="126" title="Cameroon">Cameroon</option>
                <option value="276" title="Canada">Canada</option>
                <option value="303" title="Cape Verde">Cape Verde</option>
                <option value="304" title="Cayman Islands">Cayman Islands</option>
                <option value="305" title="Central African Republic">
                  Central
                  African Republic
                </option>
                <option value="306" title="Chad">Chad</option>
                <option value="307" title="Chile">Chile</option>
                <option value="120" title="China">China</option>
                <option value="308" title="Christmas Island">Christmas Island</option>
                <option value="309" title="Cocos (Keeling) Islands">
                  Cocos
                  (Keeling) Islands
                </option>
                <option value="310" title="Colombia">Colombia</option>
                <option value="311" title="Comoros">Comoros</option>
                <option value="312" title="Congo">Congo</option>
                <option value="314" title="Cook Islands">Cook Islands</option>
                <option value="315" title="Costa Rica">Costa Rica</option>
                <option value="88" title="Cote Dlvoire">Cote Dlvoire</option>
                <option value="22" title="Croatia">Croatia</option>
                <option value="316" title="Cuba">Cuba</option>
                <option value="40" title="Cyprus">Cyprus</option>
                <option value="20" title="Czech Republic">Czech Republic</option>
                <option value="313" title="Democratic Republic of Congo">
                  Democratic
                  Republic of Congo
                </option>
                <option value="5" title="Denmark">Denmark</option>
                <option value="317" title="Djibouti">Djibouti</option>
                <option value="318" title="Dominica">Dominica</option>
                <option value="319" title="Dominican Republic">
                  Dominican
                  Republic
                </option>
                <option value="320" title="Ecuador">Ecuador</option>
                <option value="43" title="Egypt">Egypt</option>
                <option value="321" title="El Salvador">El Salvador</option>
                <option value="322" title="Equatorial Guinea">
                  Equatorial
                  Guinea
                </option>
                <option value="323" title="Eritrea">Eritrea</option>
                <option value="55" title="Estonia">Estonia</option>
                <option value="324" title="Ethiopia">Ethiopia</option>
                <option value="325" title="Falkland Islands">Falkland Islands</option>
                <option value="326" title="Faroe Islands">Faroe Islands</option>
                <option value="369" title="Federated States of Micronesia">
                  Federated
                  States of Micronesia
                </option>
                <option value="327" title="Fiji">Fiji</option>
                <option value="7" title="Finland">Finland</option>
                <option value="8" title="France">France</option>
                <option value="328" title="French Guiana">French Guiana</option>
                <option value="329" title="French Polynesia">French Polynesia</option>
                <option value="330" title="French Southern Territories">
                  French
                  Southern Territories
                </option>
                <option value="94" title="Gabon">Gabon</option>
                <option value="331" title="Gambia">Gambia</option>
                <option value="332" title="Georgia">Georgia</option>
                <option value="4" title="Germany">Germany</option>
                <option value="93" title="Ghana">Ghana</option>
                <option value="333" title="Gibraltar">Gibraltar</option>
                <option value="21" title="Greece">Greece</option>
                <option value="334" title="Greenland">Greenland</option>
                <option value="335" title="Grenada">Grenada</option>
                <option value="336" title="Guadeloupe">Guadeloupe</option>
                <option value="337" title="Guam">Guam</option>
                <option value="338" title="Guatemala">Guatemala</option>
                <option value="339" title="Guinea">Guinea</option>
                <option value="340" title="Guinea-Bissau">Guinea-Bissau</option>
                <option value="341" title="Guyana">Guyana</option>
                <option value="342" title="Haiti">Haiti</option>
                <option value="343" title="Heard Island and McDonald Islands">
                  Heard
                  Island and McDonald Islands
                </option>
                <option value="344" title="Holy See (Vatican City State)">
                  Holy
                  See (Vatican City State)
                </option>
                <option value="345" title="Honduras">Honduras</option>
                <option value="116" title="Hong Kong">Hong Kong</option>
                <option value="23" title="Hungary">Hungary</option>
                <option value="25" title="Iceland">Iceland</option>
                <option value="275" title="India">India</option>
                <option value="346" title="Indonesia">Indonesia</option>
                <option value="347" title="Iran">Iran</option>
                <option value="348" title="Iraq">Iraq</option>
                <option value="10" title="Ireland">Ireland</option>
                <option value="24" title="Israel">Israel</option>
                <option value="11" title="Italy">Italy</option>
                <option value="350" title="Jamaica">Jamaica</option>
                <option value="109" title="Japan">Japan</option>
                <option value="44" title="Jordan">Jordan</option>
                <option value="351" title="Kazakhstan">Kazakhstan</option>
                <option value="45" title="Kenya">Kenya</option>
                <option value="352" title="Kiribati">Kiribati</option>
                <option value="46" title="Kuwait">Kuwait</option>
                <option value="353" title="Kyrgyzstan">Kyrgyzstan</option>
                <option value="354" title="Laos">Laos</option>
                <option value="34" title="Latvia">Latvia</option>
                <option value="53" title="Lebanon">Lebanon</option>
                <option value="355" title="Lesotho">Lesotho</option>
                <option value="356" title="Liberia">Liberia</option>
                <option value="357" title="Libya">Libya</option>
                <option value="358" title="Liechtenstein">Liechtenstein</option>
                <option value="65" title="Lithuania">Lithuania</option>
                <option value="12" title="Luxembourg">Luxembourg</option>
                <option value="359" title="Macao">Macao</option>
                <option value="67" title="Macedonia">Macedonia</option>
                <option value="360" title="Madagascar">Madagascar</option>
                <option value="361" title="Malawi">Malawi</option>
                <option value="115" title="Malaysia">Malaysia</option>
                <option value="362" title="Maldives">Maldives</option>
                <option value="363" title="Mali">Mali</option>
                <option value="39" title="Malta">Malta</option>
                <option value="364" title="Marshall Islands">Marshall Islands</option>
                <option value="365" title="Martinique">Martinique</option>
                <option value="366" title="Mauritania">Mauritania</option>
                <option value="84" title="Mauritius">Mauritius</option>
                <option value="367" title="Mayotte">Mayotte</option>
                <option value="368" title="Mexico">Mexico</option>
                <option value="56" title="Moldova">Moldova</option>
                <option value="370" title="Monaco">Monaco</option>
                <option value="371" title="Mongolia">Mongolia</option>
                <option value="372" title="Montenegro">Montenegro</option>
                <option value="373" title="Montserrat">Montserrat</option>
                <option value="54" title="Morocco">Morocco</option>
                <option value="91" title="Mozambique">Mozambique</option>
                <option value="374" title="Myanmar">Myanmar</option>
                <option value="90" title="Namibia">Namibia</option>
                <option value="375" title="Nauru">Nauru</option>
                <option value="376" title="Nepal">Nepal</option>
                <option value="13" title="Netherlands">Netherlands</option>
                <option value="377" title="Netherlands Antilles">
                  Netherlands
                  Antilles
                </option>
                <option value="378" title="New Caledonia">New Caledonia</option>
                <option value="110" title="New Zealand">New Zealand</option>
                <option value="379" title="Nicaragua">Nicaragua</option>
                <option value="380" title="Niger">Niger</option>
                <option value="38" title="Nigeria">Nigeria</option>
                <option value="381" title="Niue">Niue</option>
                <option value="382" title="Norfolk Island">Norfolk Island</option>
                <option value="501" title="North Korea">North Korea</option>
                <option value="383" title="Northern Mariana Islands">
                  Northern
                  Mariana Islands
                </option>
                <option value="14" title="Norway">Norway</option>
                <option value="47" title="Oman">Oman</option>
                <option value="59" title="Pakistan">Pakistan</option>
                <option value="384" title="Palau">Palau</option>
                <option value="385" title="Palestinian Occupied Territories">
                  Palestinian
                  Occupied Territories
                </option>
                <option value="386" title="Panama">Panama</option>
                <option value="387" title="Papua New Guinea">Papua New Guinea</option>
                <option value="388" title="Paraguay">Paraguay</option>
                <option value="389" title="Peru">Peru</option>
                <option value="114" title="Philippines">Philippines</option>
                <option value="390" title="Pitcairn Islands">Pitcairn Islands</option>
                <option value="26" title="Poland">Poland</option>
                <option value="15" title="Portugal">Portugal</option>
                <option value="391" title="Puerto Rico">Puerto Rico</option>
                <option value="48" title="Qatar">Qatar</option>
                <option value="392" title="Reunion">Reunion</option>
                <option value="27" title="Romania">Romania</option>
                <option value="28" title="Russia">Russia</option>
                <option value="393" title="Rwanda">Rwanda</option>
                <option value="395" title="Saint Helena">Saint Helena</option>
                <option value="396" title="Saint Kitts And Nevis">
                  Saint Kitts
                  And Nevis
                </option>
                <option value="397" title="Saint Lucia">Saint Lucia</option>
                <option value="399" title="Saint Pierre And Miquelon">
                  Saint
                  Pierre And Miquelon
                </option>
                <option value="400" title="Saint Vincent And The Grenadines">
                  Saint
                  Vincent And The Grenadines
                </option>
                <option value="401" title="Samoa">Samoa</option>
                <option value="402" title="San Marino">San Marino</option>
                <option value="403" title="Sao Tome And Principe">
                  Sao Tome
                  And Principe
                </option>
                <option value="49" title="Saudi Arabia">Saudi Arabia</option>
                <option value="404" title="Senegal">Senegal</option>
                <option value="130" title="Serbia">Serbia</option>
                <option value="405" title="Seychelles">Seychelles</option>
                <option value="406" title="Sierra Leone">Sierra Leone</option>
                <option value="118" title="Singapore">Singapore</option>
                <option value="30" title="Slovakia">Slovakia</option>
                <option value="29" title="Slovenia">Slovenia</option>
                <option value="407" title="Solomon Islands">Solomon Islands</option>
                <option value="408" title="Somalia">Somalia</option>
                <option value="32" title="South Africa">South Africa</option>
                <option value="409" title="South Georgia And The South Sandwich Islands">
                  South
                  Georgia And The South Sandwich Islands
                </option>
                <option value="121" title="South Korea">South Korea</option>
                <option value="6" title="Spain">Spain</option>
                <option value="410" title="Sri Lanka">Sri Lanka</option>
                <option value="60" title="Sudan">Sudan</option>
                <option value="411" title="Suriname">Suriname</option>
                <option value="412" title="Svalbard And Jan Mayen">
                  Svalbard
                  And Jan Mayen
                </option>
                <option value="413" title="Swaziland">Swaziland</option>
                <option value="16" title="Sweden">Sweden</option>
                <option value="3" title="Switzerland">Switzerland</option>
                <option value="129" title="Syrian Arab Republic">
                  Syrian Arab
                  Republic
                </option>
                <option value="112" title="Taiwan" selected="SELECTED">Taiwan</option>
                <option value="414" title="Tajikistan">Tajikistan</option>
                <option value="415" title="Tanzania">Tanzania</option>
                <option value="117" title="Thailand">Thailand</option>
                <option value="416" title="Timor-Leste">Timor-Leste</option>
                <option value="417" title="Togo">Togo</option>
                <option value="418" title="Tokelau">Tokelau</option>
                <option value="419" title="Tonga">Tonga</option>
                <option value="445" title="Trinidad and Tobago">
                  Trinidad
                  and Tobago
                </option>
                <option value="50" title="Tunisia">Tunisia</option>
                <option value="31" title="Turkey">Turkey</option>
                <option value="420" title="Turkmenistan">Turkmenistan</option>
                <option value="421" title="Turks And Caicos Islands">
                  Turks
                  And Caicos Islands
                </option>
                <option value="422" title="Tuvalu">Tuvalu</option>
                <option value="423" title="Uganda">Uganda</option>
                <option value="85" title="Ukraine">Ukraine</option>
                <option value="41" title="United Arab Emirates">
                  United Arab
                  Emirates
                </option>
                <option value="9" title="United Kingdom">United Kingdom</option>
                <option value="17" title="United States">United States</option>
                <option value="424" title="United States Minor Outlying Islands">
                  United
                  States Minor Outlying Islands
                </option>
                <option value="425" title="Uruguay">Uruguay</option>
                <option value="430" title="US Virgin Islands">US Virgin Islands</option>
                <option value="125" title="Uzbekistan">Uzbekistan</option>
                <option value="426" title="Vanuatu">Vanuatu</option>
                <option value="427" title="Venezuela">Venezuela</option>
                <option value="428" title="Vietnam">Vietnam</option>
                <option value="431" title="Wallis And Futuna">
                  Wallis And
                  Futuna
                </option>
                <option value="432" title="Western Sahara">Western Sahara</option>
                <option value="62" title="Yemen">Yemen</option>
                <option value="433" title="Zambia">Zambia</option>
                <option value="52" title="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group" id="">
          <label  class="required">語言:</label>
          <div class="ui-select">
            <div>
              <select
                class="form-control"
                message="語言 is a required field"
                name="language"
                required="Yes"
                validateat="onSubmit,onServer"
                label="語言"
                id="language"
                size="1"
                data-nullvalue
              >
                <option value="3" title="Deutsch">Deutsch</option>
                <option value="1" title="English">English</option>
                <option value="5" title="Español">Español</option>
                <option value="2" title="Français">Français</option>
                <option value="4" title="Italiano">Italiano</option>
                <option value="7" title="Nederlands">Nederlands</option>
                <option value="20" title="Русский">Русский</option>
                <option value="33" title="简体中文">简体中文</option>
                <option value="34" title="繁體中文" selected="SELECTED">繁體中文</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="required">電子郵件:</label>
          <div>
            <input
              class="form-control"
              name="part1email"
              orgtypeid="1"
              validateat="onSubmit,onServer"
              label="電子郵件"
              validate="part1email"
              blacklist="@panasonic.com|@dell.com|@xploretech.com|@motioncomputing.com|@mymiltope.com|@winmate.com.tw|@ruggedtabletpc.com|@conkertab.com|@ruggon.com|@advantech.com.tw|@amrel.com|@durabook.com|@handheldgroup.com|@arbor-technology.com|@ruggedbook.com.tw|@bluebirdcorp.com|@dtresearch.com|@tablettechnologies.com|@crete.com.tw|@roda-compuer.com|@mildef.com|@ts.ru|@bancolini.com|@sia-pen.it|@Panasonic.be|@Panasonic.ch|@Panasonic.co.uk|@Panasonic.com.tr|@Panasonic.cz|@Panasonic.de|@Panasonic.dk|@Panasonic.es|@Panasonic.fi|@Panasonic.fr|@Panasonic.hu|@Panasonic.it|@Panasonic.lu|@Panasonic.nl|@Panasonic.no|@Panasonic.pl|@Panasonic.pt|@Panasonic.ru|@Panasonic.se|@Panasonic.sk|@Toughbook.co.uk|@Toughbook.com|@Toughbook.de|@Toughbook.eu|@Toughbook.fr|@Toughbook.it|@zebra.com|@hotmail.com|@live.com|@outlook.com|@msn.com|@yahoo.com|@qq.com|@yandex.com|@mail.com|@katamail.com|@live.it|@msn.it|@hotmail.it|@gmail.it|@yahoo.it|@libero.it|@alice.it|@aliceposta.it|@virgilio.it|@tiscali.it|@email.it|@tiscalinet.it|@iol.it|@tin.it|@tim.it|@vodafone.it|@fastwebnet.it|@infostrada.it|@inwind.it|@dccdesigns.com|@reshy.com|@gmail.com"
              onvalidate="validateEmail"
              personid="0"
              maxlength="50"
              message="電子郵件 must be a required field"
              required="yes"
              id="part1email"
              uniqueemail="true"
              size="30"
              uniqueemailmessage="The email address you have entered already exists in the system. Please re-enter a different one"
              type="email"
            >
          </div>
          <input
            name="part1email_required"
            value="電子郵件 must be a required field"
            id="part1email_required"
            type="hidden"
          >
        </div>
        <div class="form-group">
          <label class="required">時區:</label>
          <div>
            <select
                class="form-control"
                message="時區 is a required field"
                name="zone"
                required="Yes"
                validateat="onSubmit,onServer"
                id="zone"
                size="1"
                data-nullvalue
              >
                <option value="3" title="Deutsch">utc</option>
                <option value="1" title="English">美國</option>
              </select>
          </div>
        </div>
        <div class="form-group" id="addbutton">
          <router-link to="/registerpart2">
          <button type="button" class="btn btn-primary ui-btn ui-shadow ui-corner-all">繼續</button>
          </router-link>
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
        <span  style="display:none;"></span>
      </div>
    </form>
  </div>
</template>