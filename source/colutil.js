/**
 *
 * Copyright [2015] [Yoshihiro Tanaka]
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Yoshihiro Tanaka <contact@cordea.jp>
 * date  : 2015-11-26
 */

var colutil = {};

colutil.rgb = function(r, g, b) {
    this.r = parseInt(r);
    this.g = parseInt(g);
    this.b = parseInt(b);
}

colutil.getGithubGradation = function(startRgb) {
    var grads = [];

    var r = startRgb.r;
    var g = startRgb.g;
    var b = startRgb.b;

    var grad;
    var hex;
    for (var i = 0; i <= 4; i++) {
        var p = i / 5;
        grad = new colutil.rgb(
                Math.round((255 - r) * p) + r,
                Math.round((255 - g) * p) + g,
                Math.round((255 - b) * p) + b
                );
        hex = colutil.rgbToHex(grad);
        grads.push(hex);
    }

    var rev = [];
    for (var i = grads.length - 1; i >= 0 ; i--) {
        rev.push(grads[i]);
    }

    return rev;
}

colutil.rgbToHex = function(rgb) {
    return "#" + colutil.decToHex(rgb.r) + colutil.decToHex(rgb.g) + colutil.decToHex(rgb.b);
}

colutil.decToHex = function(dec) {
    var hex = dec.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
