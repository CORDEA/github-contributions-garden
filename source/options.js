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
 * date  : 2015-12-12
 */

var options = {};

options.restore = function() {
    var c = constants;

    chrome.storage.sync.get(c.getDefaultColor()
            , function(items) {
                document.getElementById("box-r").value = items[c.RED_KEY];
                document.getElementById("box-g").value = items[c.GREEN_KEY];
                document.getElementById("box-b").value = items[c.BLUE_KEY];
            });
}

options.save = function() {
    var r = document.getElementById("box-r").value;
    var g = document.getElementById("box-g").value;
    var b = document.getElementById("box-b").value;

    if (r == "" || g == "" || b == ""
            || r < 0 || r > 255
            || g < 0 || g > 255
            || b < 0 || b > 255
            ) {
        document.getElementById("submit").value = "Bad value";
        return;
    }

    var c = constants;

    var set = {};
    set[c.RED_KEY] = r;
    set[c.GREEN_KEY] = g;
    set[c.BLUE_KEY] = b;

    chrome.storage.sync.set(set
            , function() {
                document.getElementById("submit").value = "Saved";
                options.restore();
            });
}

options.windowOnLoad_ = function() {
    options.restore();
    document.getElementById("submit").addEventListener("click",options.save);
}

options.initialize_ = function() {
    window.addEventListener("load", options.windowOnLoad_);
}

options.initialize_();
