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
    this.r = r;
    this.g = g;
    this.b = b;
}

colutil.getGithubGradation = function(baseRgb) {
    var grads = [];

    var r = baseRgb.r;
    var g = baseRgb.g;
    var b = baseRgb.b;

    var grad = new colutil.rgb(r, g, b)
    var hex = colutil.rgbToHex(grad);
    grads.push(hex);
    grad = new colutil.rgb(r += 38, g += 59, b += 29);
    hex = colutil.rgbToHex(grad);
    grads.push(hex);
    grad = new colutil.rgb(r += 72, g += 35, b += 37);
    hex = colutil.rgbToHex(grad);
    grads.push(hex);
    grad = new colutil.rgb(r += 74, g += 32, b += 32);
    hex = colutil.rgbToHex(grad);
    grads.push(hex);
    grad = new colutil.rgb(238, 238, 238);
    hex = colutil.rgbToHex(grad);
    grads.push(hex);

    var rev = [];
    for (var i = grads.length - 1; i >= 0 ; i--) {
        rev.push(grads[i]);
    }

    return rev;
}

colutil.componentToHex = function(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

colutil.rgbToHex = function(rgb) {
    return "#" + colutil.componentToHex(rgb.r) + colutil.componentToHex(rgb.g) + colutil.componentToHex(rgb.b);
}

colutil.hexToRgb = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
