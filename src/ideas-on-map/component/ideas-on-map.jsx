import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';
import Filterbar from './filterbar.jsx';
import InfoBlock from './info-block.jsx';
import IdeaForm from './idea-form.jsx';
import IdeaDetails from './idea-details.jsx';
import Map from './map.jsx';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';

// TODO: clean up; ik gebruikte eerst setNewIdea en setSelected, maar nu onNewIdeaClick en onSelectedIdeaClick; trek dat gelijk

'use strict';

export default class OpenStadComponentIdeasOnMap extends OpenStadComponent {

  constructor(props) {

    super(props);

		var self = this;

		// config
		self.defaultConfig = {
			title: this.config.appTitle || 'Inzendingen',
      currentPolygon: undefined,
      types: [
        {"name":"Auto","color":"#EC0000","mapicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#EC0000\" fill-rule=\"nonzero\" d=\"M17,0 C26.3917,0 34,7.53433 34,16.8347 C34,29.5249 19.3587,42.4714 18.7259,42.9841 L17,44.4938 L15.2741,42.9841 C14.6413,42.4714 0,29.5249 0,16.8347 C0,7.53575 7.60829,0 17,0 Z\"/>    <path fill=\"#FFF\" d=\"M22,19.5 C23.0355,19.5 23.875,20.3395 23.875,21.375 C23.875,22.4105 23.0355,23.25 22,23.25 C20.9645,23.25 20.125,22.4105 20.125,21.375 C20.125,20.3395 20.9645,19.5 22,19.5 Z M11.375,19.5 C12.4105,19.5 13.25,20.3395 13.25,21.375 C13.25,22.4105 12.4105,23.25 11.375,23.25 C10.3395,23.25 9.5,22.4105 9.5,21.375 C9.5,20.3395 10.3395,19.5 11.375,19.5 Z M18.875,11.375 L23.25,15.75 L27,15.75 L27,21.375 L25.125,21.375 C25.125,19.6491 23.7259,18.25 22,18.25 C20.2741,18.25 18.875,19.6491 18.875,21.375 L14.5,21.375 C14.5,19.6491 13.1009,18.25 11.375,18.25 C9.64911,18.25 8.25,19.6491 8.25,21.375 L7,21.375 L7,15.75 L11.375,11.375 L18.875,11.375 Z M18.25,12.625 L15.125,12.625 L15.125,15.75 L21.3512,15.75 L18.25,12.625 Z M13.875,12.625 L12,12.625 L8.875,15.75 L13.875,15.75 L13.875,12.625 Z\"/>  </g></svg>","width":34,"height":45,"anchor":[17,45]},"listicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#EC0000\" fill-rule=\"nonzero\"/>    <path fill=\"#FFF\" d=\"M22,19.5 C23.0355,19.5 23.875,20.3395 23.875,21.375 C23.875,22.4105 23.0355,23.25 22,23.25 C20.9645,23.25 20.125,22.4105 20.125,21.375 C20.125,20.3395 20.9645,19.5 22,19.5 Z M11.375,19.5 C12.4105,19.5 13.25,20.3395 13.25,21.375 C13.25,22.4105 12.4105,23.25 11.375,23.25 C10.3395,23.25 9.5,22.4105 9.5,21.375 C9.5,20.3395 10.3395,19.5 11.375,19.5 Z M18.875,11.375 L23.25,15.75 L27,15.75 L27,21.375 L25.125,21.375 C25.125,19.6491 23.7259,18.25 22,18.25 C20.2741,18.25 18.875,19.6491 18.875,21.375 L14.5,21.375 C14.5,19.6491 13.1009,18.25 11.375,18.25 C9.64911,18.25 8.25,19.6491 8.25,21.375 L7,21.375 L7,15.75 L11.375,11.375 L18.875,11.375 Z M18.25,12.625 L15.125,12.625 L15.125,15.75 L21.3512,15.75 L18.25,12.625 Z M13.875,12.625 L12,12.625 L8.875,15.75 L13.875,15.75 L13.875,12.625 Z\"/>  </g></svg>","width":34,"height":34}},
        {"name":"Fiets","color":"#BED200","mapicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#BED200\" fill-rule=\"nonzero\" d=\"M17,0.493652 C26.3917,0.493652 34,8.02798 34,17.3284 C34,30.0185 19.3587,42.965 18.7259,43.4778 L17,44.9875 L15.2741,43.4778 C14.6413,42.965 0,30.0185 0,17.3284 C0,8.0294 7.60829,0.493652 17,0.493652 Z\"/>    <g fill=\"#000\" transform=\"translate(7 7)\">      <path fill-rule=\"nonzero\" d=\"M4.0625 12.3687C6.3062 12.3687 8.125 14.1875 8.125 16.4312 8.125 18.6748 6.3062 20.4937 4.0625 20.4937 1.81884 20.4937 0 18.6748 0 16.4312 0 14.1875 1.81884 12.3687 4.0625 12.3687zM4.0625 13.6187C2.5092 13.6187 1.25 14.8779 1.25 16.4312 1.25 17.9845 2.5092 19.2437 4.0625 19.2437 5.6158 19.2437 6.875 17.9845 6.875 16.4312 6.875 14.8779 5.6158 13.6187 4.0625 13.6187zM15.9375 12.3687C18.1812 12.3687 20 14.1875 20 16.4312 20 18.6748 18.1812 20.4937 15.9375 20.4937 13.6938 20.4937 11.875 18.6748 11.875 16.4312 11.875 14.1875 13.6938 12.3687 15.9375 12.3687zM15.9375 13.6187C14.3842 13.6187 13.125 14.8779 13.125 16.4312 13.125 17.9845 14.3842 19.2437 15.9375 19.2437 17.4908 19.2437 18.75 17.9845 18.75 16.4312 18.75 14.8779 17.4908 13.6187 15.9375 13.6187z\"/>      <path d=\"M13.75 5.4937L13.75 7.9937 16.875 7.9937 16.875 10.4937 12.5 10.4937 11.25 9.2437 11.25 7.3687 8.75 9.8687 11.252 12.3687 11.252 19.2437 8.75 19.2437 8.75 13.6187 5.625 10.4937 5.625 8.6187 10 4.2437C10.625 3.6187 11.875 3.6187 12.5 4.2437L13.75 5.4937zM15.7008 1.04262C16.4331 1.77492 16.4331 2.96198 15.7008 3.6943 14.9685 4.4266 13.7815 4.4266 13.0492 3.6943 12.3169 2.96198 12.3169 1.77492 13.0492 1.04262 13.7815.31032 14.9685.31032 15.7008 1.04262z\"/>    </g>  </g></svg>","width":34,"height":45,"anchor":[17,45]},"listicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#BED200\" fill-rule=\"nonzero\"/>    <g fill=\"#000\" transform=\"translate(7 5)\">      <path fill-rule=\"nonzero\" d=\"M4.0625 12.3687C6.3062 12.3687 8.125 14.1875 8.125 16.4312 8.125 18.6748 6.3062 20.4937 4.0625 20.4937 1.81884 20.4937 0 18.6748 0 16.4312 0 14.1875 1.81884 12.3687 4.0625 12.3687zM4.0625 13.6187C2.5092 13.6187 1.25 14.8779 1.25 16.4312 1.25 17.9845 2.5092 19.2437 4.0625 19.2437 5.6158 19.2437 6.875 17.9845 6.875 16.4312 6.875 14.8779 5.6158 13.6187 4.0625 13.6187zM15.9375 12.3687C18.1812 12.3687 20 14.1875 20 16.4312 20 18.6748 18.1812 20.4937 15.9375 20.4937 13.6938 20.4937 11.875 18.6748 11.875 16.4312 11.875 14.1875 13.6938 12.3687 15.9375 12.3687zM15.9375 13.6187C14.3842 13.6187 13.125 14.8779 13.125 16.4312 13.125 17.9845 14.3842 19.2437 15.9375 19.2437 17.4908 19.2437 18.75 17.9845 18.75 16.4312 18.75 14.8779 17.4908 13.6187 15.9375 13.6187z\"/>      <path d=\"M13.75 5.4937L13.75 7.9937 16.875 7.9937 16.875 10.4937 12.5 10.4937 11.25 9.2437 11.25 7.3687 8.75 9.8687 11.252 12.3687 11.252 19.2437 8.75 19.2437 8.75 13.6187 5.625 10.4937 5.625 8.6187 10 4.24365C10.625 3.61865 11.875 3.61865 12.5 4.24365L13.75 5.4937zM15.7008 1.04262C16.4331 1.77492 16.4331 2.96198 15.7008 3.69427 14.9685 4.42657 13.7815 4.42657 13.0492 3.69427 12.3169 2.96198 12.3169 1.77492 13.0492 1.04262 13.7815.31032 14.9685.31032 15.7008 1.04262z\"/>    </g>  </g></svg>","width":34,"height":34}},
        {"name":"Voetganger","color":"#009DEC","mapicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#009DEC\" fill-rule=\"nonzero\" d=\"M17,0.987793 C26.3917,0.987793 34,8.52212 34,17.8225 C34,30.5127 19.3587,43.4592 18.7259,43.9719 L17,45.4816 L15.2741,43.9719 C14.6413,43.4592 0,30.5127 0,17.8225 C0,8.52354 7.60829,0.987793 17,0.987793 Z\"/>    <g fill=\"#FFF\" transform=\"translate(10 7)\">      <polygon points=\"8.25 5.988 10.75 8.488 13.25 8.488 13.25 10.988 10.125 10.988 8.25 9.113 8.25 12.238 10.75 14.738 10.75 20.988 8.25 20.988 8.25 15.988 7 14.738 7 16.613 4.5 19.113 .75 19.113 .75 16.613 3.25 16.613 4.5 15.363 4.5 9.113 3.25 10.363 3.25 12.863 .75 12.863 .75 9.738 4.5 5.988\"/>      <path d=\"M6.375,0.98779 C7.4106,0.98779 8.25,1.82717 8.25,2.86279 C8.25,3.8984 7.4106,4.7378 6.375,4.7378 C5.3394,4.7378 4.5,3.8984 4.5,2.86279 C4.5,1.82717 5.3394,0.98779 6.375,0.98779 Z\"/>    </g>  </g></svg>","width":34,"height":45,"anchor":[17,45]},"listicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#009DEC\" fill-rule=\"nonzero\"/>    <g fill=\"#FFF\" transform=\"translate(10 6)\">      <polygon points=\"8.25 5.988 10.75 8.488 13.25 8.488 13.25 10.988 10.125 10.988 8.25 9.113 8.25 12.238 10.75 14.738 10.75 20.988 8.25 20.988 8.25 15.988 7 14.738 7 16.613 4.5 19.113 .75 19.113 .75 16.613 3.25 16.613 4.5 15.363 4.5 9.113 3.25 10.363 3.25 12.863 .75 12.863 .75 9.738 4.5 5.988\"/>      <path d=\"M6.375,0.98779 C7.4106,0.98779 8.25,1.82717 8.25,2.86279 C8.25,3.89842 7.4106,4.7378 6.375,4.7378 C5.3394,4.7378 4.5,3.89842 4.5,2.86279 C4.5,1.82717 5.3394,0.98779 6.375,0.98779 Z\"/>    </g>  </g></svg>","width":34,"height":34}},
        {"name":"Recreëren","color":"#E50082","mapicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#E50082\" fill-rule=\"nonzero\" d=\"M17,0.481445 C26.3917,0.481445 34,8.01577 34,17.3162 C34,30.0063 19.3587,42.9528 18.7259,43.4656 L17,44.9753 L15.2741,43.4656 C14.6413,42.9528 0,30.0063 0,17.3162 C0,8.0172 7.60829,0.481445 17,0.481445 Z\"/>    <path fill=\"#FFF\" d=\"M23.875,24.9814 L26.375,24.9814 L26.375,27.4814 L7.625,27.4814 L7.625,24.9814 L10.1254,24.9814 L10.1254,23.1069 L9.5,20.7588 L10.7125,20.4551 L11.2194,22.4819 L13.25,22.4819 C13.595,22.4819 13.875,22.7619 13.875,23.1069 L13.875,24.9814 L15.75,24.9814 L15.75,18.7314 L7.625,18.7314 L7.625,13.7313 L16.9988,8.10645 L26.375,13.7313 L26.375,18.7314 L18.25,18.7314 L18.25,24.9814 L20.125,24.9814 L20.125,23.1069 C20.125,22.7619 20.405,22.4819 20.75,22.4819 L22.7619,22.4819 L23.2687,20.4551 L24.4813,20.7588 L23.875,23.1069 L23.875,24.9814 Z M22.625,24.9814 L22.625,23.7319 L21.375,23.7319 L21.375,24.9814 L22.625,24.9814 Z M12.625,24.9814 L12.625,23.7319 L11.375,23.7319 L11.375,24.9814 L12.625,24.9814 Z M10.125,15.026 L10.125,16.2314 L23.875,16.2314 L23.875,15.026 L17,11.2617 L10.125,15.026 Z\"/>  </g></svg>","width":34,"height":45,"anchor":[17,45]},"listicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#E50082\" fill-rule=\"nonzero\"/>    <path fill=\"#FFF\" d=\"M23.875,23.9814 L26.375,23.9814 L26.375,26.4814 L7.625,26.4814 L7.625,23.9814 L10.1254,23.9814 L10.1254,22.1069 L9.5,19.7588 L10.7125,19.4551 L11.2194,21.4819 L13.25,21.4819 C13.595,21.4819 13.875,21.7619 13.875,22.1069 L13.875,23.9814 L15.75,23.9814 L15.75,17.7314 L7.625,17.7314 L7.625,12.7313 L16.9988,7.10645 L26.375,12.7313 L26.375,17.7314 L18.25,17.7314 L18.25,23.9814 L20.125,23.9814 L20.125,22.1069 C20.125,21.7619 20.405,21.4819 20.75,21.4819 L22.7619,21.4819 L23.2687,19.4551 L24.4813,19.7588 L23.875,22.1069 L23.875,23.9814 Z M22.625,23.9814 L22.625,22.7319 L21.375,22.7319 L21.375,23.9814 L22.625,23.9814 Z M12.625,23.9814 L12.625,22.7319 L11.375,22.7319 L11.375,23.9814 L12.625,23.9814 Z M10.125,14.026 L10.125,15.2314 L23.875,15.2314 L23.875,14.026 L17,10.2617 L10.125,14.026 Z\"/>  </g></svg>","width":34,"height":34}},
        {"name":"Schoon","color":"#004699","mapicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#004699\" fill-rule=\"nonzero\" d=\"M17,0.975586 C26.3917,0.975586 34,8.50991 34,17.8103 C34,30.5005 19.3587,43.447 18.7259,43.9597 L17,45.4694 L15.2741,43.9597 C14.6413,43.447 0,30.5005 0,17.8103 C0,8.51134 7.60829,0.975586 17,0.975586 Z\"/>    <path fill=\"#FFF\" d=\"M19.6777,7.97559 L19.6777,10.47559 L24.6777,10.47559 L24.6777,12.97559 L23.4277,12.97559 L23.4277,27.97559 L9.67773,27.97559 L9.67773,12.97559 L8.42773,12.97559 L8.42773,10.47559 L13.4277,10.47559 L13.4277,7.97559 L19.6777,7.97559 Z M20.9277,12.9756 L12.1777,12.9756 L12.1777,25.4756 L20.9277,25.4756 L20.9277,12.9756 Z M14.6777,15.4756 L14.6777,22.9756 L13.4402,22.9756 L13.4402,15.4756 L14.6777,15.4756 Z M17.1777,15.4756 L17.1777,22.9756 L15.9277,22.9756 L15.9277,15.4756 L17.1777,15.4756 Z M19.6777,15.4756 L19.6777,22.9756 L18.4402,22.9756 L18.4402,15.4756 L19.6777,15.4756 Z M18.4277,9.22559 L14.6777,9.22559 L14.6777,10.4756 L18.4277,10.4756 L18.4277,9.22559 Z\"/>  </g></svg>","width":34,"height":45,"anchor":[17,45]},"listicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#004699\" fill-rule=\"nonzero\"/>    <path fill=\"#FFF\" d=\"M19.6777,6.97559 L19.6777,9.47559 L24.6777,9.47559 L24.6777,11.97559 L23.4277,11.97559 L23.4277,26.97559 L9.67773,26.97559 L9.67773,11.97559 L8.42773,11.97559 L8.42773,9.47559 L13.4277,9.47559 L13.4277,6.97559 L19.6777,6.97559 Z M20.9277,11.9756 L12.1777,11.9756 L12.1777,24.4756 L20.9277,24.4756 L20.9277,11.9756 Z M14.6777,14.4756 L14.6777,21.9756 L13.4402,21.9756 L13.4402,14.4756 L14.6777,14.4756 Z M17.1777,14.4756 L17.1777,21.9756 L15.9277,21.9756 L15.9277,14.4756 L17.1777,14.4756 Z M19.6777,14.4756 L19.6777,21.9756 L18.4402,21.9756 L18.4402,14.4756 L19.6777,14.4756 Z M18.4277,8.22559 L14.6777,8.22559 L14.6777,9.47559 L18.4277,9.47559 L18.4277,8.22559 Z\"/>  </g></svg>","width":34,"height":34}},
        {"name":"Groen","color":"#00A03C","mapicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <defs>    <path id=\"marker_groen-a\" d=\"M9.1246,0.9692 C9.8227,1.31203 10.2745,2.00713 10.3101,2.77763 L10.3121,2.9067 L10.3121,3.3442 C11.3621,3.50045 12.1359,4.4073 12.1246,5.4692 C12.1527,5.8404 12.0652,6.2117 11.8746,6.5317 C12.4869,6.8803 12.9267,7.4646 13.0947,8.1445 L13.1246,8.2817 L13.1246,8.6567 C13.1484,9.6961 12.5265,10.6423 11.5621,11.0317 C11.3344,11.1603 11.0774,11.2269 10.8173,11.2255 L10.6871,11.2192 L10.6246,11.2192 C10.0036,11.1954 9.4161,10.9415 8.974,10.5095 L8.8746,10.4067 L8.7496,10.4067 L8.7496,17.9692 L11.8746,17.9692 L11.8746,16.0942 L11.2496,13.7192 L12.4371,13.4692 L12.9996,15.4692 L14.9996,15.4692 C15.1709,15.4486 15.3421,15.5079 15.464,15.6298 C15.5684,15.7343 15.627,15.875 15.6286,16.021 L15.6246,16.0942 L15.6246,17.9692 L19.9996,17.9692 L19.9996,20.4692 L0.03711,20.4692 L0.03711,17.9692 L7.4996,17.9692 L7.4996,10.4692 L7.3746,10.4692 C6.939,10.8829 6.3709,11.125 5.7743,11.1539 L5.6246,11.1567 L5.5621,11.1567 C5.2584,11.1848 4.9527,11.1192 4.6871,10.9692 C3.7629,10.596 3.1533,9.7115 3.125,8.7236 L3.1246,8.2192 C3.2646,7.4811 3.7215,6.8411 4.3746,6.4692 C4.1965,6.1673 4.1096,5.8198 4.1246,5.4692 C4.1138,4.4467 4.8309,3.56784 5.8216,3.36462 L5.9371,3.3442 L5.9371,2.9067 C5.9252,2.08545 6.3877,1.33107 7.1246,0.9692 C7.7677,0.71795 8.4815,0.71795 9.1246,0.9692 Z M14.3746,16.7192 L13.1246,16.7192 L13.1246,17.9692 L14.3746,17.9692 L14.3746,16.7192 Z\"/>  </defs>  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#00A03C\" fill-rule=\"nonzero\" d=\"M17,0.469238 C26.3917,0.469238 34,8.00356 34,17.304 C34,29.9941 19.3587,42.9406 18.7259,43.4534 L17,44.9631 L15.2741,43.4534 C14.6413,42.9406 0,29.9941 0,17.304 C0,8.00499 7.60829,0.469238 17,0.469238 Z\"/>    <g transform=\"translate(7 6)\">      <mask id=\"marker_groen-b\" fill=\"#fff\">        <use xlink:href=\"#marker_groen-a\"/>      </mask>      <polygon fill=\"#FFF\" points=\".037 20.469 20.062 20.469 20.062 .744 .037 .744\" mask=\"url(#marker_groen-b)\"/>    </g>  </g></svg>","width":34,"height":45,"anchor":[17,45]},"listicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <defs>    <path id=\"label_groen-a\" d=\"M9.1246,0.9692 C9.8227,1.31203 10.2745,2.00713 10.3101,2.77763 L10.3121,2.9067 L10.3121,3.3442 C11.3621,3.50045 12.1359,4.4073 12.1246,5.4692 C12.1527,5.8404 12.0652,6.2117 11.8746,6.5317 C12.4869,6.8803 12.9267,7.4646 13.0947,8.1445 L13.1246,8.2817 L13.1246,8.6567 C13.1484,9.6961 12.5265,10.6423 11.5621,11.0317 C11.3344,11.1603 11.0774,11.2269 10.8173,11.2255 L10.6871,11.2192 L10.6246,11.2192 C10.0036,11.1954 9.4161,10.9415 8.974,10.5095 L8.8746,10.4067 L8.7496,10.4067 L8.7496,17.9692 L11.8746,17.9692 L11.8746,16.0942 L11.2496,13.7192 L12.4371,13.4692 L12.9996,15.4692 L14.9996,15.4692 C15.1709,15.4486 15.3421,15.5079 15.464,15.6298 C15.5684,15.7343 15.627,15.875 15.6286,16.021 L15.6246,16.0942 L15.6246,17.9692 L19.9996,17.9692 L19.9996,20.4692 L0.03711,20.4692 L0.03711,17.9692 L7.4996,17.9692 L7.4996,10.4692 L7.3746,10.4692 C6.939,10.8829 6.3709,11.125 5.7743,11.1539 L5.6246,11.1567 L5.5621,11.1567 C5.2584,11.1848 4.9527,11.1192 4.6871,10.9692 C3.7629,10.596 3.1533,9.7115 3.125,8.7236 L3.1246,8.2192 C3.2646,7.4811 3.7215,6.8411 4.3746,6.4692 C4.1965,6.1673 4.1096,5.8198 4.1246,5.4692 C4.1138,4.4467 4.8309,3.56784 5.8216,3.36462 L5.9371,3.3442 L5.9371,2.9067 C5.9252,2.08545 6.3877,1.33107 7.1246,0.9692 C7.7677,0.71795 8.4815,0.71795 9.1246,0.9692 Z M14.3746,16.7192 L13.1246,16.7192 L13.1246,17.9692 L14.3746,17.9692 L14.3746,16.7192 Z\"/>  </defs>  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#00A03C\" fill-rule=\"nonzero\"/>    <g transform=\"translate(7 6)\">      <mask id=\"label_groen-b\" fill=\"#fff\">        <use xlink:href=\"#label_groen-a\"/>      </mask>      <polygon fill=\"#FFF\" points=\".037 20.469 20.062 20.469 20.062 .744 .037 .744\" mask=\"url(#label_groen-b)\"/>    </g>  </g></svg>","width":34,"height":34}},
        {"name":"Geluid","color":"#FF9100","mapicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(0 -1)\">    <path fill=\"#FF9100\" fill-rule=\"nonzero\" d=\"M17,0.962891 C26.3917,0.962891 34,8.49722 34,17.7976 C34,30.4878 19.3587,43.4343 18.7259,43.947 L17,45.4567 L15.2741,43.947 C14.6413,43.4343 0,30.4878 0,17.7976 C0,8.49864 7.60829,0.962891 17,0.962891 Z\"/>    <path fill=\"#000\" d=\"M21.375,7.96289 L21.375,15.2191 C22.501,15.6081 23.2565,16.6684 23.2565,17.8598 C23.2565,19.0511 22.501,20.1114 21.375,20.5004 L21.375,27.7629 L14.8625,24.2691 L11.6375,27.4941 L9.86875,25.7254 L12.5563,23.0379 L11.6438,22.5504 L7,22.5504 L7,13.1754 L11.6438,13.1754 L21.375,7.96289 Z M18.875,12.1379 L13.25,15.1504 L13.25,20.5754 L18.875,23.5879 L18.875,12.1379 Z M24.3115,19.9105 L26.2229,21.746 L25.3571,22.6476 L23.4457,20.8121 L24.3115,19.9105 Z M12,15.6754 L9.5,15.6754 L9.5,20.0504 L12,20.0504 L12,15.6754 Z M27,17.2379 L27,18.4879 L24.5,18.4879 L24.5,17.2379 L27,17.2379 Z M25.3456,13.0055 L26.2295,13.8894 L24.3158,15.803 L23.432,14.9191 L25.3456,13.0055 Z\"/>  </g></svg>","width":34,"height":45,"anchor":[17,45]},"listicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#FF9100\" fill-rule=\"nonzero\"/>    <path fill=\"#000\" d=\"M21.375,6.96289 L21.375,14.2191 C22.501,14.6081 23.2565,15.6684 23.2565,16.8598 C23.2565,18.0511 22.501,19.1114 21.375,19.5004 L21.375,26.7629 L14.8625,23.2691 L11.6375,26.4941 L9.86875,24.7254 L12.5563,22.0379 L11.6438,21.5504 L7,21.5504 L7,12.1754 L11.6438,12.1754 L21.375,6.96289 Z M18.875,11.1379 L13.25,14.1504 L13.25,19.5754 L18.875,22.5879 L18.875,11.1379 Z M24.3115,18.9105 L26.2229,20.746 L25.3571,21.6476 L23.4457,19.8121 L24.3115,18.9105 Z M12,14.6754 L9.5,14.6754 L9.5,19.0504 L12,19.0504 L12,14.6754 Z M27,16.2379 L27,17.4879 L24.5,17.4879 L24.5,16.2379 L27,16.2379 Z M25.3456,12.0055 L26.2295,12.8894 L24.3158,14.803 L23.432,13.9191 L25.3456,12.0055 Z\"/>  </g></svg>","width":34,"height":34}},
        {"name":"Overig","color":"#A00078","mapicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34\" height=\"45\" viewBox=\"0 0 34 45\">  <defs>    <path id=\"marker_overig-a\" d=\"M4.25,12.207 L4.25,15.957 L0.5,15.957 L0.5,12.207 L4.25,12.207 Z M9.875,12.207 L9.875,15.957 L6.125,15.957 L6.125,12.207 L9.875,12.207 Z M15.5,12.207 L15.5,15.957 L11.75,15.957 L11.75,12.207 L15.5,12.207 Z M4.25,6.582 L4.25,10.332 L0.5,10.332 L0.5,6.582 L4.25,6.582 Z M9.875,6.582 L9.875,10.332 L6.125,10.332 L6.125,6.582 L9.875,6.582 Z M15.5,6.582 L15.5,10.332 L11.75,10.332 L11.75,6.582 L15.5,6.582 Z M4.25,0.95703 L4.25,4.707 L0.5,4.707 L0.5,0.95703 L4.25,0.95703 Z M9.875,0.95703 L9.875,4.707 L6.125,4.707 L6.125,0.95703 L9.875,0.95703 Z M15.5,0.95703 L15.5,4.707 L11.75,4.707 L11.75,0.95703 L15.5,0.95703 Z\"/>  </defs>  <g fill=\"none\" fill-rule=\"evenodd\">    <path fill=\"#A00078\" fill-rule=\"nonzero\" d=\"M17,0.457031 C26.3917,0.457031 34,7.99136 34,17.2918 C34,29.9819 19.3587,42.9284 18.7259,43.4411 L17,44.9509 L15.2741,43.4411 C14.6413,42.9284 0,29.9819 0,17.2918 C0,7.99278 7.60829,0.457031 17,0.457031 Z\"/>    <g transform=\"translate(9 9)\">      <mask id=\"marker_overig-b\" fill=\"#fff\">        <use xlink:href=\"#marker_overig-a\"/>      </mask>      <polygon fill=\"#FFF\" points=\".438 15.982 15.512 15.982 15.512 .907 .438 .907\" mask=\"url(#marker_overig-b)\"/>    </g>  </g></svg>","width":34,"height":45,"anchor":[17,45]},"listicon":{"html":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">  <defs>    <path id=\"label_overig-a\" d=\"M4.25,12.207 L4.25,15.957 L0.5,15.957 L0.5,12.207 L4.25,12.207 Z M9.875,12.207 L9.875,15.957 L6.125,15.957 L6.125,12.207 L9.875,12.207 Z M15.5,12.207 L15.5,15.957 L11.75,15.957 L11.75,12.207 L15.5,12.207 Z M4.25,6.582 L4.25,10.332 L0.5,10.332 L0.5,6.582 L4.25,6.582 Z M9.875,6.582 L9.875,10.332 L6.125,10.332 L6.125,6.582 L9.875,6.582 Z M15.5,6.582 L15.5,10.332 L11.75,10.332 L11.75,6.582 L15.5,6.582 Z M4.25,0.95703 L4.25,4.707 L0.5,4.707 L0.5,0.95703 L4.25,0.95703 Z M9.875,0.95703 L9.875,4.707 L6.125,4.707 L6.125,0.95703 L9.875,0.95703 Z M15.5,0.95703 L15.5,4.707 L11.75,4.707 L11.75,0.95703 L15.5,0.95703 Z\"/>  </defs>  <g fill=\"none\" fill-rule=\"evenodd\">    <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#A00078\" fill-rule=\"nonzero\"/>    <g transform=\"translate(9 9)\">      <mask id=\"label_overig-b\" fill=\"#fff\">        <use xlink:href=\"#label_overig-a\"/>      </mask>      <polygon fill=\"#FFF\" points=\".438 15.982 15.512 15.982 15.512 .907 .438 .907\" mask=\"url(#label_overig-b)\"/>    </g>  </g></svg>","width":34,"height":34}},
      ],
      areas: [
        //{ name: "Heel West",
        //  value: "Heel West",
        //  polygon: [{ "lng": 4.8353454, "lat": 52.3731265 }, { "lng": 4.8422025, "lat": 52.3721002 }, { "lng": 4.8421761, "lat": 52.3695836 }, { "lng": 4.8455807, "lat": 52.3696369 }, { "lng": 4.8476385, "lat": 52.369853 }, { "lng": 4.8477361, "lat": 52.3695885 }, { "lng": 4.8484176, "lat": 52.369697 }, { "lng": 4.8504835, "lat": 52.3653302 }, { "lng": 4.8504956, "lat": 52.3643692 }, { "lng": 4.8501587, "lat": 52.3638376 }, { "lng": 4.8494487, "lat": 52.3633001 }, { "lng": 4.8495059, "lat": 52.3610989 }, { "lng": 4.8489152, "lat": 52.3608149 }, { "lng": 4.8487824, "lat": 52.3578658 }, { "lng": 4.8504012, "lat": 52.3578553 }, { "lng": 4.8518982, "lat": 52.357844 }, { "lng": 4.8538275, "lat": 52.3581295 }, { "lng": 4.854723, "lat": 52.3578629 }, { "lng": 4.854635, "lat": 52.3577532 }, { "lng": 4.85436, "lat": 52.3572975 }, { "lng": 4.8540881, "lat": 52.3564026 }, { "lng": 4.8547969, "lat": 52.3562758 }, { "lng": 4.8698903, "lat": 52.3601067 }, { "lng": 4.8699397, "lat": 52.3600231 }, { "lng": 4.8714122, "lat": 52.3603737 }, { "lng": 4.8712647, "lat": 52.3605634 }, { "lng": 4.8715288, "lat": 52.3605997 }, { "lng": 4.8716826, "lat": 52.3604277 }, { "lng": 4.8738605, "lat": 52.3608533 }, { "lng": 4.8738525, "lat": 52.3610213 }, { "lng": 4.8740097, "lat": 52.3610407 }, { "lng": 4.8741351, "lat": 52.3608935 }, { "lng": 4.8750611, "lat": 52.3608041 }, { "lng": 4.8756501, "lat": 52.3606138 }, { "lng": 4.876429, "lat": 52.3607996 }, { "lng": 4.8765642, "lat": 52.3606177 }, { "lng": 4.876929, "lat": 52.3606957 }, { "lng": 4.8768495, "lat": 52.360911 }, { "lng": 4.8771709, "lat": 52.3609696 }, { "lng": 4.8774, "lat": 52.3607583 }, { "lng": 4.8819952, "lat": 52.3620427 }, { "lng": 4.8813956, "lat": 52.3630818 }, { "lng": 4.8808146, "lat": 52.3634904 }, { "lng": 4.8793708, "lat": 52.3643261 }, { "lng": 4.8792691, "lat": 52.3649574 }, { "lng": 4.8787082, "lat": 52.3658206 }, { "lng": 4.8775395, "lat": 52.3667815 }, { "lng": 4.8767523, "lat": 52.3685117 }, { "lng": 4.8754901, "lat": 52.3697867 }, { "lng": 4.8745065, "lat": 52.3718772 }, { "lng": 4.8745782, "lat": 52.3725454 }, { "lng": 4.8753796, "lat": 52.373407 }, { "lng": 4.8755899, "lat": 52.3743025 }, { "lng": 4.8799131, "lat": 52.3813052 }, { "lng": 4.8796339, "lat": 52.3819128 }, { "lng": 4.880478, "lat": 52.3822531 }, { "lng": 4.8818058, "lat": 52.3843528 }, { "lng": 4.882637, "lat": 52.3854107 }, { "lng": 4.8846503, "lat": 52.3883466 }, { "lng": 4.8857963, "lat": 52.3881476 }, { "lng": 4.8911796, "lat": 52.3884502 }, { "lng": 4.8937804, "lat": 52.3886712 }, { "lng": 4.8956658, "lat": 52.3888313 }, { "lng": 4.8927982, "lat": 52.3933453 }, { "lng": 4.8850924, "lat": 52.398824 }, { "lng": 4.8762366, "lat": 52.3945287 }, { "lng": 4.8726422, "lat": 52.3948206 }, { "lng": 4.8719896, "lat": 52.3947192 }, { "lng": 4.8719508, "lat": 52.3952766 }, { "lng": 4.8715979, "lat": 52.39538 }, { "lng": 4.8667403, "lat": 52.393136 }, { "lng": 4.8643092, "lat": 52.3927072 }, { "lng": 4.8627057, "lat": 52.3938521 }, { "lng": 4.8603441, "lat": 52.3949382 }, { "lng": 4.858593, "lat": 52.3952782 }, { "lng": 4.8569204, "lat": 52.3953667 }, { "lng": 4.8569896, "lat": 52.3938363 }, { "lng": 4.8573172, "lat": 52.3938424 }, { "lng": 4.8574043, "lat": 52.3920751 }, { "lng": 4.8589526, "lat": 52.3912226 }, { "lng": 4.8592744, "lat": 52.3905434 }, { "lng": 4.8592929, "lat": 52.3887899 }, { "lng": 4.8449045, "lat": 52.3887733 }, { "lng": 4.8451066, "lat": 52.3850658 }, { "lng": 4.8446526, "lat": 52.3850638 }, { "lng": 4.8390117, "lat": 52.3850241 }, { "lng": 4.8392807, "lat": 52.3829687 }, { "lng": 4.838548, "lat": 52.3808766 }, { "lng": 4.836707, "lat": 52.3763581 }, { "lng": 4.8353454, "lat": 52.3731265 }] },
        //{ name: "De Baarsjes",
        //  value: "De Baarsjes",
        //  polygon: [{"lng":4.8558724,"lat":52.374202},{"lng":4.8577714,"lat":52.3681953},{"lng":4.8582878,"lat":52.3648623},{"lng":4.8592819,"lat":52.3648966},{"lng":4.8598228,"lat":52.364783},{"lng":4.8613989,"lat":52.3664539},{"lng":4.8661845,"lat":52.3717538},{"lng":4.8664001,"lat":52.3721596},{"lng":4.8663889,"lat":52.372566},{"lng":4.865846,"lat":52.3733281},{"lng":4.8646717,"lat":52.3734961},{"lng":4.8641583,"lat":52.3750737},{"lng":4.8640923,"lat":52.3752839},{"lng":4.8559599,"lat":52.3743342},{"lng":4.8558724,"lat":52.374202}] },
        //{ name: "Oud West",
        //  value: "Oud West",
        //  polygon: [{"lng":4.8546816,"lat":52.3568634},{"lng":4.855041,"lat":52.3563261},{"lng":4.858839,"lat":52.3572696},{"lng":4.8625458,"lat":52.3582427},{"lng":4.8646701,"lat":52.3588487},{"lng":4.868731,"lat":52.3597955},{"lng":4.8703188,"lat":52.3601231},{"lng":4.8717136,"lat":52.3604376},{"lng":4.8738218,"lat":52.3609651},{"lng":4.8763055,"lat":52.3607226},{"lng":4.8776842,"lat":52.3608635},{"lng":4.878167,"lat":52.3610044},{"lng":4.8812676,"lat":52.3618856},{"lng":4.8807043,"lat":52.3623966},{"lng":4.8798675,"lat":52.3633663},{"lng":4.8795778,"lat":52.3639428},{"lng":4.8792613,"lat":52.3644931},{"lng":4.8791272,"lat":52.3650598},{"lng":4.8787785,"lat":52.3656691},{"lng":4.8779202,"lat":52.3663734},{"lng":4.8773838,"lat":52.366809},{"lng":4.8772336,"lat":52.3676312},{"lng":4.8769385,"lat":52.3681389},{"lng":4.8754311,"lat":52.3697536},{"lng":4.8746211,"lat":52.3714043},{"lng":4.8744494,"lat":52.3720594},{"lng":4.8744602,"lat":52.3723083},{"lng":4.8752166,"lat":52.3729895},{"lng":4.8745943,"lat":52.3731762},{"lng":4.870925,"lat":52.3724033},{"lng":4.8680175,"lat":52.3717974},{"lng":4.8665959,"lat":52.3715648},{"lng":4.8654211,"lat":52.3703825},{"lng":4.8641176,"lat":52.3689905},{"lng":4.8628623,"lat":52.3676443},{"lng":4.8616499,"lat":52.3662554},{"lng":4.8604268,"lat":52.3648862},{"lng":4.8602505,"lat":52.3647431},{"lng":4.8591448,"lat":52.3634056},{"lng":4.8580772,"lat":52.3621247},{"lng":4.8575783,"lat":52.3615515},{"lng":4.857117,"lat":52.3604245},{"lng":4.856248,"lat":52.3592681},{"lng":4.8555345,"lat":52.3580035},{"lng":4.855299,"lat":52.357674},{"lng":4.855269,"lat":52.3576447},{"lng":4.855115,"lat":52.3574166},{"lng":4.8549071,"lat":52.3571512},{"lng":4.85479,"lat":52.3570018},{"lng":4.8546816,"lat":52.3568634}] },
      ],
      titleField: 'title',
      summaryField: 'summary',
      typeField: self.config.typeField || 'extraData.theme',
      areaField: self.config.areaField || 'extraData.gebied',
      user: {},
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false,
      },
      idea: {
        titleMinLength: 10,
        titleMaxLength: 20,
        summaryMinLength: 20,
        summaryMaxLength: 140,
        descriptionMinLength: 140,
        descriptionMaxLength: 5000,
      },
      argument: {
        descriptionMinLength: 30,
        descriptionMaxLength: 500,
      },
		};
		self.config = Object.assign(self.defaultConfig, props.config, self.config || {})

    console.log(self.config);
    

    // defaults
    self.config.doSearchFunction = self.config.doSearchFunction || self.doSearch.bind(self);
    self.config.map = self.config.map || {};
    self.config.map.onMapClick = self.config.map.onMapClick || self.onMapClick.bind(self);
    self.config.map.onMarkerClick = self.config.map.onMarkerClick || self.onMarkerClick.bind(self);
    self.config.map.clustering = self.config.map.clustering || {};
    self.config.map.clustering.onClusterClick = self.config.map.clustering.onClusterClick || self.onClusterClick.bind(self);
    this.config.map.autoZoomAndCenter = 'polygon';
    // Todo: configurabel
    self.config.map.polygon = [ { lng: 4.8923325, lat: 52.3578818 }, { lng: 4.8922574, lat: 52.3574723 }, { lng: 4.8920697, lat: 52.3574854 }, { lng: 4.8919410, lat: 52.3567908 }, { lng: 4.8906860, lat: 52.3568661 }, { lng: 4.8904125, lat: 52.3552313 }, { lng: 4.8928991, lat: 52.3556621 }, { lng: 4.8928025, lat: 52.3558538 }, { lng: 4.8930225, lat: 52.3558964 }, { lng: 4.8931164, lat: 52.3557162 }, { lng: 4.8953144, lat: 52.3562174 }, { lng: 4.8971003, lat: 52.3566958 }, { lng: 4.8969823, lat: 52.3568498 }, { lng: 4.8971968, lat: 52.3569055 }, { lng: 4.8973095, lat: 52.3567646 }, { lng: 4.8985805, lat: 52.3571577 }, { lng: 4.8984679, lat: 52.3572757 }, { lng: 4.8986020, lat: 52.3573281 }, { lng: 4.8985215, lat: 52.3575247 }, { lng: 4.8983499, lat: 52.3574952 }, { lng: 4.8982480, lat: 52.3574985 }, { lng: 4.8982748, lat: 52.3574362 }, { lng: 4.8972826, lat: 52.3571512 }, { lng: 4.8931691, lat: 52.3574493 }, { lng: 4.8932067, lat: 52.3576099 }, { lng: 4.8931262, lat: 52.3576131 }, { lng: 4.8931584, lat: 52.3578228 }, { lng: 4.8923325, lat: 52.3578810 } ]

    self.state = {
      ideas: [],
      visibleIdeas: [],
      status: 'default', // default, idea-selected, location-selected, idea-details, idea-form
      mobileState: 'closed',
      // oud
      currentIdea: null,
      editIdea: null,
      // new, maar nog niet overal gebruikt
      selectedIdea: null,
      selectedLocation: null,
    }
    
  }

	componentDidMount(prevProps, prevState) {

    let self = this;

    // when the map is ready
		self.map.instance.addEventListener('mapIsReady', function(e) {

      // fetch the data
      self.fetchData({});

      // handle map changes
      self.map.map.on('zoomend', function() {
        self.onChangeMapBoundaries();
      });
      self.map.map.on('moveend', function() {
        self.onChangeMapBoundaries();
      });

    });

    // handle filter changes
		document.addEventListener('typeFilterUpdate', function(event) {
      self.onChangeTypeFilter(event.detail.value);
    });
		document.addEventListener('areaFilterUpdate', function(event) {
      self.onChangeAreaFilter(event.detail.value);
    });

    // handle infoblock changes
		document.addEventListener('updateSelectedIdea', function(event) {
      self.onUpdateSelectedIdea(event.detail.idea);
    });
		document.addEventListener('closeSelectedLocation', function(event) {
      self.onCloseSelectedLocation(event.detail.idea);
    });
		document.addEventListener('updateEditIdea', function(event) {
      self.onUpdateEditIdea(event.detail.idea);
    });
		document.addEventListener('ideaClick', function(event) {
      self.onIdeaClick(event.detail.idea);
    });
		document.addEventListener('selectedIdeaClick', function(event) {
      self.onSelectedIdeaClick(event.detail.idea);
    });
		document.addEventListener('newIdeaClick', function(event) {
      self.onNewIdeaClick();
    });
		document.addEventListener('clickMobileSwitcher', function(event) {
      self.onClickMobileSwitcher();
    });

    // details changes
		document.addEventListener('ideaLiked', function(event) {
      self.onIdeaLiked(event.detail);
    });
		document.addEventListener('reactionStored', function(event) {
      self.onReactionStored(event.detail);
    });
		document.addEventListener('reactionDeleted', function(event) {
      self.onReactionDeleted(event.detail);
    });
		document.addEventListener('editIdeaClick', function(event) {
      self.onEditIdeaClick(event.detail);
    });
		document.addEventListener('ideaDeleted', function(event) {
      self.onIdeaDeleted(event.detail);
    });

    // form changes
		document.addEventListener('newIdeaStored', function(event) {
      self.onNewIdeaStored(event.detail.idea);
    });
    
	}

  fetchData({ showIdeaDetails, showIdeaSelected }) {

    let self = this;
    let url = `${ self.config.api.url }/api/site/${  self.config.siteId  }/idea?includeVoteCount=1&includeArguments=1&includeUser=1`;

    // remove existing
    while(self.map.markers.length > 0) {
      let marker = self.map.markers[0];
      self.map.removeMarker(marker)
    }
    self.map.markers = [];

    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then( json => {
        showIdeaDetails = showIdeaDetails || OpenStadComponentLibs.localStorage.get('osc-ideas-on-map-details'); //  document.location.hash.replace(/.*details=(\d+).*/, "$1");
        showIdeaSelected = showIdeaSelected || OpenStadComponentLibs.localStorage.get('osc-ideas-on-map-selected'); // document.location.hash.replace(/.*selected=(\d+).*/, "$1");
        let ideas = json.filter( idea => idea.location )
        ideas.map( idea => {
          if ( idea.id == showIdeaDetails) {
            showIdeaDetails = idea;
          }
          if ( idea.id == showIdeaSelected) showIdeaSelected = idea;
          idea.image = (idea.posterImage && idea.posterImage.key) || (idea.extraData && idea.extraData.images && idea.extraData.images[0]) || "https://stemvanwest.amsterdam.nl/img/placeholders/idea.jpg";
          self.map.addIdea(idea);
				});

        self.setState({ ideas }, function () {
          // self.setSelectedLocation({ lat: 52.37104644463586, lng: 4.900402911007405 })
          // return setTimeout(function(){ self.showIdeaForm() }, 500)
          if (typeof showIdeaSelected == 'object' && showIdeaSelected != null) {
						self.setNewIdea(null);
						self.setSelectedIdea(showIdeaSelected);
            self.setState({ status: 'idea-selected', currentIdea: showIdeaSelected }, function() {
              // todo: dit zou hij zelf via state moeten doen
              self.map.map.invalidateSize();
              self.map.showMarkers(self.map.markers)
              self.setSelectedIdea(self.state.currentIdea)
            });
          }
          if (typeof showIdeaDetails == 'object' && showIdeaDetails != null) {
						self.setSelectedIdea(showIdeaDetails);
						self.setNewIdea(null);
					  self.showIdeaDetails(showIdeaDetails);
          }
          self.onChangeMapBoundaries();
          // dev form
          //if (!showIdeaSelected) {
					//  self.setSelectedIdea(null);
					//  self.setNewIdea({ location: { coordinates: [52.37104644463586, 4.900402911007405] }, title: "Rutrum tincidunt", type: "Kans", theme: "Overig", summary: "rutrum tincidunt, dui sapien feugiat justo, eget egestas ligula nulla nec erat.", description: "rutrum tincidunt, dui sapien feugiat justo, eget egestas ligula nulla nec erat. maecenas tempus tempor eros. donec a justo. curabitur tellus. pellentesque risus. fusce at arcu. ut lacinia mi vel lectus. phasellus imperdiet. fusce luctus lacus a odio. in et turpis at libero tristique vulputate. sed varius ipsum. suspendisse potenti. suspendisse potenti. donec tempus arcu quis metus."});
					//  self.showIdeaForm();
          //}
				});

      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

  showIdeaDetails(idea) {
    let self = this;
    self.setSelectedIdea(idea);
    OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-details', idea && idea.id );
    OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-selected', null);
    // self.infoblock.setState({ mobileState: self.state.mobileState = 'opened' })
    self.setState({ status: 'idea-details', currentIdea: idea }, function() {
    // self.setState({ status: 'idea-details', currentIdea: idea, mobileState: self.state.mobileState = 'opened' }, function() {
      self.map.map.invalidateSize();
      self.map.hideMarkers({ exception: { location: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] } } })
    });
  }

  hideIdeaDetails() {
    let self = this;
    self.setState({ status: 'idea-selected' }, function() {
      // todo: dit zou hij zelf via state moeten doen
      self.map.map.invalidateSize();
      self.map.showMarkers(self.map.markers)
      self.setSelectedIdea(self.state.currentIdea)
    });
  }

  showIdeaForm(idea, next) {
    let self = this;
    self.setState({ status: 'idea-form', editIdea: idea }, function() {
      self.map.map.invalidateSize();
      self.map.hideMarkers({ exception: { location: idea && { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] } || self.map.selectedLocation } })
      if (next) next();
    });
  }

  hideIdeaForm() {
    let self = this;
    if (this.state.editIdea && typeof this.state.editIdea.id == 'number') {
      console.log(self.state.editIdea);
      let idea = self.state.ideas.find(idea => idea.id == self.state.editIdea.id)
      console.log(idea);
      self.showIdeaDetails(idea)
    } else {
      self.setState({ status: 'location-selected' }, function() {
        // todo: dit zou hij zelf via state moeten doen
        self.map.map.invalidateSize();
        self.map.showMarkers(self.map.markers)
        self.setNewIdea(self.state.editIdea)
      });
    }
  }

	doSearch(searchValue, callback) {

		let self = this;
    let searchValueLc = searchValue.toLowerCase();

		let searchResult = { ideas: [], locations: [] };

    // search in ideas
		this.state.ideas.forEach((idea) => {
			let title = eval(`idea.${self.config.titleField}`) || '';
      let titlelLc = title.toLowerCase();
			let summary = eval(`idea.${self.config.summaryField}`) || '';
      let summaryLc = summary.toLowerCase();
			if (titlelLc.match(searchValueLc) || summaryLc.match(searchValueLc)) {
				searchResult.ideas.push({
					text: title,
					onClick: function() {
            self.onUpdateSelectedIdea(idea)
          },
				})
			}
		});

    // search for addresses
    fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?rows=5&fq=gemeentenaam:amsterdam&fq=*:*&q=' + searchValueLc, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
			.then((response) => {
				return response.json();
			})
      .then( json => {
        if (json && json.response && json.response.docs && json.response.docs.length) {
          searchResult.locations = json.response.docs.map( found => { return {
						text: found.weergavenaam,
						onClick: function() { onClickAddress(found.id) },
					}});
        }
        callback(searchValue, searchResult)
      })
      .catch((err) => {
        console.log('Search failed:', err);
        callback(searchValue, searchResult)
      });
    
    function onClickAddress(id) {
      fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?fq=gemeentenaam:amsterdam&&id=' + id, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
			  .then((response) => {
				  return response.json();
			  })
        .then( json => {
          if (json && json.response && json.response.docs && json.response.docs[0]) {
            let centroide_ll = json.response.docs[0].centroide_ll;
            let match = centroide_ll.match(/POINT\((\d+\.\d+) (\d+\.\d+)\)/);
            self.map.map.panTo(new L.LatLng(match[2], match[1]));
            self.onMapClick({ latlng: { lat: match[2], lng: match[1] } }, true)
          }
        })
        .catch((err) => {
          console.log('Search failed:', err);
          callback(searchValue, searchResult)
        });
      
    }
		
	}

  setCurrentPolygon(polygon) {
    let state = { ...this.state };
    state.currentPolygon = polygon ? this.map.createCutoutPolygon(polygon): undefined;
    this.setState(state);
  }

  removeCurrentPolygon() {
    this.map.removePolygon(this.state.currentPolygon)
    let state = { ...this.state };
    state.currentPolygon = undefined;
    this.setState(state);
  }

  getVisibleIdeas() {
		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
      return this.state.visibleIdeas;
    } else {
      let visibleIdeas = this.map.getVisibleIdeas()
      this.setState({ visibleIdeas });
      return visibleIdeas;
    }
  }

  setSelectedLocation(location) {
    let self = this;
    self.map.setSelectedLocation(location)
    if (self.ideaform) {
      if (!location) return;
      self.ideaform.handleLocationChange({ location, address: 'Bezig met adresgegevens ophalen...' });
			self.map.getPointInfo(location, null, function(json, marker) {
				let address = json && json._display || 'Geen adres gevonden';
				self.state.editIdea.address = address;
				self.ideaform.handleLocationChange({ location, address: address });
			})
    }
  }

  setNewIdea(idea) {
    let self = this;
    if (idea) idea.isPointInPolygon = idea.location && self.map.isPointInPolygon( { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, self.config.map.polygon )
    self.setState({ editIdea: idea }, function() {
      if (idea) {
        self.map.fadeMarkers({exception: [idea.location]});
        self.setSelectedLocation({ lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] });  
        if (self.infoblock) {
          self.setState({ editIdea: self.state.editIdea });
          self.infoblock.setNewIdea({ ...self.state.editIdea, address: 'Bezig met adresgegevens ophalen...' });
          self.map.getPointInfo({ lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, null, function(json, marker) {
            let address = json && json._display || 'Geen adres gevonden';
            let editIdea = self.state.editIdea;
            editIdea.address = address;
            self.setState({ editIdea });
            self.infoblock.setNewIdea({ ...self.state.editIdea, address });
          })
          //self.infoblock.updateIdeas({ ideas: self.getVisibleIdeas().filter( x => x.id != idea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });
          self.infoblock.updateIdeas({ ideas: self.state.ideas.filter( x => x.id != idea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });
        }
      } else {
        self.map.unfadeAllMarkers();
        self.setSelectedLocation(null);
        if (self.infoblock) {
          self.infoblock.setNewIdea(null);
          self.infoblock.updateIdeas({ ideas: self.getVisibleIdeas(), showSortButton: true });
        }
      }
    });
  }

  setSelectedIdea(idea) {
    OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-selected', idea && idea.id );
    OpenStadComponentLibs.localStorage.set('osc-ideas-on-map-details', null);
    this.selectedIdea = idea;
    if (idea) {
      this.map.fadeMarkers({exception: idea});
      if (this.infoblock) {
        this.infoblock.setSelectedIdea(idea);
        // this.infoblock.updateIdeas({ ideas: this.getVisibleIdeas().filter( x => x.id != idea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });
        this.infoblock.updateIdeas({ ideas: this.state.ideas.filter( x => x.id != idea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] }, maxLength: 5 });
      }
    } else {
      this.map.unfadeAllMarkers();
      if (this.infoblock) {
        this.infoblock.setSelectedIdea(null);
        this.infoblock.updateIdeas({ ideas: this.getVisibleIdeas(), showSortButton: true });
      }
    }
  }
  
	onMapClick(event, forceSelectLocation) {

		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
			this.infoblock.setState({ mobileState: 'closed' })
			this.setState({ mobileState: 'closed' }, function() {
				this.map.map.invalidateSize();
			})
			return;
		}

    switch (this.state.status) {

      case 'idea-details':
        break;

      case 'idea-form':
        let isPointInPolygon = this.map.isPointInPolygon( event.latlng, this.config.map.polygon );
        if (isPointInPolygon) this.setSelectedLocation(event.latlng)
        break;

      default:
        if (( this.selectedIdea || this.map.selectedLocation ) && !forceSelectLocation) {
          this.setState({ ...this.state, status: 'default', currentIdea: null });
          this.setSelectedIdea(null);
          this.setNewIdea(null);
          this.infoblock.updateIdeas({ ideas: this.getVisibleIdeas(), showSortButton: true });
        } else {
          this.setState({ ...this.state, status: 'location-selected', currentIdea: null });
          this.setSelectedIdea(null);
          let newIdea = { id: 'New Idea', location: { coordinates: [ event.latlng.lat, event.latlng.lng ] } };
          this.setNewIdea(newIdea);
          // setTimeout( function() {
		      // var event = new CustomEvent('newIdeaClick', { detail: { newIdea } });
		      //   document.dispatchEvent(event);
          // }, 500 );
        }
        this.map.updateFading();
        document.querySelector('#osc-ideas-on-map-info').scrollTo(0,0)
    }
  }

	onMarkerClick(event) {

		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
			this.infoblock.setState({ mobileState: 'closed' })
			this.setState({ mobileState: 'closed' }, function() {
				this.map.map.invalidateSize();
			})
			return;
		}

		switch (this.state.status) {

      case 'idea-details':
        break;

      case 'idea-form':
        break;

      default:
        if (this.state.editIdea) {
          this.setState({ status: 'default', currentIdea: null });
          this.setNewIdea(null);
          this.setSelectedIdea(null);
          this.setSelectedIdea(null);
        } else {
          this.setState({ status: 'idea-selected', currentIdea: event.target.data });
          this.setNewIdea(null);
          this.setSelectedIdea(event.target.data);
        }
        document.querySelector('#osc-ideas-on-map-info').scrollTo(0,0)

    }
  }

	onClusterClick(event) {

		if ( this.state.mobileState == 'opened' ) { // werkt omdat hij alleen op mobiel opend kan zijn
			this.infoblock.setState({ mobileState: 'closed' })
			this.setState({ mobileState: 'closed' }, function() {
				this.map.map.invalidateSize();
			})
			return;
		}

    this.setState({ ...this.state, status: 'default', currentIdea: null });
    this.setNewIdea(null);
    this.setSelectedIdea(null);
  }

  onChangeMapBoundaries() {
    let self = this;
    self.map.updateFading();
    switch (self.state.status) {

      case 'idea-details':
        break;

      case 'idea-form':
        break;

      case 'idea-selected':
      case 'location-selected':
        if (self.infoblock) {
          let selectedIdea = self.state.currentIdea || self.selectedIdea || self.state.editIdea;
          if (selectedIdea && selectedIdea) {
            self.infoblock.updateIdeas({ ideas: self.state.ideas.filter( x => x.id != selectedIdea.id ), sortOrder: 'distance', showSortButton: false, center: { lat: selectedIdea.location.coordinates[0], lng: selectedIdea.location.coordinates[1] }, maxLength: 5 });
          }
        }
        break;

      default:
        if (self.infoblock) {
          self.infoblock.updateIdeas({ ideas: self.getVisibleIdeas(), showSortButton: true });
        }

    }
  }

	onUpdateEditIdea(idea) {
    this.setState({ ...this.state, editIdea: { ...idea }, currentIdea: idea });
  }

	onUpdateSelectedIdea(idea) {
    if (this.state.editIdea) this.setNewIdea(null);
    let status = idea ? 'idea-selected' : 'default';
    this.setState({ ...this.state, status, currentIdea: idea }, function() {
      this.setSelectedIdea(idea);
    });
  }

	onCloseSelectedLocation() {
    this.setState({ ...this.state, status: 'default', currentIdea: null }, function() {
      this.setSelectedIdea(null);
      this.setNewIdea(null);
      this.setSelectedLocation(null);
    });
  }
  
  onIdeaClick(idea) {
    // let showDetails = this.state.status == 'location-selected' || this.state.status == 'idea-selected';
    if (this.state.editIdea) this.setNewIdea(null);
    this.setState({ status: 'idea-selected', currentIdea: idea }, function() {
      this.setSelectedIdea(idea);
      // if (showDetails) this.showIdeaDetails(idea);
      this.showIdeaDetails(idea);
    });
  };

  onEditIdeaClick(idea) {
    let self = this;
    let location = { lat: idea.location.coordinates[0], lng: idea.location.coordinates[1] };
    self.showIdeaForm(idea, () => {
      self.ideaform.handleLocationChange({ location, address: 'Bezig met adresgegevens ophalen...' });
		  self.map.getPointInfo(location, null, function(json, marker) {
        console.log('xxx', json);
			  let address = json && json._display || 'Geen adres gevonden';
        console.log(address);
			  self.state.editIdea.address = address;
			  self.ideaform.handleLocationChange({ location, address: address });
		  })
    });
  };

  onIdeaDeleted(ideaId) {
    let self = this;
    self.setNewIdea(null);
    self.setSelectedIdea(null);
    self.setSelectedLocation(null);
    self.setState({ status: 'default' }, function() {
      self.map.map.invalidateSize();
      self.map.setBoundsAndCenter(self.config.map.polygon || self.map.markers);
      self.fetchData({});
    });
  };

  onDeleteIdeaClick(idea) {
    console.log('Delete idea', idea.id);
    alert('TODO')
  };

  onSelectedIdeaClick(idea) {
    this.showIdeaDetails(idea);
  };
  
  onNewIdeaClick() {
    let self = this;
    self.showIdeaForm(this.state.editIdea, () => {
      let location = { lat: this.state.editIdea.location.coordinates[0], lng: this.state.editIdea.location.coordinates[1] };
      self.ideaform.handleLocationChange({ location, address: 'Bezig met adresgegevens ophalen...' });
		  self.map.getPointInfo(location, null, function(json, marker) {
        console.log('xxx', json);
			  let address = json && json._display || 'Geen adres gevonden';
        console.log(address);
			  self.state.editIdea.address = address;
			  self.ideaform.handleLocationChange({ location, address: address });
		  })
    });
  };


  onNewIdeaStored(idea) {
    let self = this;
    self.setNewIdea(null);
    self.fetchData({showIdeaSelected: idea.id});
  }

  onIdeaLiked(data) {
    let idea = this.state.ideas.find( idea => idea.id == data.ideaId );
    idea.yes += data.change;
  }

  onReactionStored(data) {
    let idea = this.state.ideas.find( idea => idea.id == data.ideaId );
    idea.argCount++;
    setTimeout(e => { window.location.hash = `#osc-reaction-${data.id}` }, 1000);
  }

  onReactionDeleted(data) {
    let idea = this.state.ideas.find( idea => idea.id == data.ideaId );
    idea.argCount--;
  }
  
  onChangeTypeFilter(value) {
    let self = this;
    self.setSelectedIdea(null);
    self.setNewIdea(null);
    self.setSelectedLocation(null);
	  self.map.setFilter(function(marker) {
		  if (value && value !== '0') {
			  return marker.data && eval(`marker.data.${self.config.typeField}`) && eval(`marker.data.${self.config.typeField}`) == value;
		  } else {
			  return true;
		  }
	  })
    self.setState({ status: 'default' })
    self.onChangeMapBoundaries(); // todo: rename
  }

  onChangeAreaFilter(area) {
    let self = this;
    self.setSelectedIdea(null);
    self.setNewIdea(null);
    self.removeCurrentPolygon();
    self.setCurrentPolygon( area && area.polygon );
    self.setState({ status: 'default' })
    self.map.setBoundsAndCenter(area && area.polygon || self.config.map.polygon || self.map.markers);
  }

  onClickMobileSwitcher() {
    let self = this;
    self.infoblock.setState({ mobileState: self.state.mobileState == 'closed' ? 'opened' : 'closed' })
    self.setState({ mobileState: self.state.mobileState == 'closed' ? 'opened' : 'closed' }, function() {
      self.map.map.invalidateSize();
      if (this.state.status == 'location-selected' || this.state.status == 'idea-selected') {
        let selectedIdea = self.state.currentIdea || self.selectedIdea || self.state.editIdea;
        self.map.setBoundsAndCenter([{ lat: selectedIdea.location.coordinates[0], lng: selectedIdea.location.coordinates[1] }]);
      }
    })
  }
  
	render() {

    let infoHTML = null; // todo: ik denk dat dit naar infoblock moet
    let filterHTML = null;
    let mobilePopupHTML = null;

    switch(this.state.status) {

      case 'idea-details':
        let config = { // TODO: niet bij elke render
          titleField: this.config.titleField,
          summaryField: this.config.summaryField,
          typeField: this.config.typeField,
          areaField: this.config.areaField,
          siteId: this.config.siteId,
          user: this.config.user,
          api: this.config.api,
          argument: this.config.argument,
          labels: {
            Kans: { text: 'Dit gaat goed', color: 'black', backgroundColor: '#bed200' },
            Knelpunt: { text: 'Dit kan beter', color: 'black', backgroundColor: '#ff9100' },
          }
        };
        infoHTML = (
			    <IdeaDetails id={this.divId + '-infoblock'} config={config} idea={this.state.currentIdea} label={this.state.currentIdea.extraData.type} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" mobileState={this.state.mobileState} ref={el => (this.ideadetails = el)}/>
        );
        filterHTML = (
				  <div className="osc-ideas-on-map-filterbar"><div className="osc-backbutton" onClick={() => this.hideIdeaDetails()}>Terug naar overzicht</div></div>
        );
        break;

      case 'idea-form':
        infoHTML = (
			    <IdeaForm id={this.divId + '-infoblock'} config={{ siteId: this.config.siteId, user: this.config.user, api: this.config.api, ...this.config.idea }} idea={{ ...this.state.editIdea, user: this.state.editIdea && this.state.editIdea.user || this.config.user }} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" mobileState={this.state.mobileState} ref={el => (this.ideaform = el)}/>
        );
        filterHTML = (
				  <div className="osc-ideas-on-map-filterbar"><div className="osc-backbutton" onClick={() => this.hideIdeaForm()}>Terug naar {this.state.editIdea && typeof this.state.editIdea.id == 'number' ? 'idee' : 'overzicht'}</div></div>
        );
        break;

      case 'location-selected':
      case 'idea-selected':
        if (this.state.status == 'location-selected') {
          if (this.state.editIdea && this.state.editIdea.isPointInPolygon) {
            let buttonHTML = this.config.api.isUserLoggedIn
                ? (<button className="osc-button osc-button-blue" onClick={(event) => { this.onClickMobileSwitcher(event); this.onNewIdeaClick(event)} } ref={el => (self.newIdeaButton = el)}>Nieuw punt toevoegen</button>)
                : (<div>Wilt u een nieuw punt toevoegen? Dan moet u eerst <a href="javascript: document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href)">inloggen</a>.</div>);
            mobilePopupHTML = (
              <div className="ocs-mobile-popup">
                Een locatie vlakbij
                <h4>{this.state.editIdea && this.state.editIdea.address}</h4>
                {buttonHTML}
              </div>
            );
          }
        } else {
          mobilePopupHTML = (
            <div className="ocs-mobile-popup ocs-clickable" onClick={ () =>  { this.setState({ mobileState: 'opened' }); this.infoblock.setState({ mobileState: 'opened' }); this.showIdeaDetails(this.state.currentIdea) } }>
              <div className="osc-image" style={{ backgroundImage: `url(${this.state.currentIdea && this.state.currentIdea.image})` }}></div>
              { eval(this.state.currentIdea && `this.state.currentIdea.${this.config.titleField}`) }
            </div>
          );
        }
        infoHTML = (
			    <InfoBlock id={this.divId + '-infoblock'} config={{ api: this.config.api, title: this.config.title, titleField: this.config.titleField, summaryField: this.config.summaryField, types: this.config.types  }} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" mobileState={this.state.mobileState} ref={el => (this.infoblock = el)}/>
        );
        filterHTML = (
				  <Filterbar id={this.divId + '-filterbar'} config={{ types: this.config.types, areas: this.config.areas, doSearchFunction: this.config.doSearchFunction, title: this.config.title }} className="osc-ideas-on-map-filterbar" ref={el => (this.filterbar = el)}/>
        );
        break;

      default:
        infoHTML = (
			    <InfoBlock id={this.divId + '-infoblock'} config={{ api: this.config.api, title: this.config.title, titleField: this.config.titleField, summaryField: this.config.summaryField, types: this.config.types  }} id="osc-ideas-on-map-info" className="osc-ideas-on-map-info" mobileState={this.state.mobileState} ref={el => (this.infoblock = el)}/>
        );
        filterHTML = (
				  <Filterbar id={this.divId + '-filterbar'} config={{ types: this.config.types, areas: this.config.areas, doSearchFunction: this.config.doSearchFunction, title: this.config.title }} className="osc-ideas-on-map-filterbar" ref={el => (this.filterbar = el)}/>
        );
        mobilePopupHTML = null;
        break;
            
    }

    return (
			<div id={this.divId} className={`osc-ideas-on-map osc-ideas-on-map-${this.state.status} osc-mobile-${this.state.mobileState}`} ref={el => (this.instance = el)}>
        {filterHTML}
        {infoHTML}
        <div className="osc-ideas-on-map-map">
				  <Map id={this.divId + '-map'} className="" config={{ ...this.config.map, types: this.config.types, typeField: this.config.typeField }} ref={el => (this.map = el)}/>
        </div>
        {mobilePopupHTML}
			</div>
    );

  }

}
