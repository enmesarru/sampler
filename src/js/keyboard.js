const Keyboard = (function() {
   this.settings = {
      container: null,
      viewBox_x: 0,
      key: {
         root: ['c', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'],
         type: ['black', 'white'],
      }
   };

   const svg = `
   <svg width="1742" xmlns="http://www.w3.org/2000/svg" height="108" viewBox="0 0 460 28" preserveAspectRatio="none" id="keyboard">
     <g
        id="c_white"
        transform="translate(0,-268.425)"
        >
       <rect
          class="whiteKeyboardKey"
          data-key-id="0"
          id="c_white_0"
          width="6"
          height="28"
          x="0.10163831"
          y="268.52664" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="2"
          id="c_white_2"
          width="6"
          height="28"
          x="6.2483592"
          y="268.52664" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="4"
          id="c_white_4"
          width="6"
          height="28"
          x="12.395083"
          y="268.52664" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="5"
          id="c_white_5"
          width="6"
          height="28"
          x="18.541805"
          y="268.52664" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="7"
          id="c_white_7"
          width="6"
          height="28"
          x="24.688532"
          y="268.52664" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="9"
          id="c_white_9"
          width="6"
          height="28"
          x="30.835253"
          y="268.52664" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="11"
          id="c_white_11"
          width="6"
          height="28"
          x="36.981976"
          y="268.52664" />
     </g>
     <g
        id="c_black"
        transform="translate(0,-268.425)"
        >
       <rect
          class="blackKeyboardKey"
          data-key-id="1"
          id="c_black_1"
          width="3.1747615"
          height="14.575343"
          x="4.6302085"
          y="268.29236" />
       <rect
          class="blackKeyboardKey"
          data-key-id="3"
          id="c_black_3"
          width="3.1747615"
          height="14.575343"
          x="10.715625"
          y="268.52664" />
       <rect
          class="blackKeyboardKey"
          data-key-id="6"
          id="c_black_6"
          width="3.1747615"
          height="14.575343"
          x="29.236458"
          y="268.52664" />
       <rect
          class="blackKeyboardKey"
          data-key-id="8"
          id="c_black_8"
          width="3.1747615"
          height="14.575343"
          x="35.58646"
          y="268.52664" />
       <rect
          class="blackKeyboardKey"
          data-key-id="10"
          id="c_black_10"
          width="3.1747615"
          height="14.575344"
          x="22.886457"
          y="268.52664" />
     </g>
     <g
        id="c0_white"
        >
       <rect
          class="whiteKeyboardKey"
          data-key-id="12"
          id="c0_white_12"
          width="6"
          height="28"
          x="43.1287"
          y="0.10165376" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="14"
          id="c0_white_14"
          width="6"
          height="28"
          x="49.275421"
          y="0.10165376" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="16"
          id="c0_white_16"
          width="6"
          height="28"
          x="55.422146"
          y="0.10165376" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="17"
          id="c0_white_17"
          width="6"
          height="28"
          x="61.568867"
          y="0.10165376" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="19"
          id="c0_white_19"
          width="6"
          height="28"
          x="67.715599"
          y="0.10165376" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="21"
          id="c0_white_21"
          width="6"
          height="28"
          x="73.86232"
          y="0.10165376" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="23"
          id="c0_white_23"
          width="6"
          height="28"
          x="80.009041"
          y="0.10165376" />
     </g>
     <g
        id="c0_black">
       <rect
          class="blackKeyboardKey"
          data-key-id="13"
          id="c0_black_13"
          width="3.1747615"
          height="14.575344"
          x="47.75729"
          y="-0.13262969" />
       <rect
          class="blackKeyboardKey"
          data-key-id="15"
          id="c0_black_15"
          width="3.1747615"
          height="14.575344"
          x="53.842709"
          y="0.10903092" />
       <rect
          class="blackKeyboardKey"
          data-key-id="18"
          id="c0_black_18"
          width="3.1747615"
          height="14.575344"
          x="72.363541"
          y="0.10165376" />
       <rect
          class="blackKeyboardKey"
          data-key-id="20"
          id="c0_black_20"
          width="3.1747615"
          height="14.575344"
          x="78.713539"
          y="0.10165376" />
       <rect
          class="blackKeyboardKey"
          data-key-id="22"
          id="c0_black_22"
          width="3.1747615"
          height="14.575344"
          x="66.013542"
          y="0.10165376" />
     </g>
     <g
        id="c1_white">
       <rect
          class="whiteKeyboardKey"
          data-key-id="24"
          id="c1_white_24"
          width="6"
          height="28"
          x="86.155762"
          y="0.10165346" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="26"
          id="c1_white_26"
          width="6"
          height="28"
          x="92.302483"
          y="0.10165346" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="28"
          id="c1_white_28"
          width="6"
          height="28"
          x="98.449211"
          y="0.10165346" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="29"
          id="c1_white_29"
          width="6"
          height="28"
          x="104.59593"
          y="0.10165346" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="31"
          id="c1_white_31"
          width="6"
          height="28"
          x="110.74266"
          y="0.10165346" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="33"
          id="c1_white_33"
          width="6"
          height="28"
          x="116.88938"
          y="0.10165346" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="35"
          id="c1_white_35"
          width="6"
          height="28"
          x="123.0361"
          y="0.10165346" />
     </g>
     <g
        id="c1_black"
        >
       <rect
          class="blackKeyboardKey"
          data-key-id="25"
          id="c1_black_25"
          width="3.1747615"
          height="14.575344"
          x="91.132294"
          y="-0.13263574" />
       <rect
          class="blackKeyboardKey"
          data-key-id="27"
          id="c1_black_27"
          width="3.1747615"
          height="14.575344"
          x="97.218231"
          y="-0.13263574" />
       <rect
          class="blackKeyboardKey"
          data-key-id="30"
          id="c1_black_30"
          width="3.1747615"
          height="14.575344"
          x="115.74167"
          y="-0.14001289" />
       <rect
          class="blackKeyboardKey"
          data-key-id="32"
          id="c1_black_32"
          width="3.1747615"
          height="14.575344"
          x="122.08542"
          y="-0.14001289" />
       <rect
          class="blackKeyboardKey"
          data-key-id="34"
          id="c1_black_34"
          width="3.1747615"
          height="14.575344"
          x="109.39011"
          y="-0.14001289" />
     </g>
     <g
        id="c2_white"
        >
       <rect
          class="whiteKeyboardKey"
          data-key-id="36"
          id="c2_white_36"
          width="6"
          height="28"
          x="129.10164"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="38"
          id="c2_white_38"
          width="6"
          height="28"
          x="135.24837"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="40"
          id="c2_white_40"
          width="6"
          height="28"
          x="141.3951"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="41"
          id="c2_white_41"
          width="6"
          height="28"
          x="147.54181"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="43"
          id="c2_white_43"
          width="6"
          height="28"
          x="153.68854"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="45"
          id="c2_white_45"
          width="6"
          height="28"
          x="159.83525"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="47"
          id="c2_white_47"
          width="6"
          height="28"
          x="165.98198"
          y="0.10165596" />
     </g>
     <g
        id="c2_black"
        >
       <rect
          class="blackKeyboardKey"
          data-key-id="37"
          id="c2_black_37"
          width="3.1747615"
          height="14.575344"
          x="134.13229"
          y="-0.13263574" />
       <rect
          class="blackKeyboardKey"
          data-key-id="39"
          id="c2_black_39"
          width="3.1747615"
          height="14.575344"
          x="140.21823"
          y="-0.13263574" />
       <rect
          class="blackKeyboardKey"
          data-key-id="42"
          id="c2_black_42"
          width="3.1747615"
          height="14.575344"
          x="158.74167"
          y="-0.14001241" />
       <rect
          class="blackKeyboardKey"
          data-key-id="44"
          id="c2_black_44"
          width="3.1747615"
          height="14.575344"
          x="165.08542"
          y="-0.14001241" />
       <rect
          class="blackKeyboardKey"
          data-key-id="46"
          id="c2_black_46"
          width="3.1747615"
          height="14.575344"
          x="152.39011"
          y="-0.14001241" />
     </g>
     <g
        id="c3_white"
        >
       <rect
          class="whiteKeyboardKey"
          data-key-id="48"
          id="c3_white_48"
          width="6"
          height="28"
          x="172.12871"
          y="0.10165548" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="50"
          id="c3_white_50"
          width="6"
          height="28"
          x="178.27544"
          y="0.10165548" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="52"
          id="c3_white_52"
          width="6"
          height="28"
          x="184.42216"
          y="0.10165548" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="53"
          id="c3_white_53"
          width="6"
          height="28"
          x="190.56888"
          y="0.10165548" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="55"
          id="c3_white_55"
          width="6"
          height="28"
          x="196.71561"
          y="0.10165548" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="57"
          id="c3_white_57"
          width="6"
          height="28"
          x="202.86232"
          y="0.10165548" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="59"
          id="c3_white_59"
          width="6"
          height="28"
          x="209.00905"
          y="0.10165548" />
     </g>
     <g
        id="c3_black"
        >
       <rect
          class="blackKeyboardKey"
          data-key-id="49"
          id="c3_black_49"
          width="3.1747615"
          height="14.575344"
          x="176.37125"
          y="0.10903092" />
       <rect
          class="blackKeyboardKey"
          data-key-id="51"
          id="c3_black_51"
          width="3.1747615"
          height="14.575344"
          x="182.45718"
          y="0.10903092" />
       <rect
          class="blackKeyboardKey"
          data-key-id="54"
          id="c3_black_54"
          width="3.1747615"
          height="14.575344"
          x="200.98062"
          y="0.10165425" />
       <rect
          class="blackKeyboardKey"
          data-key-id="56"
          id="c3_black_56"
          width="3.1747615"
          height="14.575344"
          x="207.32437"
          y="0.10165425" />
       <rect
          class="blackKeyboardKey"
          data-key-id="58"
          id="c3_black_58"
          width="3.1747615"
          height="14.575344"
          x="194.62906"
          y="0.10165425" />
     </g>
     <g
        id="c4_white"
        >
       <rect
          class="whiteKeyboardKey"
          data-key-id="60"
          id="c4_white_60"
          width="6"
          height="28"
          x="215.15578"
          y="0.10165501" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="62"
          id="c4_white_62"
          width="6"
          height="28"
          x="221.30251"
          y="0.10165501" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="64"
          id="c4_white_64"
          width="6"
          height="28"
          x="227.44923"
          y="0.10165501" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="65"
          id="c4_white_65"
          width="6"
          height="28"
          x="233.59595"
          y="0.10165501" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="67"
          id="c4_white_67"
          width="6"
          height="28"
          x="239.74268"
          y="0.10165501" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="69"
          id="c4_white_69"
          width="6"
          height="28"
          x="245.88939"
          y="0.10165501" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="71"
          id="c4_white_71"
          width="6"
          height="28"
          x="252.03612"
          y="0.10165501" />
     </g>
     <g
        id="c4_black"
        >
       <rect
          class="blackKeyboardKey"
          data-key-id="61"
          id="c4_black_61"
          width="3.1747615"
          height="14.575344"
          x="219.39832"
          y="0.10903072" />
       <rect
          class="blackKeyboardKey"
          data-key-id="63"
          id="c4_black_63"
          width="3.1747615"
          height="14.575344"
          x="225.48425"
          y="0.10903072" />
       <rect
          class="blackKeyboardKey"
          data-key-id="66"
          id="c4_black_66"
          width="3.1747615"
          height="14.575344"
          x="244.00769"
          y="0.10165405" />
       <rect
          class="blackKeyboardKey"
          data-key-id="68"
          id="c4_black_68"
          width="3.1747615"
          height="14.575344"
          x="250.35144"
          y="0.10165405" />
       <rect
          class="blackKeyboardKey"
          data-key-id="70"
          id="c4_black_70"
          width="3.1747615"
          height="14.575344"
          x="237.65613"
          y="0.10165405" />
     </g>
     <g
        id="c5_white"
        >
       <rect
          class="whiteKeyboardKey"
          data-key-id="72"
          id="c5_white_72"
          width="6"
          height="28"
          x="258.18283"
          y="0.1016531" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="74"
          id="c5_white_74"
          width="6"
          height="28"
          x="264.32956"
          y="0.1016531" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="76"
          id="c5_white_76"
          width="6"
          height="28"
          x="270.47629"
          y="0.1016531" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="77"
          id="c5_white_77"
          width="6"
          height="28"
          x="276.62299"
          y="0.1016531" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="79"
          id="c5_white_79"
          width="6"
          height="28"
          x="282.76971"
          y="0.1016531" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="81"
          id="c5_white_81"
          width="6"
          height="28"
          x="288.91644"
          y="0.1016531" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="83"
          id="c5_white_83"
          width="6"
          height="28"
          x="295.06317"
          y="0.1016531" />
     </g>
     <g
        id="c5_black"
        >
       <rect
          class="blackKeyboardKey"
          data-key-id="73"
          id="c5_black_73"
          width="3.1747615"
          height="14.575344"
          x="262.42535"
          y="0.10902882" />
       <rect
          class="blackKeyboardKey"
          data-key-id="75"
          id="c5_black_75"
          width="3.1747615"
          height="14.575344"
          x="268.51129"
          y="0.10902882" />
       <rect
          class="blackKeyboardKey"
          data-key-id="78"
          id="c5_black_78"
          width="3.1747615"
          height="14.575344"
          x="287.03473"
          y="0.10165215" />
       <rect
          class="blackKeyboardKey"
          data-key-id="80"
          id="c5_black_80"
          width="3.1747615"
          height="14.575344"
          x="293.37848"
          y="0.10165215" />
       <rect
          class="blackKeyboardKey"
          data-key-id="82"
          id="c5_black_82"
          width="3.1747615"
          height="14.575344"
          x="280.68317"
          y="0.10165215" />
     </g>
     <g
        id="c6_white">
       <rect
          class="whiteKeyboardKey"
          data-key-id="84"
          id="c6_white_84"
          width="6"
          height="28"
          x="301.2099"
          y="0.10165453" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="86"
          id="c6_white_86"
          width="6"
          height="28"
          x="307.35663"
          y="0.10165453" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="88"
          id="c6_white_88"
          width="6"
          height="28"
          x="313.50336"
          y="0.10165453" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="89"
          id="c6_white_89"
          width="6"
          height="28"
          x="319.65005"
          y="0.10165453" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="91"
          id="c6_white_91"
          width="6"
          height="28"
          x="325.79678"
          y="0.10165453" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="93"
          id="c6_white_93"
          width="6"
          height="28"
          x="331.94351"
          y="0.10165453" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="95"
          id="c6_white_95"
          width="6"
          height="28"
          x="338.09024"
          y="0.10165453" />
     </g>
     <g
        id="c6_black"
        >
       <rect
          class="blackKeyboardKey"
          data-key-id="85"
          id="c6_black_85"
          width="3.1747615"
          height="14.575344"
          x="305.45242"
          y="0.10903025" />
       <rect
          class="blackKeyboardKey"
          data-key-id="87"
          id="c6_black_87"
          width="3.1747615"
          height="14.575344"
          x="311.53836"
          y="0.10903025" />
       <rect
          class="blackKeyboardKey"
          data-key-id="90"
          id="c6_black_90"
          width="3.1747615"
          height="14.575344"
          x="330.0618"
          y="0.10165358" />
       <rect
          class="blackKeyboardKey"
          data-key-id="92"
          id="c6_black_92"
          width="3.1747615"
          height="14.575344"
          x="336.40555"
          y="0.10165358" />
       <rect
          class="blackKeyboardKey"
          data-key-id="94"
          id="c6_black_94"
          width="3.1747615"
          height="14.575344"
          x="323.71024"
          y="0.10165358" />
     </g>
     <g
        id="c7_white"
        >
       <rect
          class="whiteKeyboardKey"
          data-key-id="96"
          id="c7_white_96"
          width="6"
          height="28"
          x="344.23697"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="98"
          id="c7_white_98"
          width="6"
          height="28"
          x="350.3837"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="100"
          id="c7_white_100"
          width="6"
          height="28"
          x="356.53046"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="101"
          id="c7_white_101"
          width="6"
          height="28"
          x="362.67712"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="103"
          id="c7_white_103"
          width="6"
          height="28"
          x="368.82388"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="105"
          id="c7_white_105"
          width="6"
          height="28"
          x="374.97061"
          y="0.10165596" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="107"
          id="c7_white_107"
          width="6"
          height="28"
          x="381.11734"
          y="0.10165596" />
     </g>
     <g
        id="c7_black"
        >
       <rect
          class="blackKeyboardKey"
          data-key-id="97"
          id="c7_black_97"
          width="3.1747615"
          height="14.575344"
          x="348.47949"
          y="0.10903168" />
       <rect
          class="blackKeyboardKey"
          data-key-id="99"
          id="c7_black_99"
          width="3.1747615"
          height="14.575344"
          x="354.56543"
          y="0.10903168" />
       <rect
          class="blackKeyboardKey"
          data-key-id="102"
          id="c7_black_102"
          width="3.1747615"
          height="14.575344"
          x="373.08887"
          y="0.10165596" />
       <rect
          class="blackKeyboardKey"
          data-key-id="104"
          id="c7_black_104"
          width="3.1747615"
          height="14.575344"
          x="379.43265"
          y="0.10165596" />
       <rect
          class="blackKeyboardKey"
          data-key-id="106"
          id="c7_black_106"
          width="3.1747615"
          height="14.575344"
          x="366.7373"
          y="0.10165596" />
     </g>
     <g
        id="c8_white"
        >
       <rect
          class="whiteKeyboardKey"
          data-key-id="108"
          id="c8_white_108"
          width="6"
          height="28"
          x="387.2641"
          y="0.10165597" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="110"
          id="c7_white_110"
          width="6"
          height="28"
          x="393.41083"
          y="0.10165597" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="112"
          id="c7_white_112"
          width="6"
          height="28"
          x="399.55756"
          y="0.10165597" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="113"
          id="c7_white_113"
          width="6"
          height="28"
          x="405.70425"
          y="0.10165597" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="115"
          id="c7_white_115"
          width="6"
          height="28"
          x="411.85098"
          y="0.10165597" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="117"
          id="c7_white_117"
          width="6"
          height="28"
          x="417.99771"
          y="0.10165597" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="119"
          id="c7_white_119"
          width="6"
          height="28"
          x="424.14444"
          y="0.10165597" />
     </g>
     <g
        id="c8_black"
        >
       <rect
          class="blackKeyboardKey"
          data-key-id="109"
          id="c8_black_109"
          width="3.1747615"
          height="14.575344"
          x="391.50662"
          y="0.10903168" />
       <rect
          class="blackKeyboardKey"
          data-key-id="111"
          id="c8_black_111"
          width="3.1747615"
          height="14.575344"
          x="397.59256"
          y="0.10903168" />
       <rect
          class="blackKeyboardKey"
          data-key-id="114"
          id="c8_black_114"
          width="3.1747615"
          height="14.575344"
          x="416.116"
          y="0.10165501" />
       <rect
          class="blackKeyboardKey"
          data-key-id="116"
          id="c8_black_116"
          width="3.1747615"
          height="14.575344"
          x="422.45975"
          y="0.10165501" />
       <rect
          class="blackKeyboardKey"
          data-key-id="118"
          id="c8_black_118"
          width="3.1747615"
          height="14.575344"
          x="409.76443"
          y="0.10165501" />
     </g>
     <g
        id="c9_white"
        >
       <rect
          class="whiteKeyboardKey"
          data-key-id="120"
          id="c9_white_120"
          width="6"
          height="28"
          x="430.2912"
          y="0.10165692" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="122"
          id="c9_white_122"
          width="6"
          height="28"
          x="436.43793"
          y="0.10165692" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="124"
          id="c9_white_124"
          width="6"
          height="28"
          x="442.58466"
          y="0.10165692" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="125"
          id="c9_white_125"
          width="6"
          height="28"
          x="448.73135"
          y="0.10165692" />
       <rect
          class="whiteKeyboardKey"
          data-key-id="127"
          id="c9_white_127"
          width="6"
          height="28"
          x="454.87808"
          y="0.10165692" />
     </g>
     <g
        id="c9_black"
        >
       <rect
          class="blackKeyboardKey"
          data-key-id="121"
          id="c9_black_121"
          width="3.1747615"
          height="14.575344"
          x="434.53372"
          y="0.10903264" />
       <rect
          class="blackKeyboardKey"
          data-key-id="123"
          id="c9_black_123"
          width="3.1747615"
          height="14.575344"
          x="440.61966"
          y="0.10903264" />
       <rect
          class="blackKeyboardKey"
          data-key-id="126"
          id="c9_black_126"
          width="3.1747615"
          height="14.575344"
          x="452.79153"
          y="0.10165597" />
     </g>
   </svg>`;
   
   return {
      initialize: function(containerName, callback) {
         const keyboard_container = document.getElementById(containerName);
         keyboard_container.innerHTML = svg;
         this.settings.container = keyboard_container;

         const keyNodes = document.querySelectorAll("#keyboard rect");
         keyNodes.forEach((node) => {
            node.addEventListener("click", (event) => {
               this.triggerKey(null, event.target.id);
               callback(event.target.id);
            });
            node.addEventListener('transitionend', this.removeTransition);
         });

         this.settings.container.onwheel = (event) => {
            // ToDo: Normalizing Wheel Event
            if(event.deltaY == -3 || event.deltaY == -53) {
               this.settings.viewBox_x += 5;
            } else {
               this.settings.viewBox_x -= 5;
            }
      
            if(this.settings.viewBox_x >= 210) {
               this.settings.viewBox_x = 210;
            } else if(this.settings.viewBox_x <= 0) {
               this.settings.viewBox_x = 0;
            }
      
            let viewBox = `${this.settings.viewBox_x} 0 460 28`;
            document.getElementById("keyboard").setAttribute("viewBox", viewBox);
         }
      },
      settings: this.settings,
      triggerKey(keyCode, elementId) {
         if(elementId) {
            let domElement = document.getElementById(elementId);
            this.changeTriggeredKeyColor(domElement);
         } else {
            for(let root of this.settings.key.root) {
               for(let type of this.settings.key.type) {
                  let identifier = `${root}_${type}_${keyCode}`;
                  let domElement = document.getElementById(identifier);
   
                  if(domElement) {
                     this.changeTriggeredKeyColor(domElement);
                  }
               }
            }
         }
      },
      changeTriggeredKeyColor(domElement) {
         let previousColor = domElement.style.fill;
         domElement.classList.add("activeKeyboardKey");
         delay(() => { domElement.style.fill = previousColor; }, 500, 'later');
      },
      changeKeyColor(startNote, endNote, color) {
         for(let i = startNote; i <= endNote; i++) {
            const keyNode = document.querySelector(`[data-key-id='${i}']`);
            keyNode.style.fill = color;
         }
      },
      removeTransition(e) {
         e.target.classList.remove('activeKeyboardKey');
      }
   }
})();

Keyboard.initialize("midi_container", KeyboardEventListener);

function KeyboardEventListener(elementId) {
   const key = parseInt(document.getElementById(elementId).getAttribute("data-key-id"));
   for(let item of waves.getList()) {
      if(item.startNote <= key && key <= item.endNote) {
         if(item.wave) {
            item.wave.play(Math.abs(key - 128));
         }
      }
   }
}